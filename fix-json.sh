#!/bin/bash

# Create a clean package.json
cat > package.json << 'EOL'
{
  "name": "saudiamoving.com",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@headlessui/react": "^1.7.18",
    "@heroicons/react": "^2.1.1",
    "@types/js-cookie": "^3.0.6",
    "axios": "^1.6.7",
    "date-fns": "^2.30.0",
    "framer-motion": "^12.4.1",
    "js-cookie": "^3.0.5",
    "mongoose": "^8.1.1",
    "next": "14.1.0",
    "next-auth": "^4.24.11",
    "openai": "^4.83.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.54.2",
    "react-hot-toast": "^2.4.1"
  },
  "devDependencies": {
    "@types/node": "20.17.18",
    "@types/react": "18.3.18",
    "@types/react-dom": "^18.2.18",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.33",
    "tailwindcss": "^3.4.1",
    "typescript": "5.7.3"
  }
}
EOL

# Remove any BOM or hidden characters
tr -d '\r' < package.json > package.json.clean
mv package.json.clean package.json

# Validate JSON
node -e "JSON.parse(require('fs').readFileSync('package.json'))"

# Commit and push
git add package.json
git commit -m "Fix package.json format"
git push origin main 