#!/bin/bash

echo "🚀 Setting up Odoo Auth Project..."
echo

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing backend dependencies..."
cd backend
npm install
if [ $? -ne 0 ]; then
    echo "❌ Backend installation failed!"
    exit 1
fi

echo "📦 Installing frontend dependencies..."
cd ../frontend
npm install
if [ $? -ne 0 ]; then
    echo "❌ Frontend installation failed!"
    exit 1
fi

echo
echo "🔧 Setting up environment files..."
cd ../backend
if [ ! -f .env ]; then
    cp env.example .env
    echo "✅ Backend .env file created"
    echo "📝 Please edit backend/.env with your database configuration"
else
    echo "ℹ️  Backend .env file already exists"
fi

cd ../frontend
if [ ! -f .env ]; then
    cp env.example .env
    echo "✅ Frontend .env file created"
    echo "📝 Please edit frontend/.env with your API URL"
else
    echo "ℹ️  Frontend .env file already exists"
fi

echo
echo "🎉 Setup complete! Next steps:"
echo "1. Edit backend/.env with your MongoDB connection string"
echo "2. Edit frontend/.env with your backend API URL"
echo "3. Start MongoDB service"
echo "4. Run 'npm run dev' in both backend and frontend directories"
echo
echo "💡 For detailed instructions, see SETUP.md"

# Make the script executable
chmod +x setup.sh
