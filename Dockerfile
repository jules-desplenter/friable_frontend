# # Use an official Node.js runtime as the base image
# FROM node:14-alpine

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install app dependencies
# RUN npm install

# # Copy the entire app directory to the working directory
# COPY . .

# # Build the React app for production
# # RUN npm run build

# # Expose port 80 to the outside world
# EXPOSE 3000

# # Define the command to run the app when the container starts
# CMD ["npm", "start"]

FROM node:14-alpine as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire app directory to the working directory
COPY . . 
# Build the app
# RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]