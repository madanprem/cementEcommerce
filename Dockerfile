# Use official Node.js image to build the React app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Use Nginx to serve the build output
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# Copy a custom Nginx config (for React routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
