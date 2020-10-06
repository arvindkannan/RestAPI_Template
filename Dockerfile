FROM node:14.13.0-alpine3.12
ENV NODE_ENV development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
RUN npm run build
COPY . .
EXPOSE 14000
CMD ["node", "./dist/server.js"]
