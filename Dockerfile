FROM node:20.14.0

WORKDIR /usr/app/resume

COPY package*.json ./

RUN npm ci -qy
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]