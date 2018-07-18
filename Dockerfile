FROM node:carbon-alpine AS builder

WORKDIR /app
COPY package.json server.js /app/
COPY views /app/views/
COPY public /app/public

RUN npm install \
      && chown -R node /app/

FROM node:carbon-alpine

COPY --from=builder /app /app
WORKDIR /app
USER node
EXPOSE 5000

CMD ["node", "server.js"]
