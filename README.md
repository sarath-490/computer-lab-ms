# Computer Lab Management System

A full-stack application designed for managing computer lab equipment and streamlining the process of reporting and tracking student complaints and equipment issues.

## 🚀 Teck Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router DOM

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT with bcryptjs

## ✨ Features

- **Authentication**: Secure login and registration for students and admins.
- **Student Dashboard**: Report issues, track complaint status, and view lab information.
- **Admin Dashboard**: Manage complaints, update equipment status, and oversee lab operations.
- **Image Uploads**: Support for uploading images related to reported issues.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.

## 📁 Project Structure

```text
.
├── backend/            # Express server and database logic
│   ├── config/         # Database and middleware configuration
│   ├── controllers/    # Request handlers
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API endpoints
│   └── app.js          # Main entry point
└── frontend/           # React client
    ├── src/
    │   ├── components/ # Reusable UI components
    │   ├── store/      # Zustand state stores
    │   ├── types/      # TypeScript definitions
    │   └── App.tsx     # Main application component
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB (Local or Atlas)
- Cloudinary Account (for image uploads)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
 
   ```
4. Start the server (development mode):
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 📜 Scripts

### Backend
- `npm start`: Runs the production server.
- `npm run dev`: Runs the server with `nodemon` for auto-restart.

### Frontend
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint for code quality.
- `npm run preview`: Previews the production build locally.
