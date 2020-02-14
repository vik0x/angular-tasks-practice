FROM node
WORKDIR /var/www
RUN apt-get -y update && npm -g update && npm i -g @angular/cli
COPY ./front /var/www
RUN npm install -ci
EXPOSE 4000
CMD ng serve --host 0.0.0.0 --port 4000
 