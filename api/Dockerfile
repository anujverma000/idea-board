# Using a lighter version of Node
FROM mhart/alpine-node

WORKDIR /api
COPY package*.json /api/
COPY yarn.lock /api/

RUN yarn install


COPY . /api/
EXPOSE 80

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && yarn start