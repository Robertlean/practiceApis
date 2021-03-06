const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clients')
const clientMiddleware = require('../middlewares/clients')

router.get('/', clientController.getAll);
router.get('/:id', clientController.getById);
router.post('/create', clientMiddleware.validator, clientController.create)
router.put('/:id', clientController.update);
router.delete('/:id', clientController.remove);

/**
 * @swagger
 * {
 *  "components": {
 *    "schemas": {
 *      "Client": {
 *        "type": "object",
 *        "properties": {
 *          "firstName": {
 *            "type": "string",
 *            "description": "Client first name"
 *          },
 *          "lastName": {
 *            "type": "string",
 *            "description": "Client last name"
 *          },
 *          "phoneNumber": {
 *            "type": "integer",
 *            "description": "Client phone number"
 *          },
 *          "address": {
 *            "type": "string",
 *            "description": "Client Adress"
 *          },
 *          "city": {
 *            "type": "string",
 *            "description": "Client city"
 *          },
 *          "numberClient": {
 *           "type": "integer",
 *           "description": "Client number" 
 *          }
 *        },
 *        "required": ["firstName", "lastName", "address", "city"],
 *        "example": {
 *          "numberClient": 1200,
 *          "firstName": "Roberto",
 *          "lastName": "Veintemilla",
 *          "phoneNumber": 01151372235,
 *          "address": "Sarmiento 435",
 *          "city": "Pilar"
 *        }
 *      }
 *    }
 *  }
 * }
 */

/**
 * @swagger
 * "/clients/": {
 *  "get": {
 *    "summary": "List of all clients",
 *    "tags": ["Clients"],
 *    "responses": {
 *      "200": {
 *        "description": "Successfully"
 *      },
 *      "content": {
 *        "application/json": {
 *          "schema": {
 *            "type": "object",
 *            "items": {
 *              "$ref": "#/components/schemas/Client"
 *            }
 *          }
 *        }
 *      },
 *      "404": {
 *        "description": "Not found Clients"
 *      },
 *      "500": {
 *        "description": "Internal Server Error"
 *      }
 *    }
 *  }
 * }
 */

/**
 * @swagger
 * "/clients/{id}": {
 *  "get": {
 *    "summary": "Get a client by id.",
 *    "tags": ["Clients"],
 *    "parameters": [
 *      {
 *        "name": "id",
 *        "in": "path",
 *        "description": "The id of the client",
 *        "required": false,
 *        "type": "integer",
 *        "example": 1133
 *      }
 *    ],
 *    "responses": {
 *      "200": {
 *        "description": "Successfully operation"
 *      },
 *      "400": {
 *        "description": "Client not found"
 *      },
 *      "500": {
 *        "description": "Internal Server Error"
 *      }
 *    }
 *  }
 * }
 * 
 */

/**
 * @swagger
 * "/clients/create": {
 *  "post": {
 *    "summary": "Create a new client",
 *    "tags": ["Clients"],
 *    "requestBody": {
 *      "required": true,
 *      "content": {
 *        "application/json": {
 *          "schema": {
 *            "type": "object",
 *            "$ref": "#/components/schemas/Client"
 *          }
 *        }
 *      }
 *    },
 *    "responses": {
 *      "200": {
 *        "description": "Client created"
 *      },
 *      "404": {
 *        "description": "Client already exists"
 *      },
 *      "500": {
 *        "description": "Internal Server Error"
 *      }
 *    }
 *  }
 * }
 */

/**
 * @swagger
 * "/clients/{id}": {
 *  "put": {
 *    "summary": "Update a client by id.",
 *    "parameters": [
 *      {
 *        "name": "id",
 *        "in": "path",
 *        "description": "Id of the client",
 *        "required": true,
 *        "type": "integer"
 *      }
 *    ],
 *    requestBody: {
 *      "required": true,
 *      "content": {
 *        "application/json": {
 *          "schema": {
 *            "type": "object",
 *            "$ref": "#/components/schemas/Client"
 *          }
 *        }
 *      }
 *    },
 *    "tags" :["Clients"],
 *    "responses": {
 *      "200": {
 *        "description": "Client has been update"
 *      },
 *      "404": {
 *        "description": "Client not found"
 *      },
 *      "500": {
 *        "description": "Internal Server Error"
 *      }
 *    }
 *  }
 * }
 */

/**
 * @swagger
 * "/clients/{id}": {
 *  "delete": {
 *    "summary": "Delete a client by id.",
 *    "parameters": [
 *      {
 *        "name": "id",
 *        "in": "path",
 *        "description": "Client id",
 *        "required": true,
 *        "type": "integer"
 *      }
 *    ],
 *    "tags": ["Clients"],
 *    "responses": {
 *      "200": {
 *        "description": "Client has been delete"
 *      },
 *      "404": {
 *        "description": "Client not found"
 *      },
 *      "500": {
 *        "description": "Internal Server Error"
 *      }
 *    }
 *  }
 * }
 */

 module.exports = router