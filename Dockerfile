# Build stage for Backend
FROM maven:3.8.4-openjdk-17 as backend-builder
WORKDIR /backend
COPY company-backend/pom.xml .
COPY company-backend/src ./src
RUN mvn clean package -DskipTests

# Build stage for Frontend
FROM node:18-alpine as frontend-builder
WORKDIR /frontend
COPY company-frontend/package*.json ./
RUN npm install
COPY company-frontend .
ENV PORT=3001
ENV NEXT_PUBLIC_API_URL=/api
RUN npm run build

# Final stage
FROM nginx:alpine
# Copy frontend build
COPY --from=frontend-builder /frontend/out /usr/share/nginx/html
# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy backend jar
COPY --from=backend-builder /backend/target/company-management-service-0.0.1-SNAPSHOT.jar /app/app.jar

# Install Java
RUN apk add --no-cache openjdk17-jre

# Create and setup start script
RUN echo '#!/bin/sh' > /start.sh && \
    echo 'echo "Starting services..."' >> /start.sh && \
    echo 'echo "Starting Java backend application..."' >> /start.sh && \
    echo 'java -jar /app/app.jar &' >> /start.sh && \
    echo 'BACKEND_PID=$!' >> /start.sh && \
    echo 'sleep 5' >> /start.sh && \
    echo 'echo "Starting Nginx..."' >> /start.sh && \
    echo 'nginx -g "daemon off;" &' >> /start.sh && \
    echo 'NGINX_PID=$!' >> /start.sh && \
    echo 'wait' >> /start.sh && \
    chmod +x /start.sh

# Expose ports
EXPOSE 80 8082 3001

# Set the command to run
CMD ["/start.sh"]