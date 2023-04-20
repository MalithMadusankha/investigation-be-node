const router = require("express").Router();

// const Authenticate = require("../../Authentication");
let ComplainControler = require("../controllers/complainControler");

router.post("", ComplainControler.create);
router.put("/:id", ComplainControler.update);
router.delete("/:id", ComplainControler.delete);
router.get("/:id", ComplainControler.getById);
router.get("", ComplainControler.getAll);

module.exports = router;
