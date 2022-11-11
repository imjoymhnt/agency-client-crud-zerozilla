const Agency = require("../models/Agency");
const Clients = require("../models/Clients");

// ########################### Create Agency and Client ############################
exports.createAgencyAndClient = (req, res) => {
  try {
    const { agency, client } = req.body;

    Agency.findOne({ agencyId: agency.agencyId }, (err, agencyData) => {
      if (!agencyData) {
        const newAgency = new Agency(agency);
        newAgency.save((err, newData) => {
          if (err || !newData) {
            return res.status(400).json({
              success: false,
              msg: err.message,
            });
          }
          const newClient = new Clients({ ...client, agencyId: newData._id });
          newClient.save((err, newClientData) => {
            if (err || !newClientData) {
              return res.status(400).json({
                success: false,
                msg: "can't add new Client",
              });
            }
            return res.status(201).json({
              success: true,
              agency: newData,
              client: newClientData,
            });
          });
        });
      } else {
        const newClient = new Clients({ ...client, agencyId: agencyData._id });
        newClient.save((err, newClientData) => {
          if (err || !newClientData) {
            return res.status(400).json({
              success: false,
              msg: "can't add new Client",
            });
          }
          return res.status(201).json({
            success: true,
            agency: agencyData,
            client: newClientData,
          });
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};
