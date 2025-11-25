FROM node:22-alpine as build
 
WORKDIR /app

COPY ./package*.json /app/

RUN npm ci

COPY . /app/

ARG API_URL
ARG PORT
ARG NODE_ENV

#  For Vite
ENV VITE_API_URL=${API_URL}
ENV MODE=$NODE_ENV

#  Logs for Vite
RUN echo "API_URL: ${API_URL}"
RUN echo "NODE_ENV: ${MODE}"

RUN npm run build
RUN node compress.js

FROM fholzer/nginx-brotli:latest 

COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf 