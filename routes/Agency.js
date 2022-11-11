const { createAgencyAndClient } = require("../controller/Agency");
const { updateClientDetails, getMaxBill } = require("../controller/Client");

const router = require("express").Router();

router.post("/create", createAgencyAndClient);
router.put("/update-client", updateClientDetails);
router.get("/get-max-bill", getMaxBill);

module.exports = router;
