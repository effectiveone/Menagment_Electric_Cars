FROM node:16-alpine

WORKDIR /appreact

COPY package*.json ./
RUN yarn install --production

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]