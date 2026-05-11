#!/bin/bash

echo "🚀 Setting up MongoDB Portfolio Integration..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

# Install new dependencies
echo "📦 Installing MongoDB and Framer Motion..."
npm install mongoose framer-motion

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local from template..."
    cp .env.example .env.local
    echo "⚠️  IMPORTANT: Edit .env.local with your MongoDB connection string!"
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Edit .env.local with your MongoDB Atlas connection string"
echo "2. Run 'npm start' to test the application"
echo "3. Navigate to /contact to test the contact form"
echo ""
echo "📖 See MONGODB_SETUP.md for detailed instructions"
