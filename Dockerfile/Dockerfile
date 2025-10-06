# --- Stage 1: Build Stage ---
# This stage installs all dependencies, including dev dependencies if needed for a build step
FROM node:18 AS build

# Create the app directory
WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of your application source code
COPY . .


# --- Stage 2: Production Stage ---
# Start from a lightweight alpine image for the final product
FROM node:18-alpine

# Set build-time argument for versioning
ARG VERSION=V1.1
LABEL org.label-schema.version=$VERSION

# Set the environment to production
ENV NODE_ENV="production"

WORKDIR /app

# Copy the package.json files from the build stage
COPY --from=build /app/package*.json ./

# Install ONLY the production dependencies. This is a key optimization.
RUN npm ci --only=production

# Copy the application code from the build stage
COPY --from=build /app .

# Expose the application port
EXPOSE 3000

# Use CMD to run the application with node. This is more reliable.
CMD [ "node", "./bin/www" ]