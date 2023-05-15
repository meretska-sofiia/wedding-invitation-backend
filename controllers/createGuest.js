const { Guest } = require("../models/guest");

const getGuestName = async (req, res) => {
  const { userId } = req.query;
  const guest = await Guest.findById(userId);
  if (!guest) {
    res.status(404).json({ message: "Guest not found" });
  } else {
    res.status(200).json(guest);
  }
};
module.exports = getGuestName;
