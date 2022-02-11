FROM node:14-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

ENV PORT 80

ENV NODE_ENV production

EXPOSE ${PORT}

RUN npm run build

CMD ["npm", "run", "start:prod"]