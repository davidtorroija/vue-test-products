FROM node:12.18.1
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
EXPOSE 8080
CMD ["yarn", "serve"]