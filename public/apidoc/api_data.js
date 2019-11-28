define({ "api": [
  {
    "type": "delete",
    "url": "/pokemon/:name",
    "title": "Delete pokemon",
    "version": "0.1.0",
    "group": "Pokemon",
    "permission": [
      {
        "name": "logged"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token acquired after session in Bearer token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>pokemon name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>pokemon's nickname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": "<p>pokemon's height</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>pokemon's weight</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>pokemon's photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>change type pokemon</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n {\n   ok:true\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFails",
            "description": "<p>No fields provided in <code>body</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ThisIsANumber",
            "description": "<p>Only string for parameters</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PokemonDoesNotExistInYourFavorites",
            "description": "<p>Pokemon not exist in your favorites</p>"
          }
        ]
      }
    },
    "filename": "./apidoc.js",
    "groupTitle": "Pokemon",
    "name": "DeletePokemonName"
  },
  {
    "type": "get",
    "url": "/pokemon",
    "title": "Favorite Pokemons list",
    "version": "0.1.0",
    "group": "Pokemon",
    "permission": [
      {
        "name": "logged"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token acquired after session in Bearer token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n [\n   {\n   //list of your favorite pokemons\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc.js",
    "groupTitle": "Pokemon",
    "name": "GetPokemon"
  },
  {
    "type": "get",
    "url": "/pokemon/details/:name",
    "title": "Pokemon details",
    "version": "0.1.0",
    "group": "Pokemon",
    "permission": [
      {
        "name": "logged"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token acquired after session in Bearer token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>pokemon name in <code>Params</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n {\n   \"_id\": \"2312432423123\",\n   \"userId\": \"5dde1089b95a05044e72eb03\",\n   \"name\": \"pikachu\",\n   \"id\": \"130\",\n   \"height\": \"65\",\n   \"weight\": \"30\",\n   \"photo\": \"https://imagem.com/pikachu\",\n   \"type\": \"eletric\",\n   \"createdAt\": \"2019-11-25T09:25:04.594Z\",\n   \"updatedAt\": \"2019-11-25T09:25:04.594Z\",\n   \"__v\": 0,\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFails",
            "description": "<p>No fields provided in <code>body</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ThisIsANumber",
            "description": "<p>Only string for parameters</p>"
          }
        ]
      }
    },
    "filename": "./apidoc.js",
    "groupTitle": "Pokemon",
    "name": "GetPokemonDetailsName"
  },
  {
    "type": "post",
    "url": "/pokemon/:name",
    "title": "Pokemon create favorite",
    "version": "0.1.0",
    "group": "Pokemon",
    "permission": [
      {
        "name": "logged"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token acquired after session in Bearer token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>pokemon name in <code>Params</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n {\n   \"_id\": \"2312432423123\",\n   \"userId\": \"5dde1089b95a05044e72eb03\",\n   \"name\": \"charizard\",\n   \"id\": \"50\",\n   \"height\": \"65\",\n   \"weight\": \"30\",\n   \"photo\": \"https://imagem.com/charizard\",\n   \"type\": \"fire, dragon\",\n   \"createdAt\": \"2019-11-25T09:25:04.594Z\",\n   \"updatedAt\": \"2019-11-25T09:25:04.594Z\",\n   \"__v\": 0,\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFails",
            "description": "<p>No fields provided in <code>body</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ThisIsANumber",
            "description": "<p>Only string for parameters</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PokemonAlredyExistOnYourFavorites",
            "description": "<p>Pokemon alredy save in your favorites</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PokemonDoesNotExistInApi",
            "description": "<p>Pokemon does not exist in api</p>"
          }
        ]
      }
    },
    "filename": "./apidoc.js",
    "groupTitle": "Pokemon",
    "name": "PostPokemonName"
  },
  {
    "type": "put",
    "url": "/pokemon/:name",
    "title": "Pokemon update stats",
    "version": "0.1.0",
    "group": "Pokemon",
    "permission": [
      {
        "name": "logged"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token acquired after session in Bearer token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>pokemon name in <code>Params</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>pokemon's nickname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": "<p>pokemon's height</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>pokemon's weight</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>pokemon's photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>change type pokemon</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n {\n   \"_id\": \"2312432423123\",\n   \"userId\": \"5dde1089b95a05044e72eb03\",\n   \"name\": \"charizard\",\n   \"nickname\": \"dragonFireBlaze master\", //new field\n   \"id\": \"50\",\n   \"height\": \"65\",\n   \"weight\": \"30\",\n   \"photo\": \"https://google.com/dragon-fire\",\n   \"type\": \"water,fire,eletric,wind\",\n   \"createdAt\": \"2019-11-25T09:25:04.594Z\",\n   \"updatedAt\": \"2019-11-25T09:25:04.594Z\",\n   \"__v\": 0,\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFails",
            "description": "<p>No fields provided in <code>body</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ThisIsANumber",
            "description": "<p>Only string for parameters</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PokemonDoesNotExistInYourFavorites",
            "description": "<p>Pokemon not exist in your favorites</p>"
          }
        ]
      }
    },
    "filename": "./apidoc.js",
    "groupTitle": "Pokemon",
    "name": "PutPokemonName"
  },
  {
    "type": "post",
    "url": "/session",
    "title": "User session",
    "version": "0.1.0",
    "group": "Session",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email for login</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password for login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n \"user\": {\n   \"email\": \"emailForLogin@gmail.com\",\n   \"password\": \"passwordForLogin\",\n }\n \"token\": \"123456789011121314151617181920\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFails",
            "description": "<p>No fields provided in <code>body</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotExist",
            "description": "<p>User does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordDoesNotMatch",
            "description": "<p>Password incorrect</p>"
          }
        ]
      }
    },
    "filename": "./apidoc.js",
    "groupTitle": "Session",
    "name": "PostSession"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a User",
    "version": "0.2.0",
    "name": "PostUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>In this case &quot;apiErrorStructure&quot; is defined and used. Define blocks with params that will be used in several functions, so you dont have to rewrite them.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/_apidoc.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNameTooShort\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user",
    "title": "User registration",
    "version": "0.1.0",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name for registration</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email for registration</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password for registration</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n {\n   \"_id\": \"2312432423123\",\n   \"name\": \"teste\",\n   \"email\": \"teste@gmail.com\",\n   \"password\": \"passwordWithHash\",\n   \"createdAt\": \"2019-11-25T09:25:04.594Z\",\n   \"updatedAt\": \"2019-11-25T09:25:04.594Z\",\n   \"__v\": 0,\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFails",
            "description": "<p>One or more fields not provided in <code>body</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailAlredyUsed",
            "description": "<p>Email is alredy in used</p>"
          }
        ]
      }
    },
    "filename": "./apidoc.js",
    "groupTitle": "User",
    "name": "PostUser"
  },
  {
    "type": "put",
    "url": "/user",
    "title": "User update",
    "version": "0.1.0",
    "group": "User",
    "permission": [
      {
        "name": "Logged"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>the new name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>the new email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>the new password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n {\n   \"name\": \"newName\",\n   \"email\": \"newEmail@gmail.com\",\n   \"password\": \"newPassword\",\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFails",
            "description": "<p>No fields provided in <code>body</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailAlredyUsed",
            "description": "<p>Email is alredy in used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordIncorrect",
            "description": "<p>Password incorrect for change</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordsAreTheSame",
            "description": "<p>Enter a different password for change</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailAreTheSame",
            "description": "<p>Enter a different email for change</p>"
          }
        ]
      }
    },
    "filename": "./apidoc.js",
    "groupTitle": "User",
    "name": "PutUser"
  }
] });
