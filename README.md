# Challenge-LiveOnSolutions

### How install

#### :rocket: Backend

- yarn install (install dependencies)
- yarn start (to open the server)
- yarn test (to open the tests with jest)

### Documentation

- navigate to ‘public/apidoc/index.html’

### Routes

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

#### 3. Resume of tests

![Alt Text](public/apidoc/img/tests.png)

---

Made with ♥ by [Jonathan](https://www.linkedin.com/in/jonathan-barros-franco)
