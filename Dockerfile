FROM node:10.23.0-alpine

RUN npm install -g gatsby-cli

CMD ["gatsby", "develop", "-H", "0.0.0.0"]
