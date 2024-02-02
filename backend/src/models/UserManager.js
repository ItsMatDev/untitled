const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async getByEmail(email) {
    const [data] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );
    return data;
  }

  async getById(id) {
    const [user] = await this.database.query(
      "SELECT id, email, role FROM user WHERE id = ?",
      [id]
    );
    return user;
  }
}

module.exports = UserManager;
