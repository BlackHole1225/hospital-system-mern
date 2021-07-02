const route = require("express").Router();
const {
  registerHospital,
  loginHospital,
  individualHospital,
  upateHospital,
  addService,
  addEvents,
  addBeds,
  addContacts,
  addDoctors,
  addVaccancy,
  bedTypes,
} = require("../controllers/hospitalControllers");

route.post("/registerHospital", registerHospital);
route.post("/loginHospital", loginHospital);
route.get("/:id", individualHospital);
route.put("/:id/hospitalProfile", upateHospital);
route.post("/:id/services/addservice", addService);
route.post("/:id/events/addEvents", addEvents);
route.post("/:id/addBeds", addBeds);
route.post("/:id/bedTypes", bedTypes);
route.post("/:id/addContacts", addContacts);
route.post("/:id/addDoctors", addDoctors);
route.post("/:id/addVaccancy", addVaccancy);
module.exports = route;
