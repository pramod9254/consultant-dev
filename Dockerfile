FROM node:11-alpine

WORKDIR /opt/rules-engine-ms

COPY . .
RUN npm install -g ts-node
RUN npm install -g typescript
RUN npm install --save-dev @types/node

RUN cd ./server && npm install && npm run prod 

WORKDIR /opt/consultant-dev/server/dist

CMD [ "npm", "run", "start" ]
