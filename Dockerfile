FROM node:11 AS build-env
WORKDIR /proj

COPY . .

RUN npm i

RUN npm run build

FROM node:11
WORKDIR /www

COPY --from=build-env ./proj/node_modules ./node_modules
COPY --from=build-env ./proj/build ./build
COPY --from=build-env ./proj/public ./public
COPY --from=build-env ./proj/server.js .

EXPOSE 8080

ENTRYPOINT [ "node", "server.js" ]
