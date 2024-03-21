FROM node:20.11.1

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]