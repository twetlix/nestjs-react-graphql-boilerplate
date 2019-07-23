<h1 align="center">
  Nestjs React GraphQL Boilerplate
</h1>

![Language](https://img.shields.io/badge/language-TypeScript-blue.svg)
![Backend](https://img.shields.io/badge/backend-Nestjs-e0224e.svg)
![API](https://img.shields.io/badge/api-GraphQL-e535ab.svg)
![Database](https://img.shields.io/badge/database-TypeOrm-fb0902.svg)
![Frontend](https://img.shields.io/badge/frontend-Nextjs-0f70f3.svg)
![Testing](https://img.shields.io/badge/testing-Jest-954058.svg)
![GitHub](https://img.shields.io/github/license/twetlix/nestjs-react-graphql-boilerplate.svg)

> A Fullstack Web App boilerplate based on these bad boys, **GraphQL** / **Postgresql** / **Nestjs** / **React** 😘

## Backend

**Must Read (important)**
The backend of the boilerplate is as said above based on Nestjs which is a really powerful backend framework and since this boilerplate is all about using Typescript on both sides of the application Nestjs was a no brainer, for the database you can use any kind of database you want as that it will all be managed using TypeOrm. This backend is also GraphQL specific meaning it has the full GraphQL support with Typescript classes based schema generation which makes your schema fully typed during development.

## Frontend

**Must Read (important)**
The frontent of the boilerplate is based on Reactjs and using server-side-rendering using Nextjs, for communications between the frontend and the GraphQL backend it is using react apollo. For styling the boilerplate uses styled-components in conjunction with react-bootstrap to offer a solid grid system to build your app with.

## Why use this

This boilerplate is for someone that wants firstly using a typed language like Typescript on both sides of the app, and it also uses GraphQL which is another major benefit of this boilerplate, as for React it is the leading frontend framework/library and it is one of the best ways someone could ever use to develop the frontend, Nestjs also provides a solid ground to build your backend with since it is very organized in terms of how you build your backend with it.

## Note

This boilerplate is **NOT** for a beginner developer as that it requires a general knowledge of GraphQL, TypeScript, Nestjs and GraphQL

## Installation

To start using this boilerplate, clone the repo to your desired destination and install the dependencies.

```bash
$ git clone https://github.com/twetlix/nestjs-react-graphql-boilerplate.git <your-project-name>

$ cd <your-project-name>
$ yarn install
```

## Usage

Run the following command to start the project in an auto-reloading development mode

```bash
$ yarn dev
```

And to build your project

```bash
$ yarn build
```

To run tests

```bash
$ yarn test
```

To lint the project

```bash
$ yarn lint
```

To format the project

```bash
$ yarn format
```

**There are other commands you can run for the boilerplate, just take a look at the package.json file in the root folder**

## Moreover

One really great feature about this boilerplate is that every side of the application is separate meaning in the future the boilerplate is capable of expanding to other sides for example if you want a react-native app, just create it inside the packages folder and it will be a yarn workspace in the project!

## License

MIT License

Copyright (c) 2019 Twetlix

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.