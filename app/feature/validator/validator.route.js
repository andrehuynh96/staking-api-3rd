const express = require("express");
const controller = require("./validator.controller");
const extractToken = require("app/middleware/extract-token.middleware");

const route = express.Router();

route.get(
  '/validators/:platform',
  extractToken,
  controller
)

module.exports = route;

/*********************************************************************/


/**
 * @swagger
 * /api/v1/validators/{platform}:
 *   get:
 *     summary: validator list
 *     tags:
 *       - Validator
 *     description:
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         type: string
 *         required: true
 *         description: Bearer {token}
 *       - name: platform
 *         in: path
 *         type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Ok
 *         examples:
 *           application/json:
 *             {
 *                 "data":[
                        {
                          "id": "0076d218-08a6-42c8-be55-c4d43fa3f09d",
                          "platform": "TADA",
                          "address": "53215c471b7ac752e3ddf8f2c4c1e6ed111857bfaa675d5e31ce8bce"
                        }
                    ]
 *
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