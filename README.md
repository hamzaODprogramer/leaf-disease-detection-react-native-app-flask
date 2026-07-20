# Leaf Disease Detection

A React Native (Expo) mobile app that identifies plant diseases from leaf photos using the Gemini API.

## Features

- **Scan** — Take or pick a leaf photo for disease analysis
- **Diagnosis** — Gemini API returns disease name, confidence, description, and recommendations
- **History** — Local SQLite database stores past detections
- **Gallery** — Browse scanned leaf images

## Tech Stack

- React Native (Expo Router)
- TypeScript
- Gemini API (Google Generative AI)
- SQLite (expo-sqlite)
- Flask backend (for ML prediction fallback)

## Setup

```bash
npm install
```

Create a `.env` file in the project root:

```env
EXPO_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
EXPO_PUBLIC_BACKEND_URL=http://your-flask-backend:5000
```

Start the app:

```bash
npx expo start
```

## Project Structure

```
app/             Expo Router pages (file-based routing)
  (tabs)/        Tab navigation screens
  result/        Disease analysis result screen
  waiting/       Analysis loading screen
  guide/         User guide screen
  settings/      App settings screen
actions/         API call functions
components/      Reusable UI components
constants/       Colors, routes, guide data
hooks/           Custom React hooks
utils/           Database utility
```

## Architecture

1. User captures or selects a leaf image
2. Image is optionally sent to a Flask backend for ML prediction
3. If diseased, image is analyzed by Gemini API
4. Results and recommendations are displayed and saved locally
