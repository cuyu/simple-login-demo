## simple-login-demo

- The project is initialised with [React Starter Kit](https://reactstarter.com/);
- Used following stacks:
  - [node-sqlite3]() - Node.js binding for SQLite database
  - [sequelize]() - ORM layer for the database
  - [express]() - Http server framework
  - [graphql]() - API layer for the http server
  - [React]() - Front-end view layer



### API

Add a user:

```
mutation AddUser($name: String!, $password: String!) {
  addUser(name: $name, password: $password) {
    name
  }
}
```

`name` and `password` are variables.



