const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "products" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async create(product) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name,image,description,price) values (?,?,?,?)`,
      [product.name, product.image, product.description, product.price]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async modifyOneProduct(data, id) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table}
      SET name = ? , image = ? , description = ? , price = ?
      WHERE id = ?`,
      [
        data.modifiedName,
        data.modifiedImage,
        data.modifiedDescription,
        data.modifiedPrice,
        id,
      ]
    );
    return rows;
  }

  async deleteOneProduct(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows;
  }
}

module.exports = ProductManager;
