# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Build-time API URL
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Memory / network configs
ENV NODE_OPTIONS=--max-old-space-size=4096
ENV npm_config_registry=https://registry.npmjs.org/

# Copy only package files first (to leverage Docker cache)
COPY package*.json ./
COPY .npmrc ./

# Install dependencies (faster + cached when package.json doesn’t change)
RUN npm install --legacy-peer-deps

# Copy the rest of the app
COPY . .

# Build the production assets
RUN npm run build && ls -l build && test -f build/index.html

# Production stage
FROM nginx:alpine

# Copy build output from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
