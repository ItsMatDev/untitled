const tables = require("../tables");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json("Please specify both email and password");

  try {
    const [user] = await tables.user.getByEmail(email);
    if (!user) return res.status(400).json("Invalid email");
    if (user.password === password) {
      res.status(200).json({
        email,
        id: user.id,
      });
    } else res.status(400).json("invalid password");
  } catch (err) {
    res.sendStatus(404);
  }
  return null;
};

module.exports = {
  login,
};
