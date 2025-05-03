# Use Node.js v22.14.0
FROM node:22.14.0-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the NestJS app (compile TypeScript to JavaScript)
RUN npm run build

# Expose the default port of the NestJS app
EXPOSE 3000

# Run the NestJS app in production mode
CMD ["npm", "run", "start:prod"]
