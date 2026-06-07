# Production Dockerfile for InkMaster (Vite + Express)

# 1) Build stage: install deps and build the frontend
FROM node:18-alpine AS builder
WORKDIR /app

# Copy only package files for faster installs
COPY vite-app/package.json vite-app/package-lock.json* ./vite-app/
WORKDIR /app/vite-app
RUN npm ci --production=false --silent || npm install --silent

# Copy the rest and build
COPY vite-app/ ./
RUN npm run build

# 2) Runner stage: install only production deps and copy built assets
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy server package.json and install production deps
COPY vite-app/package.json ./
RUN npm ci --only=production --silent

# Copy built frontend from builder
COPY --from=builder /app/vite-app/dist ./dist
# Copy server code
COPY vite-app/server ./server

EXPOSE 3000
CMD ["node", "server/index.js"]
