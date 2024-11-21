FROM node:21-alpine AS build

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27.2-alpine AS serve

WORKDIR /app
COPY --from=build /app/dist /usr/share/nginx/html
