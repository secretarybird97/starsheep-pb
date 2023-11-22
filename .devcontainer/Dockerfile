FROM node:lts-alpine
RUN apk update
RUN apk add --no-cache git github-cli
RUN npm i -g pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"