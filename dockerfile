FROM node:18-alpine3.16

RUN apk add g++ make py3-pip

WORKDIR /app

ADD package.json .
ADD yarn.lock .
RUN yarn --frozen-lockfile

ADD . .

RUN yarn build

CMD yarn start
