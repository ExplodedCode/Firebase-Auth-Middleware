# Pull base image.
FROM node:18-alpine

WORKDIR /app

COPY package.json package.json
COPY tsconfig.json tsconfig.json

COPY api.ts api.ts
COPY database.types.ts database.types.ts
COPY Firebase.ts Firebase.ts
COPY index.ts index.ts

# install deps
RUN npm install
RUN npm install ts-node -g

ENV PORT=8080

CMD [ "npm", "start" ]