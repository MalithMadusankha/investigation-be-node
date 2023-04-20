let ComplainModel = require("../models/complainModel");

exports.create = (req, res, next) => {
  console.log(`<=== Create Compalain ====>`);
  // Assigning value to variabales

  let complain = req.body.complain;
  let description = req.body.description;
  let investigation_status = req.body.investigation_status;
  let location = req.body.location;
  let complainer = req.body.complainer;
  let complain_on = req.body.complain_on;
  let investigator = req.body.investigator;
  let investigations = req.body.investigations;

  const newObj = new ComplainModel({
    complain,
    description,
    investigation_status,
    location,
    complainer,
    complain_on,
    investigator,
    investigations,
  });

  newObj
    .save()
    .then(() => {
      res.json(" Complain Created ");
    })
    .catch((err) => {
      console.log(err);
    });
};

// Update Complain
exports.update = async (req, res) => {
  console.log(`<=== Update Compalain ====>`);
  let id = req.params.id;
  const { first_name, last_name, firebase_id, email, gender, address, mobile } =
    req.body;

  const updateObj = {
    complain,
    description,
    investigation_status,
    location,
    complainer,
    complain_on,
    investigator,
    investigations,
  };

  const update = await ComplainModel.findByIdAndUpdate(id, updateObj)
    .then(() => {
      res.status(200).send({ status: "Complain Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};

exports.delete = async (req, res) => {
  console.log(`<=== Delete Compalain ====>`);
  let id = req.params.id;

  await ComplainModel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "Complain Deleted!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Delete!" });
      console.log(err.message);
    });
};

exports.getAll = (req, res, next) => {
  console.log(`<=== Get All Complains ====>`);
  ComplainModel.find()
    .then((obj) => {
      res.json(obj);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getById = async (req, res) => {
  console.log(`<=== Get Complain By ComplainID ====>`);

  let id = req.params.id;

  await ComplainModel.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
