[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/jorgeocampo)

[¡Ayudame con un café ☕️!](https://cafecito.app/shorsh)

# Express ES2020 REST API Boilerplate

Boilerplate for building a modern REST API with Node.js, Express & MongoDB(WIP)

## Features

- ES2020 optional chaining & nullish operator support
- Complete REST API Example (WIP)
- CORS
- Cookie & Body parser
- Auth with jwt (WIP)
- MongoDB(WIP)
- Dockerized
- Linting with [Eslint](http://eslint.org) & [Prettier](https://prettier.io/)

## Quick Start

### With Node.js

#### Clone the repo:

```bash
git clone https://github.com/JorgeJOcampo/express-api-boilerplate your-project-name
cd your-project-name
rm -rf .git
```

#### Install dependencies:

```bash
yarn
```

#### Configure environment variables:

Use the .env.example to build your .env's files

#### Running Locally

```bash
yarn dev
```

#### Running in Production

```bash
yarn start
```

### With Docker
```
# Build docker 
docker build -t express-api .

# Run docker
docker run -p 3000:3000 express-api
```

### With docker-compose
```
docker-compose up
```
