FROM node:10

WORKDIR /src/

COPY package.json ./
COPY /src ./
COPY /server.js ./
COPY /public ./

RUN npm i

RUN npm build

EXPOSE 8080

ENTRYPOINT [ "npm", "run", "publish" ]