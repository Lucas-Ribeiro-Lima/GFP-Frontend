FROM node:23.2.0 AS production

WORKDIR /gfp

COPY .next ./.next
COPY public ./public
COPY package.json ./

RUN yarn install --production

EXPOSE 3000

CMD [ "yarn", "start" ]