FROM node:18-alpine3.16

WORKDIR /app

ADD package.json .
ADD yarn.lock .
RUN yarn

ADD . .

RUN yarn build

CMD yarn start
