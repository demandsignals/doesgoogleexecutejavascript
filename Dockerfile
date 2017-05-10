FROM node:7.9.0-alpine

WORKDIR /usr/src/doesgoogleexecutejavascript

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
