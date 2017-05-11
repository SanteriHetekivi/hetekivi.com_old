FROM node

RUN mkdir -p /src/app

WORKDIR /src/app
ADD app/package.json /src/app/package.json
RUN npm install

EXPOSE 3000

CMD npm start