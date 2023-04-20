const router = require("express").Router();

// const Authenticate = require("../../Authentication");
let UserControler = require("../controllers/userControler");

router.post("", UserControler.create);
router.put("/:id", UserControler.update);
router.delete("/:id", UserControler.delete);
router.get("/:firebase_id", UserControler.checkUser);
router.get("", UserControler.getAll);

module.exports = router;
