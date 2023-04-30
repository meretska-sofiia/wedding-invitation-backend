const { Guest } = require("../models/guest");

const willCome1 = async (req, res) => {
  const { userId } = req.query;
  console.log(userId);
  const { willCome1, willCome2, willCome3, willCome4 } = req.body;
  const guest = await Guest.findByIdAndUpdate(userId, {
    willCome1,
    willCome2,
    willCome3,
    willCome4,
  });

  res.status(200).json(guest);
};
module.exports = willCome1;
