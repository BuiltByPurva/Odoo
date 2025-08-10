# 🚀 Odoo Auth Project Setup Guide

This guide will help you set up and run the Odoo Auth project on any machine.

## 📋 Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or cloud service)

### Installing Node.js
- **Windows**: Download from [nodejs.org](https://nodejs.org/)
- **macOS**: Use Homebrew: `brew install node`
- **Linux**: Use package manager or [nvm](https://github.com/nvm-sh/nvm)

### Installing MongoDB
- **Local Installation**: Download from [mongodb.com](https://www.mongodb.com/try/download/community)
- **Cloud Service**: Use [MongoDB Atlas](https://www.mongodb.com/atlas) (free tier available)

## 🛠️ Quick Setup

### 1. Clone and Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Environment Configuration

#### Backend (.env)
```bash
cd backend
# Copy the example environment file
cp env.example .env

# Edit .env with your configuration
# Windows: notepad .env
# macOS/Linux: nano .env
```

**Required Environment Variables:**
```env
MONGO_URI=mongodb://localhost:27017/odoo_auth
PORT=5000
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=24h
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173,http://127.0.0.1:3000,http://127.0.0.1:5173
```

#### Frontend (.env)
```bash
cd frontend
# Copy the example environment file
cp env.example .env

# Edit .env with your configuration
```

**Required Environment Variables:**
```env
VITE_API_URL=http://localhost:5000
```

### 3. Start the Application

#### Option A: Run Both Services (Recommended)
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

#### Option B: Use the Setup Script
```bash
# Windows
npm run setup

# macOS/Linux
npm run setup
```

## 🔧 Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Check what's using the port
# Windows
netstat -ano | findstr :5000
netstat -ano | findstr :5173

# macOS/Linux
lsof -i :5000
lsof -i :5173

# Kill the process or change ports in .env files
```

#### 2. MongoDB Connection Issues
```bash
# Check if MongoDB is running
# Windows
net start MongoDB

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

#### 3. CORS Errors
- Ensure `ALLOWED_ORIGINS` in backend `.env` includes your frontend URL
- Check that frontend `VITE_API_URL` matches backend URL

#### 4. Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Environment-Specific Notes

#### Windows
- Use `cmd` or PowerShell
- MongoDB service might need to be started manually
- Check Windows Defender firewall settings

#### macOS
- Use Terminal or iTerm2
- MongoDB might need to be started with Homebrew services
- Check System Preferences > Security & Privacy

#### Linux
- Use your preferred terminal
- MongoDB service might need sudo permissions
- Check firewall settings (ufw, iptables)

## 📱 Accessing the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

## 🚀 Production Deployment

### Backend
```bash
cd backend
npm run build
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm run preview
```

## 📞 Support

If you encounter issues:
1. Check the console logs for error messages
2. Verify all environment variables are set correctly
3. Ensure MongoDB is running and accessible
4. Check that ports are not blocked by firewall

## 🔄 Updates

To update the project:
```bash
git pull origin main
cd backend && npm install
cd ../frontend && npm install
```
