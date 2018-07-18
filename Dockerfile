FROM node:carbon-alpine AS builder

WORKDIR /app
COPY package.json server.js /app/
COPY views /app/views/
COPY public /app/public
RUN npm install

FROM node:carbon-alpine

COPY --from=builder /app /app
RUN chown -R node:node /app/
USER node
WORKDIR /app
EXPOSE 5000

CMD ["node", "server.js"]
