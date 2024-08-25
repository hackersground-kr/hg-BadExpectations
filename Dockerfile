FROM openjdk:17
COPY build/libs/uiseongcome-0.0.1-SNAPSHOT-plain.jar app.jar
ENV TZ=Asia/Seoul
ENTRYPOINT ["java","-jar","/app.jar","-Duser.timezone=Asia/Seoul"]