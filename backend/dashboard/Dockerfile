FROM node:16-alpine as development

WORKDIR /app

COPY proto-gen.sh .
COPY package*.json .

#Done here as to not run on every change
RUN npm install 

COPY . .


RUN  npm run build

FROM node:16-alpine as production

WORKDIR /app

COPY proto-gen.sh .
COPY package*.json .

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN npm ci --only=production

COPY --from=development /app/dist ./dist

CMD ["npm", "start"]
