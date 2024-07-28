# ChikitsaSamaya

# Hospital Appointment System

## Overview
The Hospital Appointment System (ChikitsaSamaya) is a web application designed to streamline the process of making and managing hospital appointments. The system features robust user authentication with multiple JWTs and password encryption using bcrypt. It allows patients to make appointments, and admins to manage doctors and patient appointments.

## Features
- **Patient Functionality:**
  - Register and login
  - Make appointments

- **Admin Functionality:**
  - Add new admins
  - Add new  doctors
  - View details of all doctors
  - Manage patient appointments

## Technologies Used
- **Frontend:** React.js
- **Backend:** Express.js
- **Database:** MongoDB Atlas
- **Image Storage:** Cloudinary API

## Setup Instructions

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/omkarauti11/ChikitsaSamaya.git
    cd ChikitsaSamaya
    ```

2. **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**
    ```bash
    cd frontend
    npm install
    ```
4. **Install dashboard dependencies:**
    ```bash
    cd dashboard
    npm install
    ```

5. **Set up environment variables in backend:**
 
    - Create a `config.env` file in the `backend` directory and add the following:

    ```env
    PORT=4000
    MONGO_URI=mongodb+srv://username:password@cluster0.9t0akcl.mongodb.net/?retryWrites=true
    FRONTEND_URL_ONE=http://localhost:5173
    FRONTEND_URL_TWO=http://localhost:5174
    JWT_SECRET_KEY=anykey
    JWT_EXPIRES=7d
    COOKIE_EXPIRE=7
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=
    ```

6. **Run the backend server:**
    ```bash
    npm run dev
    ```

7. **Run the frontend:**
    ```bash
    npm run dev
    ```
    
8. **Run the dashboard:**
    ```bash
    npm run dev
    ```

## Usage

1. **Access the application:**
    - Frontend URL One: `http://localhost:5173`
    - Frontend URL Two: `http://localhost:5174`

2. **Patient:**
    - Register and login
    - Navigate to the appointments section to book an appointment

3. **Admin:**
    - Login with admin credentials
    - Access the admin dashboard to add/manage doctors and appointments

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.


