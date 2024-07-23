# Video Caption Search App

## Project Description

This project is an application that allows users to upload videos, extract subtitles, and search through subtitles to find relevant video frames based on natural language queries. The backend is built with Django and Django REST framework, and the frontend is built with React.

## Features

- Upload videos (less than 3 minutes)
- Extract subtitles from uploaded videos
- Search subtitles using natural language queries
- Display video frame based on search results

## Tech Stack

- **Backend:** Django, Django REST framework
- **Frontend:** React, Axios
- **Database:** SQLite (can be swapped with any other database)
- **Other Tools:** Docker, ffmpeg (for subtitle extraction)

## Setup Instructions

### Backend

1. **Clone the repository:**

   ```sh
   git clone https://github.com/codeldorado/video-caption-search.git
   cd video-caption-search/backend
   ```

2. **Create and activate a virtual environment:**

   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. **Install the dependencies:**

   ```sh
   pip install -r requirements.txt
   ```

4. **Apply migrations:**

   ```sh
   python manage.py migrate
   ```

5. **Run the development server:**

   ```sh
   python manage.py runserver
   ```

### Frontend

1. **Navigate to the frontend directory:**

   ```sh
   cd ../frontend
   ```

2. **Install the dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm start
   ```

### Using Docker

1. **Build and run the Docker containers:**

   ```sh
   docker-compose up --build
   ```

## Usage

1. **Upload a Video:**

   - Go to the frontend, and use the upload component to upload a video file.

2. **Search Subtitles:**
   - Enter a natural language query in the search bar to find relevant video frames.

## API Endpoints

- **Video Upload:** `POST /api/videos/`
- **Search Subtitles:** `POST /api/videos/<video_id>/search/`
  > > > > > > > 64a986d (Documentation with Readme.md)
