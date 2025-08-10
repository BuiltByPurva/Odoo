# 🔐 Odoo Auth Project

A full-stack authentication system built with React frontend and Node.js backend, featuring JWT authentication and MongoDB database.

## 🚀 Quick Start

### For Windows Users
```bash
# Double-click setup.bat or run in Command Prompt
setup.bat
```

### For Unix/Linux/macOS Users
```bash
# Make script executable and run
chmod +x setup.sh
./setup.sh
```

### Manual Setup
```bash
# Install all dependencies
npm run install:all

# Copy environment files
cp backend/env.example backend/.env
cp frontend/env.example frontend/.env

# Edit .env files with your configuration
# Then start development servers
npm run dev
```

## 📁 Project Structure

```
login/
├── backend/          # Node.js + Express API
├── frontend/         # React + Vite application
├── setup.bat         # Windows setup script
├── setup.sh          # Unix/Linux/macOS setup script
├── SETUP.md          # Detailed setup guide
└── package.json      # Root project scripts
```

## 🛠️ Development

```bash
# Start both backend and frontend in development mode
npm run dev

# Start only backend
npm run dev:backend

# Start only frontend
npm run dev:frontend
```

## 🌐 Access Points

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

## 📚 Documentation

- **Setup Guide**: [SETUP.md](./SETUP.md) - Comprehensive setup instructions
- **Troubleshooting**: See SETUP.md for common issues and solutions

## 🔧 Requirements

- Node.js 16+
- npm 8+
- MongoDB (local or cloud)

## 📝 Environment Variables

### Backend (.env)
```env
MONGO_URI=mongodb://localhost:27017/odoo_auth
PORT=5000
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
```

## 🚀 Production

```bash
# Build both applications
npm run build

# Start production servers
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

