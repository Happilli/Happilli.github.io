---
title: Serenity Profiles
date: 2024-11-13 0:00:00 -0500
categories: [web-application]
tags: [flask, mongodb, render]
description: Image Processing web-application
image: /assets/image/IP.png
---

# Serenity Profiles

Serenity Profiles is a Flask-based web application that allows users to create and manage personalized profiles with customizable avatars, backgrounds, and titles.

## Features

- **User Registration and Login**
- **Profile Management**
- **Dynamic Profile Image Generation**
- **View Profiles of all Registered Users**

## Getting Started Locally

Follow these steps to run the project on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/RyuZinOh/image-processor
cd image-processor
```

### 2. Create a virtual environment (optional, but recommended)

```bash
python -m venv venv
source venv/bin/activate   # On Windows, use venv\Scripts\activate
```

### 3. Install the required packages

```bash
pip install -r requirements.txt
```

### 4. Set up environment variables

Create a `.env` file in the root directory of the project and add the following variables:

| Variable        | Description                                      |
|-----------------|--------------------------------------------------|
| `MONGODB_URL`   | Your MongoDB connection string                   |
| `SECRET_KEY`    | A randomly generated secret key for the app      |

Example `.env` file:

```plaintext
MONGODB_URL="your_mongodb_connection_string"
SECRET_KEY="your_secret_key"
```

### 5. Run the application

```bash
python app.py
```

The application will be accessible at `http://127.0.0.1:5000`.

---

## Docker Usage

To run the application in a Docker container, follow the steps below:

### 1. Pull the Docker image

```bash
docker pull safallama/imageprocesor:v1.0
```

### 2. Run the container

```bash
docker run -p 5000:5000 -e MONGODB_URL="mongodb://host.docker.internal:27017/<your-db-name>" -e SECRET_KEY="your_secret_key" safallama/imageprocesor:v1.0
```

**Note**: 
- Replace `your_secret_key` with a randomly generated string. 
- The `host.docker.internal` URL ensures Docker can access your local MongoDB instance.

---

## Contributing

Feel free to make modifications and submit a pull request. I’ll review it and merge if everything looks good!

---

## Warning

The Docker image prioritizes functionality over UI/UX since it was originally a prototype. However, following the setup instructions ensures the application runs as expected.

---

## Demo Profile

Here’s a demo profile image displayed in a table:

| **Item**           | **Description**                                                                                                                                              |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Demo Profile**    | <img src="https://github.com/RyuZinOh/static-assets/blob/main/processedIMage/saverCard.png?raw=true" width="300" />                                               |
                                      

### Demo Video:
<iframe width="400" height="300" src="https://www.youtube.com/embed/dyYMlzPuIdw" frameborder="0" allowfullscreen></iframe>

