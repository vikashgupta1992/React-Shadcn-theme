# Step 1: Build the application
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

RUN npm cache clean --force || true && \
    rm -rf node_modules package-lock.json

# Install dependencies
RUN npm install
RUN npm install @rollup/rollup-linux-x64-gnu --save-optional

# Copy the rest of the application code
COPY . .

# Build the Vite application
#RUN npm run build

# Step 2: Serve the application
#FROM nginx:alpine

# Copy the built application from the previous stage
#COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom nginx configuration file (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port that Nginx will run on
EXPOSE 5173

# Start Nginx
#CMD ["nginx", "-g", "daemon off;"]
CMD ["npm", "run", "dev"]