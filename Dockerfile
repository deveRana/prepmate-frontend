# ----------- 1. Build Stage -----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy only what's needed to install and build
COPY package*.json ./
COPY tsconfig.json ./
COPY next.config.ts ./
COPY tailwind.config.ts ./
COPY postcss.config.mjs ./

# Install dependencies
RUN npm ci

# Copy all source code and config
COPY public ./public
COPY src ./src

# Build the app (this creates .next in /app/.next)
RUN npm run build

# ----------- 2. Runtime Stage -----------
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy required files for running production server
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/src ./src
COPY --from=builder /app/next.config.ts ./next.config.ts

EXPOSE 3000

CMD ["npm", "start"]
