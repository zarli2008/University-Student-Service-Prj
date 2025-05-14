# Stage 1: Build
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install || (cat /root/.npm/_logs/* && false)

COPY . .

# Build both browser and server bundles
RUN npm run build:ssr

# Stage 2: Serve the SSR app
FROM node:18-slim

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

# Run the SSR server (adjust app name if different)
CMD ["node", "dist/student-portal/server/server.mjs"]
