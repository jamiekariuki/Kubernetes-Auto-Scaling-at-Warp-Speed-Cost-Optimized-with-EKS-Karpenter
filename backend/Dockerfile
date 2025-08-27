FROM eclipse-temurin:21-jdk

WORKDIR /app

# Copy everything (including pom.xml and src/)
COPY . .

# Make the Maven wrapper executable
RUN chmod +x mvnw

# Build the Spring Boot app
RUN ./mvnw clean package -DskipTests

# Copy the generated jar to the final image path
# (adjust the name if your jar is different)
RUN mv target/*.jar app.jar

# Expose the port your app runs on
EXPOSE 8080

# Run the app
ENTRYPOINT ["java", "-jar", "app.jar"]


