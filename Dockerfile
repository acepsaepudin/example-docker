FROM node:alpine3.13

LABEL acep <info@acep.web.id>

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Expose the port server listen to
EXPOSE 80
CMD [ "npm", "start" ]