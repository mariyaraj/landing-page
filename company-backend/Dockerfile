FROM openjdk:17-jdk-slim

# Install curl for debugging
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY target/company-management-service-0.0.1-SNAPSHOT.jar ./app.jar

# Healthcheck hinzufügen
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:8082/actuator/health || exit 1

ENTRYPOINT ["java", "-jar", "app.jar"]