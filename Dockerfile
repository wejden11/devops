# Use an official Node runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI and dependencies
RUN npm install -g @angular/cli

# Install app dependencies
RUN npm install

# Copy the content of the local src directory to the working directory
COPY . .

# Expose port 4200 for the Angular app
EXPOSE 4200

# Command to start the Angular application
CMD ["ng", "serve", "--host", "0.0.0.0"]
