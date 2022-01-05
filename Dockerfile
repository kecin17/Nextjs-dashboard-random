FROM registry.access.redhat.com/ubi8/nodejs-16@sha256:972e5f0471fda722c4173c15b28d2916dd9366ad0e9bd4512ff90bb1b77cf7cc

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Set environment variable
ENV NODE_ENV production

# Install app dependencies
COPY package.json yarn.lock /usr/src/app/
RUN yarn --pure-lockfile && yarn cache clean

# Bundle app source
COPY . /usr/src/app

# Port
EXPOSE 8080

# Start
CMD [ "yarn", "start" ]
