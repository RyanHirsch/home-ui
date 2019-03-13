### Build Stage
FROM node:10 AS build
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install
COPY [".", "./"]
RUN yarn build


### Test Stage
FROM node:10-alpine AS test
ENV NODE_ENV=test
ENV CI=true
WORKDIR /app
COPY [".", "./"]
RUN yarn install && yarn test --ci

### Final
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
