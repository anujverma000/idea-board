const express = require("express");
const router = express.Router();
const controller= require('../controllers/idea.controller')

router.get('/', controller.getAll)
router.get("/new", controller.create);
router.post("/update", controller.update);
router.post("/delete", controller.delete);

module.exports = router;