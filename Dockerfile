#install dependencies and get node

FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
#we don't use volmues anymore because we don't
#make change to the source-code. We don't change 
#our code when running it in production env
COPY . .
RUN npm run build

#install nginx and copy over files from node 
FROM nginx
#copy from the previous phase's /app/build dir
#into /usr/share/nginx/html
COPY --from=0 /app/build /usr/share/nginx/html



