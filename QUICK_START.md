# 🚀 Quick Start Guide - Portfolio with MongoDB

## To Run Your Portfolio:

### Method 1: Simple Start (Current Project)
```bash
# 1. Navigate to project folder
cd d:/kamal/fortfolio/NewPortfolio

# 2. Install dependencies (if not done)
npm install

# 3. Start development server
npm start

# 4. Open browser
# The app will automatically open at http://localhost:3000
```

### Method 2: With MongoDB Contact Form

```bash
# 1. Navigate to project folder
cd d:/kamal/fortfolio/NewPortfolio

# 2. Install dependencies
npm install

# 3. Create .env.local file
cp .env.example .env.local

# 4. Edit .env.local and add your MongoDB URI
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

# 5. Start development server
npm start
```

---

## Common Commands:

```bash
# Start development server (with hot reload)
npm start

# Build for production
npm run build

# Run tests
npm test

# Install a new package
npm install package-name

# Check for outdated packages
npm outdated
```

---

## Troubleshooting:

### "Cannot find module" error:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use:
```bash
# Kill the process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Or use different port
PORT=3001 npm start
```

### "npm command not found":
- Install Node.js from https://nodejs.org/
- Restart terminal after installation

---

## Project Structure:

```
NewPortfolio/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── About/
│   │   ├── Contact/     # New contact form
│   │   ├── Home/
│   │   ├── Projects/
│   │   └── Resume/
│   ├── App.js           # Main app component
│   └── index.js         # Entry point
├── api/                 # API endpoints
│   └── contact.js       # Contact form API
├── lib/                 # Utilities
│   └── mongodb.js       # Database connection
├── models/              # Database models
│   └── Contact.js       # Contact schema
└── package.json         # Dependencies
```

---

## Routes in Your App:

- `/` - Home page
- `/about` - About me
- `/project` - Projects showcase
- `/contact` - Contact form (NEW!)
- `/resume` - Resume/CV

---

## Next Steps After Installation:

1. ✅ Wait for `npm install` to complete
2. ✅ Run `npm start`
3. ✅ Check http://localhost:3000
4. ✅ Navigate to `/contact` to see new contact form
5. ✅ Set up MongoDB Atlas (see MONGODB_SETUP.md)

---

## MongoDB Setup (Optional - for Contact Form):

See detailed guide: MONGODB_SETUP.md

Quick steps:
1. Go to mongodb.com/cloud/atlas
2. Create free account
3. Create cluster (M0 - Free tier)
4. Create database user
5. Whitelist IP (allow from anywhere for dev)
6. Copy connection string
7. Add to .env.local

---

## Deployment:

### Vercel (Recommended):
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

### Netlify:
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

---

## Need Help?

- Check MONGODB_SETUP.md for MongoDB details
- Check browser console for errors (F12)
- Check terminal for backend errors
- Ensure you're in correct directory: NewPortfolio

---

**Current Status:** Dependencies installing... 
Once complete, run: `npm start`
