FROM node:18-alpine

WORKDIR /app

COPY --chown=node:node . /app
RUN --mount=type=secret,id=in-stock-env,dst=/app/.env \ 
    npm install --omit=dev

USER node
CMD ["node", "dist/index.js"]
