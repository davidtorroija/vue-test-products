FROM node:12.18.1
WORKDIR /app/server
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
CMD ["npm", "start"]