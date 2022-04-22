const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');
const productMiddleware = require('../middlewares/products')

router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.post('/create', productMiddleware.validator, productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.remove)

/**
 * @swagger
 * {
 *  "components": {
 *    "schemas": {
 *      "Product": {
 *        "type": "object",
 *        "properties": {
 *          "code": {
 *            "type": "integer",
 *            "description": "Product code"
 *          },
 *          "name": {
 *            "type": "string",
 *            "description": "Product name"
 *          },
 *          "price": {
 *            "type": "integer",
 *            "description": "Product price"
 *          },
 *          "stock": {
 *            "type": "integer",
 *            "description": "Product stock"
 *          }
 *        },
 *        "required": ["code", "name", "price"],
 *        "example": {
 *          "code": 31721,
 *          "name": "Empanada integral de verdura El Noble",
 *          "price": 1954.12,
 *          "stock": 7
 *        }
 *      }
 *    }
 *  }
 * }
 */

/**
 * @swagger
 * "/products/": {
 *  "get": {
 *    "summary": "List of all products",
 *    "tags": ["Products"],
 *    "responses": {
 *      "200": {
 *        "description": "Successfully"
 *      },
 *      "content": {
 *        "application/json": {
 *          "schema": {
 *            "type": "object",
 *            "items": {
 *              "$ref": "#/components/chemas/Product"
 *            }
 *          }
 *        }
 *      },
 *      "404": {
 *        "description": "Not found Products"
 *      },
 *      "500":{
 *        "description": "Internal Server Error"
 *      }
 *    }
 *  }
 * }
 */

/**
 * @swagger
 * "/products/{id}": {
 *  "get": {
 *    "summary": "Get a product by id.",
 *    "tags": ["Products"],
 *    "parameters": [
 *      {
 *        "name": "id",
 *        "in": "path",
 *        "description": "The id of the product",
 *        "required": false,
 *        "type": "integer",
 *        "example": "120"
 *      }
 *    ],
 *    "responses": {
 *      "200": {
 *        "description": "Successfully operation"
 *      },
 *      "400": {
 *        "description": "Product not Found"
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
 * "/products/create": {
 *  "post": {
 *    "summary": "Create a new product",
 *    "tags": ["Products"],
 *    "requestBody": {
 *      "required": true,
 *      "content": {
 *        "application/json": {
 *          "schema": {
 *            "type": "object",
 *            "$ref": "#/components/schemas/Product"
 *          }
 *        }
 *      }
 *    },
 *    "responses": {
 *      "200": {
 *        "description": "Product created"
 *      },
 *      "404": {
 *        "description": "Product already exists"
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
 * "/products/{id}": {
 *  "put": {
 *    "summary": "Update a product by id.",
 *    "parameters": [
 *      {
 *        "name": "id",
 *        "in": "path",
 *        "description": "Id of the product",
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
 *            "$ref": "#/components/schemas/Product"
 *          }
 *        }
 *      }
 *    },
 *    "tags": ["Products"],
 *    "responses": {
 *      "200": {
 *        "description": "Product has been update"
 *      },
 *      "404": {
 *        "description": "Product not found"
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
 * "/products/{id}": {
 *  "delete": {
 *    "summary": "Delete a product by id.",
 *    "parameters": [
 *      {
 *        "name": "id",
 *        "in": "path",
 *        "description": "Product id",
 *        "required": true,
 *        "type": "integer"
 *      }
 *    ],
 *    "tags": ["Products"],
 *    "responses": {
 *      "200": {
 *        "description": "Product has been delete"
 *      },
 *      "404": {
 *        "description": "Product not found"
 *      },
 *      "500": {
 *        "description": "Internal Server Error"
 *      }
 *    }
 *  }
 * }
 */

module.exports = router