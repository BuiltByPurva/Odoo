@echo off
echo 🚀 Setting up Odoo Auth Project for Windows...
echo.

echo 📦 Installing backend dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Backend installation failed!
    pause
    exit /b 1
)

echo 📦 Installing frontend dependencies...
cd ../frontend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Frontend installation failed!
    pause
    exit /b 1
)

echo.
echo 🔧 Setting up environment files...
cd ../backend
if not exist .env (
    copy env.example .env
    echo ✅ Backend .env file created
    echo 📝 Please edit backend/.env with your database configuration
) else (
    echo ℹ️  Backend .env file already exists
)

cd ../frontend
if not exist .env (
    copy env.example .env
    echo ✅ Frontend .env file created
    echo 📝 Please edit frontend/.env with your API URL
) else (
    echo ℹ️  Frontend .env file already exists
)

echo.
echo 🎉 Setup complete! Next steps:
echo 1. Edit backend/.env with your MongoDB connection string
echo 2. Edit frontend/.env with your backend API URL
echo 3. Start MongoDB service
echo 4. Run 'npm run dev' in both backend and frontend directories
echo.
echo 💡 For detailed instructions, see SETUP.md
pause
