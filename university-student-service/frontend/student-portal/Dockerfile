# Stage 1: Build the app using Node
FROM node:18 AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build the Angular + SSR app
COPY . .

# Build the browser and server bundles
RUN npm run build:ssr

# Stage 2: Run the SSR server
FROM node:18-alpine

WORKDIR /app

# Copy built app from previous stage
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

# Optional: Expose port (default SSR runs on 4000)
EXPOSE 4000

# Start the server (dist/server/main.js is the SSR entry point)
CMD ["node", "dist/server/main.js"]
