FROM node:10

# Creates app directory
WORKDIR /usr/src/app

# Installing dependencies (copying both package.json and package-lock.json)
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]

