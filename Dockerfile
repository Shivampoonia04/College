FROM node:18-alpine
WORKDIR /usr/src/app
RUN apk add --no-cache --update python3 make g++
COPY package*.json ./
RUN npm install
COPY . .
RUN ln -sf python3 /usr/bin/python
RUN apk add --no-cache curl
CMD ["npm", "start"]