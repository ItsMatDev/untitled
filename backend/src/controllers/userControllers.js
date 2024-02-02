const argon = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json("Please specify both email and password");

  try {
    const [user] = await tables.user.getByEmail(email);
    if (!user) return res.status(400).json("Invalid email");
    if (await argon.verify(user.password, password)) {
      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_AUTH_SECRET,
        { expiresIn: "1h" }
      );
      res.cookie("access_token", token, {
        httpOnly: true,
        secure: false,
      });

      res.status(200).json({
        firstname: user.firstname,
        email,
        id: user.id,
        role: user.role,
      });
    } else res.status(400).json("invalid password");
  } catch (err) {
    res.sendStatus(404);
  }
  return null;
};

const getCurrentUser = async (req, res, next) => {
  try {
    const [user] = await tables.user.getById(req.idUser);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
  getCurrentUser,
};
