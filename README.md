# Lokato-Foods
Lokato is a food delivery app enabling users to explore menus, order meals, and track orders seamlessly. Features include user authentication, menu browsing, cart management, and real-time order tracking. Built with Node.js, Express, and React, Lokato delivers a smooth user experience across desktop and mobile platforms.

To initialize the Lokato project, follow these steps:

1. Clone the Repository
First, clone the project repository from GitHub (or any other source control system you are using).

  git clone <repository-url>
  cd lokato
  
2. Install Backend Dependencies
Navigate to the backend directory and install the necessary dependencies.

  cd backend
  npm install

4. Set Up Environment Variables
Create a .env file in the backend directory and add the necessary environment variables.

    touch .env

Add the following variables to the .env file:

  MONGO_URI=<your-mongodb-connection-string>
  JWT_SECRET=<your-jwt-secret>

4. Start the Backend Server
Start the backend server.

  npm start

5. Install Frontend Dependencies
Navigate to the frontend directory and install the necessary dependencies.
  
  cd ../frontend
  npm install
  
6. Install Frontend Dependencies
Navigate to the frontend directory and install the necessary dependencies.

  npm start
    
7. Start the Frontend Server
Start the frontend development server.

  
  
9. Access the Application
Open your web browser and navigate to http://localhost:3000 to access the Lokato application.
  
Summary
Clone the repository.
Install backend dependencies.
Set up environment variables.
Start the backend server.
Install frontend dependencies.
Start the frontend server.
Access the application at http://localhost:3000.

Also create your own stripe account and use the api key for integrating the Payment gateway.

Live website:
https://lokato-frontend.onrender.com

