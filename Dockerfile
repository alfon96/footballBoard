FROM node:latest

WORKDIR /app

RUN npm install create-react-app

ENTRYPOINT ["npx","create-react-app"]