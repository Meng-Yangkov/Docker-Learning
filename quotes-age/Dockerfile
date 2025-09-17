# Step 1: Start with an official Node.js runtime as a parent image.
# We use the 'alpine' version because it's very small and secure.
FROM node:18-alpine

# Step 2: Set the working directory inside the container.
# This is where our app code will live.
WORKDIR /app

# Step 3: Copy the package.json file first.
# This helps Docker's caching. It won't re-run 'npm install' unless
# this file changes.
COPY package.json .

# Step 4: Install the application dependencies inside the container.
RUN npm install

# Step 5: Copy the rest of our application's source code.
COPY . .

# Step 6: Expose the port the app runs on.
# This tells Docker that the container will listen on port 4000.
EXPOSE 4000

# Step 7: Define the command to run the application.
# This is the same as running 'npm start' in your terminal.
CMD ["npm", "start"]