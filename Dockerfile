# FROM node:16-alpine
# WORKDIR '/app/frontend'
# COPY ./signup-login/package.json ./
# RUN npm install
# COPY ./signup-login .
# CMD ["npm", "run", "start"]

FROM node:16-alpine as builder
 
USER node
 
RUN mkdir -p /home/node/app/frontend
WORKDIR /home/node/app/frontend
 
COPY --chown=node:node ./signup-login/package.json ./
RUN npm install
COPY --chown=node:node ./signup-login ./
 
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/node/app/frontend/build /usr/share/nginx/html