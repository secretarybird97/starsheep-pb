FROM node:lts-alpine
RUN apk update
RUN apk add --no-cache git github-cli libc6-compat
RUN yarn global add pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"