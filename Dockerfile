FROM node

ENV PORT=4000

RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm init -y
RUN npm install express
EXPOSE ${PORT}

CMD [ "npm", "start" ]
