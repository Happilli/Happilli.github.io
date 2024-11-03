---
title: Weather App
date: 2024-11-03 00:00:00 -0500
categories: [web-app]
tags: [reactjs, docker]
description: A sleek weather app built with ReactJS, complete with Docker setup.
image: /assets/image/WEATHER.png
---

Discover a modern weather app built with ReactJS, designed to deliver real-time weather updates quickly and efficiently. 

<iframe width="400" height="300" src="https://www.youtube.com/embed/ISe_nYGoJFg" frameborder="0" allowfullscreen></iframe>

### 🚀 GitHub Repository
Explore the complete source code on [GitHub](https://github.com/RyuZinOh/weather-checker) and contribute or get insights.

---

### 🌩️ Features
- **Real-Time Weather**: Fetch live weather data with a sleek user interface.
- **ReactJS**: Built using the latest features of React for a seamless experience.
- **Docker-Ready**: Easily deploy and run in a containerized environment.

---

### 🐳 Running the App with Docker

> **Note:** This is my first attempt at using Docker! It’s been a fun and challenging experience to learn how containerization can simplify deployment.

1. **Pull the Docker Image**
   ```bash
   docker pull safallama/weather-app
   ```

2. **Run the App**  
   Replace `your_api_key_here` with your valid API key:
   ```bash
   docker run -p 3000:3000 -e REACT_APP_WEATHER_API_KEY=your_api_key_here safallama/weather-app
   ```

3. **Running a Specific Version**
   ```bash
   docker pull safallama/weather-app:v1.0
   ```

4. **Run Using Image ID**  
   Use the image ID after pulling:
   ```bash
   docker run -p 3000:3000 [image_id]
   ```

5. **Run with API Key & Image ID**
   ```bash
   docker run -p 3000:3000 -e REACT_APP_WEATHER_API_KEY=your_api_key_here [image_id]
   ```

---

**🌐 Note:** Make sure port `3000` is free on your local machine, and always use a valid API key for the weather service.

