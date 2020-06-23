const express = require('express');
const router = express.Router();
const controller = require("./authentication.controller");

router.post("/authentication",
  controller
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
 *                 "data": "token"
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
