/**
 * @api {post} /user User registration
 * @apiVersion 0.1.0
 * @apiGroup User
 * @apiPermission none
 *
 * @apiSuccess {String} name name for registration
 * @apiSuccess {String} email email for registration
 * @apiSuccess {String} password password for registration
 *
 * @apiError ValidationFails One or more fields not provided in <code>body</code>
 * @apiError EmailAlredyUsed Email is alredy in used
 * @apiSuccessExample {json}
 *    HTTP/1.1 200 OK
 *     {
 *       "_id": "2312432423123",
 *       "name": "teste",
 *       "email": "teste@gmail.com",
 *       "password": "passwordWithHash",
 *       "createdAt": "2019-11-25T09:25:04.594Z",
 *       "updatedAt": "2019-11-25T09:25:04.594Z",
 *       "__v": 0,
 *     }
 */
/**
 * @api {put} /user User update
 * @apiVersion 0.1.0
 * @apiGroup User
 * @apiPermission Logged
 *
 * @apiSuccess {String} [name] the new name
 * @apiSuccess {String} [email] the new email
 * @apiSuccess {String} [password] the new password
 *
 * @apiError ValidationFails No fields provided in <code>body</code>
 * @apiError EmailAlredyUsed Email is alredy in used
 * @apiError PasswordIncorrect Password incorrect for change
 * @apiError PasswordsAreTheSame Enter a different password for change
 * @apiError EmailAreTheSame Enter a different email for change
 * @apiSuccessExample {json}
 *    HTTP/1.1 200 OK
 *     {
 *       "name": "newName",
 *       "email": "newEmail@gmail.com",
 *       "password": "newPassword",
 *     }
 */
/**
 * @api {post} /session User session
 * @apiVersion 0.1.0
 * @apiGroup Session
 * @apiPermission none
 *
 * @apiSuccess {String} email email for login
 * @apiSuccess {String} password password for login
 *
 * @apiError ValidationFails No fields provided in <code>body</code>
 * @apiError UserNotExist User does not exist
 * @apiError PasswordDoesNotMatch Password incorrect
 * @apiSuccessExample {json}
 *    HTTP/1.1 200 OK
 *     "user": {
 *       "email": "emailForLogin@gmail.com",
 *       "password": "passwordForLogin",
 *     }
 *     "token": "123456789011121314151617181920"
 */
/**
 * @api {get} /pokemon Favorite Pokemons list
 * @apiVersion 0.1.0
 * @apiGroup Pokemon
 * @apiPermission logged
 *
 * @apiSuccess {String} token token acquired after session in Bearer token
 *
 * @apiSuccessExample {json}
 *    HTTP/1.1 200 OK
 *     [
 *       {
 *       //list of your favorite pokemons
 *       }
 *     ]
 */
/**
 * @api {get} /pokemon/details/:name Pokemon details
 * @apiVersion 0.1.0
 * @apiGroup Pokemon
 * @apiPermission logged
 *
 * @apiSuccess {String} token token acquired after session in Bearer token
 * @apiSuccess {String} name pokemon name in <code>Params</code>
 *
 * @apiError ValidationFails No fields provided in <code>body</code>
 * @apiError ThisIsANumber Only string for parameters
 * @apiSuccessExample {json}
 *    HTTP/1.1 200 OK
 *     {
 *       "_id": "2312432423123",
 *       "userId": "5dde1089b95a05044e72eb03",
 *       "name": "pikachu",
 *       "id": "130",
 *       "height": "65",
 *       "weight": "30",
 *       "photo": "https://imagem.com/pikachu",
 *       "type": "eletric",
 *       "createdAt": "2019-11-25T09:25:04.594Z",
 *       "updatedAt": "2019-11-25T09:25:04.594Z",
 *       "__v": 0,
 *     }
 */
/**
 * @api {post} /pokemon/:name Pokemon create favorite
 * @apiVersion 0.1.0
 * @apiGroup Pokemon
 * @apiPermission logged
 *
 * @apiSuccess {String} token token acquired after session in Bearer token
 * @apiSuccess {String} name pokemon name in <code>Params</code>
 *
 * @apiError ValidationFails No fields provided in <code>body</code>
 * @apiError ThisIsANumber Only string for parameters
 * @apiError PokemonAlredyExistOnYourFavorites Pokemon alredy save in your favorites
 * @apiError PokemonDoesNotExistInApi Pokemon does not exist in api
 * @apiSuccessExample {json}
 *    HTTP/1.1 200 OK
 *     {
 *       "_id": "2312432423123",
 *       "userId": "5dde1089b95a05044e72eb03",
 *       "name": "charizard",
 *       "id": "50",
 *       "height": "65",
 *       "weight": "30",
 *       "photo": "https://imagem.com/charizard",
 *       "type": "fire, dragon",
 *       "createdAt": "2019-11-25T09:25:04.594Z",
 *       "updatedAt": "2019-11-25T09:25:04.594Z",
 *       "__v": 0,
 *     }
 */
/**
 * @api {put} /pokemon/:name Pokemon update stats
 * @apiVersion 0.1.0
 * @apiGroup Pokemon
 * @apiPermission logged
 *
 * @apiSuccess {String} token token acquired after session in Bearer token
 * @apiSuccess {String} name pokemon name in <code>Params</code>
 * @apiSuccess {String} nickname pokemon's nickname
 * @apiSuccess {String} height pokemon's height
 * @apiSuccess {String} weight pokemon's weight
 * @apiSuccess {String} photo pokemon's photo
 * @apiSuccess {String} type change type pokemon
 *
 * @apiError ValidationFails No fields provided in <code>body</code>
 * @apiError ThisIsANumber Only string for parameters
 * @apiError PokemonDoesNotExistInYourFavorites Pokemon not exist in your favorites
 * @apiSuccessExample {json}
 *    HTTP/1.1 200 OK
 *     {
 *       "_id": "2312432423123",
 *       "userId": "5dde1089b95a05044e72eb03",
 *       "name": "charizard",
 *       "nickname": "dragonFireBlaze master", //new field
 *       "id": "50",
 *       "height": "65",
 *       "weight": "30",
 *       "photo": "https://google.com/dragon-fire",
 *       "type": "water,fire,eletric,wind",
 *       "createdAt": "2019-11-25T09:25:04.594Z",
 *       "updatedAt": "2019-11-25T09:25:04.594Z",
 *       "__v": 0,
 *     }
 */
/**
 * @api {delete} /pokemon/:name Delete pokemon
 * @apiVersion 0.1.0
 * @apiGroup Pokemon
 * @apiPermission logged
 *
 * @apiSuccess {String} token token acquired after session in Bearer token
 * @apiSuccess {String} name pokemon name
 * @apiSuccess {String} nickname pokemon's nickname
 * @apiSuccess {String} height pokemon's height
 * @apiSuccess {String} weight pokemon's weight
 * @apiSuccess {String} photo pokemon's photo
 * @apiSuccess {String} type change type pokemon
 *
 * @apiError ValidationFails No fields provided in <code>body</code>
 * @apiError ThisIsANumber Only string for parameters
 * @apiError PokemonDoesNotExistInYourFavorites Pokemon not exist in your favorites
 * @apiSuccessExample {json}
 *    HTTP/1.1 200 OK
 *     {
 *       ok:true
 *     }
 */
