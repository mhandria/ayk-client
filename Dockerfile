FROM node:11

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

EXPOSE 8080

ENTRYPOINT [ "npm", "run", "publish" ]
