# Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Copy source code and build the app
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app

# Copy necessary files from builder stage
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json package.json

# Expose the necessary port
EXPOSE 3000

# Use Next.js production start command
CMD ["npx", "next", "start"]
