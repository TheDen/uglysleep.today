FROM node:carbon-alpine

COPY package.json server.js views/ public/ /app/
WORKDIR /app
RUN npm install \
      && chown -R node /app/
USER node
EXPOSE 5000

CMD ["node", "server.js"]
