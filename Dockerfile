# Use the official Nginx image as the base
FROM nginx:alpine

# Copy your website files (like index.html) to the web server directory
# Note: Ensure you have an index.html file in your repo!
COPY . /usr/share/nginx/html/

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
