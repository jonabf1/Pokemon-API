<h1 align="center">
<a href="https://pokeapi.co/">
<img src="https://pokeapi.co/static/logo-6221638601ef7fa7c835eae08ef67a16.png" width="200px">
  </a>
</h1>

### :page_with_curl: About
This is a basic API to list and bookmark pokemons, so it also contains user token authentication.
The consumed API of Pokemons is provided by [PokeApi](https://pokeapi.co/)

### :rocket: How install and start
- `git clone https://github.com/jonabf1/Pokemon-API`
- **Go to repository folder**
- `yarn install` (install the dependencies)
- `yarn start` (start the server)

- To support environment variables in Windows **`npm install -g win-node-env`**
- `yarn test` (start testing)

### :rocket: How to install and start the server with **docker**
- **Go to repository folder**
- `docker-compose up` (start the server)

- To support environment variables in Windows **`npm install -g win-node-env`**
- `docker-compose -f docker-compose-test.yaml up` (start testing)

### :page_facing_up: API Documentation

- navigate to ‘public/apidoc/index.html’

### :page_facing_up: Routes

- post('/user’) - Create a new user
- post('/session') - Login with created account
- put('/user') - Update fields of user

- get('/pokemon') - List of favorite pokemons
- get('/pokemon/details/:name') - Details of any specific pokemon
- post('/pokemon/:name') - Add some pokemon to the wish list
- put('/pokemon/:name') - Add some fields from a favorite pokemon
- delete('/pokemon/:name') - Delete any favorite pokemon


### :rocket: Dependencies used

- axios
- dotenv
- express
- mongoose
- jest
- @shelf/jest-mongodb
- bcryptjs
- express-async-errors
- jsonwebtoken
- suportest
- youch
- yup        

### :white_check_mark: Resume of tests

<p align="center">
  <img alt="" src="public/apidoc/img/tests.png">
</p>

---

<p align="center">
Made with ♥ by <a href="https://www.linkedin.com/in/jonathan-barros-franco">Jonathan</a>
</p>
