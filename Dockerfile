FROM node:20

WORKDIR /app

COPY package.json pnpm-lock.yaml /app/

RUN npm i -g pnpm && pnpm install

COPY . /app/

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
