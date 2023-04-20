let UserModel = require("../models/userModel");

exports.create = (req, res, next) => {
  console.log(`<=== Create User ====>`);
  // Assigning value to variabales

  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let firebase_id = req.body.firebase_id;
  let email = req.body.email;
  let gender = req.body.gender;
  let address = req.body.address;
  let mobile = req.body.mobile;

  const newUser = new UserModel({
    first_name,
    last_name,
    firebase_id,
    email,
    gender,
    address,
    mobile,
  });

  newUser
    .save()
    .then(() => {
      res.json(" User Created ");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAll = (req, res, next) => {
  console.log(`<=== Get All Users ====>`);
  UserModel.find()
    .then((obj) => {
      res.json(obj);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Update User
exports.update = async (req, res) => {
  console.log(`<=== Update User ====>`);
  let id = req.params.id;
  const { first_name, last_name, firebase_id, email, gender, address, mobile } =
    req.body;

  const updateObj = {
    first_name,
    last_name,
    firebase_id,
    email,
    gender,
    address,
    mobile,
  };

  const update = await UserModel.findByIdAndUpdate(id, updateObj)
    .then(() => {
      res.status(200).send({ status: "User Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};

exports.delete = async (req, res) => {
  console.log(`<=== Delete User ====>`);
  let id = req.params.id;

  await UserModel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "User Deleted!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Delete!" });
      console.log(err.message);
    });
};

exports.checkUser = async (req, res) => {
  console.log(`<=== Get User ====>`);

  let id = req.params.firebase_id;

  await UserModel.findOne({ firebase_id: id })
    .then((obj) => {
      let user = {
        isAdmin: true,
      };

      if (obj) {
        user.isAdmin = false;
      }

      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUserByUserId = async (req, res) => {
  console.log(`<=== Get User By UserID ====>`);

  let id = req.params.id;

  await UserModel.findById(id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
};
