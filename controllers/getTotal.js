const { Guest } = require("../models/guest");

const getTotal = async (req, res) => {
  const guests = await Guest.find();

  const totalWillCome = guests.reduce((total, guest) => {
    return (
      total +
      (guest.willCome1 ? 1 : 0) +
      (guest.willCome2 ? 1 : 0) +
      (guest.willCome3 ? 1 : 0) +
      (guest.willCome4 ? 1 : 0)
    );
  }, 0);

  res.json(totalWillCome);
};
module.exports = getTotal;
