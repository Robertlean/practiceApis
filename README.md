# Practica de APIs

## Envinroment setup

- Create database
- Copy .env.example to .env and fill with database credentials.

#### Clone repository

```
git clone https://www.github.com/Robertlean/practiceApis
```

#### Change directory

```
cd practiceApis
```

#### To install dependencies, run
```
npm install
```

#### Create DataBase
```
npx sequelize-cli db:create
```
#### Migrations:
```
npx sequelize-cli db:migrate
```

#### Seeders:
```
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```
#### In your favorite browser enter the following URL

http://localhost:3000/apis-docs/

### 🚀 Skills
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"> <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white">

### ⚙️ ORM
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white">