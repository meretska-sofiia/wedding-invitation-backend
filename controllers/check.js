const check = async (req, res) => {
  res.status(200).json({ message: "Connection successfull" });
};
module.exports = check;
