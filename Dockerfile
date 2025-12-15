FROM node:22-alpine as builder

LABEL author="Izzatbek Abdusharipov"

WORKDIR /app

COPY package.*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /app

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
