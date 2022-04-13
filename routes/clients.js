const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clients')

router.get('/', clientController.getAll);
router.get('/:id', clientController.getById);
router.post('/create', clientController.create)
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
 *          }
 *        },
 *        "required": ["firstName", "lastName", "address", "city"],
 *        "example": {
 *          "firstName": "Roberto",
 *          "lastName": "Veintemilla",
 *          "phoneNumber": 01151372235,
 *          "addres": "Sarmiento 435",
 *          "city": "Pilar"
 *        }
 *      }
 *    }
 *  }
 * }
 */

/*