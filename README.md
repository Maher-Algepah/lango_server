# Lango Server

This is the backend server for the Lango application built with Node.js and Express.js.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory and add your environment variables:
```
PORT=3000
MONGODB_URI=mongodb+srv://engouser:uc9O045mDcg5cmYF@cluster0.o2btz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=lango_super_secret_key_2024
JWT_EXPIRE=30d
```

3. Start the development server:
```bash
npm run dev
```

The server will start on http://localhost:3000 (or the port specified in your .env file).

You should see the following output in terminal:
![image](https://github.com/user-attachments/assets/4e87a477-7c87-456e-8706-8db2128c1e13)

If the port 3000 in use you can change it in .env file

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with hot-reload
- `npm test` - Run tests (not configured yet)

## API Endpoints

- `GET /` - Welcome message 
