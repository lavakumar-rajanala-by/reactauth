
FROM node:14.16-alpine AS build

ARG ARTIFACTORY_AUTH=test1
ARG JDA_REGISTRY=test1

WORKDIR /app
COPY . /app/ 


ENV PATH /app/node_modules/.bin:$PATH


ENV NO_UPDATE_NOTIFIER=true
COPY package*.json ./
COPY package-lock.json ./

RUN npm config set _auth=${ARTIFACTORY_AUTH}
RUN npm config set always-auth
RUN npm config set registry ${JDA_REGISTRY}
RUN npm config set @jda:registry ${JDA_REGISTRY}
RUN npm config set email no-reply@jda.com

RUN npm install
RUN npm run build

# production environment
FROM nginx

ARG X_FRAME_HEADER_OPTIONS
ARG FRAME_ANCESTORS
ARG CONTENT_SECURITY_POLICY_VALUE
ARG BY_ROOT_CA_VALUE

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/mime.types /etc/nginx/mime.types
COPY nginx/mime.types /nginx/mime.types

COPY nginx/by-root-ca.crt.template /etc/certs/by-root-ca.crt.template
COPY nginx/nginx.conf.template /etc/nginx/nginx.conf.template

CMD ["nginx", "-g", "daemon off;"]

ENV PORT 8080

STOPSIGNAL SIGTERM

RUN useradd -ms /bin/bash -u 1000 stratosphere
RUN chown -R stratosphere:stratosphere /etc/nginx
RUN chown -R stratosphere:stratosphere /var/cache/nginx
RUN chown -R stratosphere:stratosphere /var/run

RUN envsubst '${X_FRAME_HEADER_OPTIONS}, ${FRAME_ANCESTORS}, ${CONTENT_SECURITY_POLICY_VALUE}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
RUN envsubst '${BY_ROOT_CA_VALUE}' < /etc/certs/by-root-ca.crt.template > /etc/certs/by-root-ca.crt

USER 1000
