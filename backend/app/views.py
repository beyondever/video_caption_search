from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Video, Subtitle
from .serializers import VideoSerializer
from django.conf import settings
import os
import subprocess
import json

class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

    def perform_create(self, serializer):
        instance = serializer.save()
        # Extract subtitles here
        self.extract_subtitles(instance)

    def extract_subtitles(self, video_instance):
        video_path = os.path.join(settings.MEDIA_ROOT, video_instance.video_file.name)
        subtitle_path = os.path.join(settings.MEDIA_ROOT, 'subtitles', f"{video_instance.id}.json")
        
        # Use ffmpeg to extract subtitles (assuming video has subtitles)
        subprocess.run(['ffmpeg', '-i', video_path, '-map', '0:s:0', subtitle_path])

        # Load and save subtitles to DB
        with open(subtitle_path, 'r') as f:
            subtitles = json.load(f)
            for subtitle in subtitles:
                Subtitle.objects.create(
                    video=video_instance,
                    text=subtitle['text'],
                    start_time=subtitle['start_time'],
                    end_time=subtitle['end_time']
                )

    @action(detail=True, methods=['post'])
    def search(self, request, pk=None):
        video = self.get_object()
        query = request.data.get('query', '')
        subtitles = Subtitle.objects.filter(video=video, text__icontains=query)
        if subtitles.exists():
            result = subtitles.first()
            return Response({
                'text': result.text,
                'start_time': result.start_time,
                'end_time': result.end_time
            }, status=status.HTTP_200_OK)
        return Response({'error': 'No matching subtitles found'}, status=status.HTTP_404_NOT_FOUND)

