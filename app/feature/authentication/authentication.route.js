const express = require('express');
const router = express.Router();
const controller = require("./authentication.controller");

router.post("/authentication",
  controller.index
)

router.post("/authentication-3rd",
  controller.withChecksum
)
/*********************************************************************/

/**
 * @swagger
 * /api/v1/authentication:
 *   post:
 *     summary: Authentication
 *     tags:
 *       - Authentication
 *     description: Authentication
 *     parameters:
 *       - in: body
 *         name: data
 *         description: Data for login.
 *         schema:
 *            type: object
 *            required:
 *            - api_key
 *            - secrect_key
 *            example: 
 *               {
                        "api_key":"d485c3fd-31b0-496b-8d47-e357d8634075",
                        "secrect_key":"q44EniuCImrmAiTDBtw3rlchK2P1tFLK"
                  } 
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Ok 
 *         examples:
 *           application/json:
 *             {
 *                 "data":{
                      "access_token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiJiNThkZTJmNS02MDVkLTQ5NGMtYmI0Mi1iNjAyYmMxZWMwNWMiLCJ1c2VyX2lkIjoiN2ZhYmE3NmUtZDYwYS0xMWU5LTlkNmUtZjIzYzkxYTAzMTM5IiwidXNlcm5hbWUiOiJodXlodEBibG9ja2NoYWlubGFicy5hc2lhIiwiaWF0IjoxNTY4ODczMTU2LCJleHAiOjE1Njg5NTc3NTYsImF1ZCI6Imh0dHBzOi8vd3d3LmluZmluaXRvLmlvLyIsImlzcyI6ImluZmluaXRvIiwic3ViIjoiaW5mb0BpbmZpbml0by5pbyJ9.Zby6YAlKKK8xJLOFTsQjmQb8BPfduhWwqpil6rCZEiD3O3MQoFKPbK-71xBqdznd4R6ss0-nki4uGb5yLN6mKoMwS2Q2CqNKVsDY93zIUVrMAJ4pRFfGhsX0Pf-oVEZQTlu56J5eLfTsFJn8tTZfDM8KEn-9yBZNzCCSv1OoXdXNe8qkd5KeEoDxeak_OHCtv1CXdhhww3F7I2-zCUgIWVfnHBKeYzaclhFq-VZRZqwGzM1lFJ3JLNQsEs_U1Xj0r3H5_osxJE8uZmySkLcM5m9MgdWentxLwVUehLTuaWZZRf951AzW90ZA4Tvu3gzvD2yibHV3iSVe18S_mm3asA",
                      "token_type":"Bearer",
                      "expires_in":84599
                    }
 *             }
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/definitions/400'
 *       401:
 *         description: Error
 *         schema:
 *           $ref: '#/definitions/401'
 *       404:
 *         description: Error
 *         schema:
 *           $ref: '#/definitions/404'
 *       500:
 *         description: Error
 *         schema:
 *           $ref: '#/definitions/500'
 */


/**
 * @swagger
 * /api/v1/authentication-3rd:
 *   post:
 *     summary: Authentication 3rd
 *     tags:
 *       - Authentication
 *     description: Authentication
 *     parameters:
 *       - in: header
 *         name: x-time
 *         description: time call to server (unix time)
 *         required: true
 *       - in: header
 *         name: x-signature
 *         description: checksum data
 *       - in: body
 *         name: data
 *         description: Data for login.
 *         schema:
 *            type: object
 *            required: 
 *            example: 
 *               {
                    "api_key":"d485c3fd-31b0-496b-8d47-e357d8634075"
                  } 
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Ok 
 *         examples:
 *           application/json:
 *             {
 *                 "data":{
                      "access_token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiJiNThkZTJmNS02MDVkLTQ5NGMtYmI0Mi1iNjAyYmMxZWMwNWMiLCJ1c2VyX2lkIjoiN2ZhYmE3NmUtZDYwYS0xMWU5LTlkNmUtZjIzYzkxYTAzMTM5IiwidXNlcm5hbWUiOiJodXlodEBibG9ja2NoYWlubGFicy5hc2lhIiwiaWF0IjoxNTY4ODczMTU2LCJleHAiOjE1Njg5NTc3NTYsImF1ZCI6Imh0dHBzOi8vd3d3LmluZmluaXRvLmlvLyIsImlzcyI6ImluZmluaXRvIiwic3ViIjoiaW5mb0BpbmZpbml0by5pbyJ9.Zby6YAlKKK8xJLOFTsQjmQb8BPfduhWwqpil6rCZEiD3O3MQoFKPbK-71xBqdznd4R6ss0-nki4uGb5yLN6mKoMwS2Q2CqNKVsDY93zIUVrMAJ4pRFfGhsX0Pf-oVEZQTlu56J5eLfTsFJn8tTZfDM8KEn-9yBZNzCCSv1OoXdXNe8qkd5KeEoDxeak_OHCtv1CXdhhww3F7I2-zCUgIWVfnHBKeYzaclhFq-VZRZqwGzM1lFJ3JLNQsEs_U1Xj0r3H5_osxJE8uZmySkLcM5m9MgdWentxLwVUehLTuaWZZRf951AzW90ZA4Tvu3gzvD2yibHV3iSVe18S_mm3asA",
                      "token_type":"Bearer",
                      "expires_in":84599
                    }
 *             }
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/definitions/400'
 *       401:
 *         description: Error
 *         schema:
 *           $ref: '#/definitions/401'
 *       404:
 *         description: Error
 *         schema:
 *           $ref: '#/definitions/404'
 *       500:
 *         description: Error
 *         schema:
 *           $ref: '#/definitions/500'
 */
module.exports = router;
