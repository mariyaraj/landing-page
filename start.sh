#!/bin/sh
echo "Starting services..."
echo "Starting Java backend application..."
java -jar /app/app.jar &
BACKEND_PID=$!
sleep 5
echo "Starting Nginx..."
nginx -g "daemon off;" &
NGINX_PID=$!
wait