FROM eclipse-temurin:17-jre

ENV JAVA_OPTS="-Xmx512m -Xms256m"

WORKDIR /home/jhipster

# Copia el JAR que generamos hace un momento
COPY target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]