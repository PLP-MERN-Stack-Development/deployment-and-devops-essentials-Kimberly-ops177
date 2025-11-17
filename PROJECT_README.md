# MERN Task Manager Application

A full-stack task management application built with MongoDB, Express.js, React, and Node.js (MERN stack). This application is designed for Week 7 Assignment on Deployment and DevOps Essentials.

## Features

- **Task Management**: Create, read, update, and delete tasks
- **Task Properties**:
  - Title and description
  - Status (Pending, In Progress, Completed)
  - Priority levels (Low, Medium, High)
  - Due dates
- **Filtering & Sorting**: Filter tasks by status and priority, sort by date, due date, or priority
- **Responsive Design**: Mobile-friendly interface
- **RESTful API**: Well-structured backend API
- **Production-Ready**: Includes security features, error handling, and logging

## Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Security**: Helmet, CORS, Rate Limiting
- **Utilities**: Compression, Morgan (logging)

### Frontend
- **React** - UI library
- **CSS3** - Styling
- **Fetch API** - HTTP requests

## Project Structure

```
deployment-and-devops-essentials-Kimberly-ops177/
├── backend/
│   └── server.js              # Express server and API routes
├── frontend/
│   ├── public/                # Static files
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── TaskForm.js
│   │   │   ├── TaskForm.css
│   │   │   ├── TaskList.js
│   │   │   ├── TaskList.css
│   │   │   ├── TaskItem.js
│   │   │   ├── TaskItem.css
│   │   │   ├── FilterBar.js
│   │   │   └── FilterBar.css
│   │   ├── App.js             # Main App component
│   │   ├── App.css            # App styles
│   │   └── index.js           # Entry point
│   ├── package.json           # Frontend dependencies
│   └── .env.example           # Frontend environment variables template
├── package.json               # Root dependencies
├── .env.example               # Backend environment variables template
├── .gitignore                 # Git ignore file
├── PROJECT_README.md          # This file
└── README.md                  # Assignment overview

```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd deployment-and-devops-essentials-Kimberly-ops177
```

### 2. Backend Setup

```bash
# Install root dependencies
npm install

# Create .env file from example
cp .env.example .env

# Edit .env and add your MongoDB connection string
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmanager
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# The default API URL is http://localhost:5000
```

### 4. MongoDB Atlas Setup

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user with read/write permissions
4. Whitelist your IP address (or allow access from anywhere for development: 0.0.0.0/0)
5. Get your connection string and add it to the backend `.env` file

## Running the Application

### Option 1: Run Both Servers Separately

**Terminal 1 - Backend:**
```bash
npm run server
```
Backend will run on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```
Frontend will run on http://localhost:3000

### Option 2: Run Both Servers Concurrently

```bash
npm run dev
```

## API Endpoints

### Health Check
- `GET /health` - Server health check

### Tasks
- `GET /api/tasks` - Get all tasks
  - Query params: `?status=pending&priority=high&sortBy=dueDate`
- `GET /api/tasks/:id` - Get single task
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

### Example Request Body (POST/PUT)

```json
{
  "title": "Complete assignment",
  "description": "Finish Week 7 deployment assignment",
  "status": "in-progress",
  "priority": "high",
  "dueDate": "2025-01-20"
}
```

## Environment Variables

### Backend (.env)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
```

## Production Deployment

### Backend Deployment (Render/Railway/Heroku)

1. Push code to GitHub
2. Create new web service on your chosen platform
3. Set environment variables:
   - `NODE_ENV=production`
   - `MONGODB_URI=your_atlas_connection_string`
   - `FRONTEND_URL=your_frontend_deployment_url`
4. Deploy from GitHub repository

### Frontend Deployment (Vercel/Netlify)

1. Build the frontend: `cd frontend && npm run build`
2. Create new project on your chosen platform
3. Set environment variable:
   - `REACT_APP_API_URL=your_backend_deployment_url`
4. Deploy from GitHub repository or upload build folder

## Security Features

- **Helmet.js**: Sets secure HTTP headers
- **CORS**: Configurable Cross-Origin Resource Sharing
- **Rate Limiting**: Prevents brute force attacks
- **Input Validation**: Mongoose schema validation
- **Error Handling**: Comprehensive error handling middleware

## Testing

The application includes basic error handling. To test:

1. Try creating a task without a title (validation error)
2. Try accessing a non-existent task ID (404 error)
3. Check the health endpoint: `http://localhost:5000/health`

## Development Tips

- Use MongoDB Compass to view your database
- Use Postman or Thunder Client to test API endpoints
- Check browser console and network tab for debugging
- Monitor backend logs in the terminal

## Common Issues & Solutions

### Issue: Cannot connect to MongoDB
**Solution**: Check your MongoDB URI, ensure IP is whitelisted, verify credentials

### Issue: CORS errors
**Solution**: Verify FRONTEND_URL in backend .env matches your frontend URL

### Issue: Port already in use
**Solution**: Kill the process using that port or change PORT in .env

### Issue: Frontend can't reach backend
**Solution**: Ensure REACT_APP_API_URL is set correctly and backend is running

## Week 7 Assignment Tasks

This application is ready for:

- ✅ Task 1: Application preparation (optimization, error handling, MongoDB setup)
- ✅ Task 2: Backend deployment (ready for Render/Railway/Heroku)
- ✅ Task 3: Frontend deployment (ready for Vercel/Netlify)
- ⏳ Task 4: CI/CD pipeline setup (requires GitHub Actions workflows)
- ⏳ Task 5: Monitoring setup (requires integration with monitoring tools)

## Next Steps for Assignment

1. Set up MongoDB Atlas cluster
2. Test application locally
3. Deploy backend to chosen platform
4. Deploy frontend to chosen platform
5. Create GitHub Actions workflows
6. Set up monitoring tools
7. Document deployment URLs and process

## License

MIT

## Author

Kimberly-ops177
Week 7 - Deployment and DevOps Essentials
