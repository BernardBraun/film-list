FROM node:16
WORKDIR /app-film-list
COPY . .
RUN npm install
ENTRYPOINT npm start