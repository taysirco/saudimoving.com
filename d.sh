#!/bin/bash

# Remove any existing package.json backup
rm -f package.json.bak

# Backup current package.json
cp package.json package.json.bak

# Create clean package.json
cat > package.json << 'EOL'
{
  "name": "saudiamoving.com",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "clean": "rimraf .next out",
    "type-check": "tsc --noEmit"
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
    "react-colorful": "^5.6.1",
    "react-dom": "^18.2.0",
    "react-dropzone": "^14.2.3",
    "react-hook-form": "^7.54.2",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.4.0",
    "recharts": "^2.15.1",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.16",
    "@types/react": "^18.2.52",
    "@types/react-dom": "^18.2.18",
    "@types/uuid": "^9.0.8",
    "autoprefixer": "^10.4.17",
    "dotenv": "^16.4.7",
    "postcss": "^8.4.33",
    "tailwindcss": "^3.4.1",
    "ts-node": "^10.9.2",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.3.3"
  }
}
EOL

# Add and commit changes
git add package.json
git commit -m "Fix package.json format"
git push origin main

# Restore original package.json
mv package.json.bak package.json
