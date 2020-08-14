FROM alpine:3.12
RUN apk add --no-cache --update curl nodejs yarn

WORKDIR /opt/app
COPY . ./

EXPOSE 80

CMD yarn start