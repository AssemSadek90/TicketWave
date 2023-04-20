# FROM node:16-alpine
# WORKDIR '/app/frontend'
# COPY ./signup-login/package.json ./
# RUN npm install
# COPY ./signup-login .
# CMD ["npm", "run", "start"]

FROM node:16-alpine
 
USER node
 
RUN mkdir -p /home/node/app/frontend
WORKDIR /home/node/app/frontend
 
COPY --chown=node:node ./signup-login/package.json ./
RUN npm install
COPY --chown=node:node ./signup-login ./
 
CMD ["npm", "start"]