@echo off
echo 🚀 Setting up MongoDB Portfolio Integration...
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo 📦 Installing dependencies...
    call npm install
) else (
    echo ✅ Dependencies already installed
)

REM Install new dependencies
echo 📦 Installing MongoDB and Framer Motion...
call npm install mongoose framer-motion

REM Create .env.local if it doesn't exist
if not exist ".env.local" (
    echo 📝 Creating .env.local from template...
    copy .env.example .env.local
    echo ⚠️  IMPORTANT: Edit .env.local with your MongoDB connection string!
) else (
    echo ✅ .env.local already exists
)

echo.
echo ✅ Setup complete!
echo.
echo 📋 Next steps:
echo 1. Edit .env.local with your MongoDB Atlas connection string
echo 2. Run 'npm start' to test the application
echo 3. Navigate to /contact to test the contact form
echo.
echo 📖 See MONGODB_SETUP.md for detailed instructions
pause
