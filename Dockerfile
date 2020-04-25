FROM node:14-alpine
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD yarn start
