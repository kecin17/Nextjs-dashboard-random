FROM node:16

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Set environment variable
ENV NODE_ENV production

# Install app dependencies
COPY package*.json /usr/src/app/

# Bundle app source
COPY . /usr/src/app

# Port
EXPOSE 8080

# Start
CMD [ "npm", "start" ]
