const Query = {
  users: {
    all:
    `
    SELECT * FROM Trybesmith.Users
    `,
    one:
    `
    SELECT * FROM Trybesmith.Users
    WHERE id = ?
    `,
    create:
    `
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)
    `,
    update:
    `
    UPDATE Trybesmith.Users
    SET username = ?, classe = ?, level = ?, password = ?
    WHERE id = ?
    `,
    delete:
    `
    DELETE FROM Trybesmith.Users
    WHERE id = ?
    `,
  },
  products: {
    all:
    `
    SELECT * FROM Trybesmith.Products
    `,
    one:
    `
    SELECT * FROM Trybesmith.Products
    WHERE id = ?
    `,
    create:
    `
    INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?)
    `,
    update:
    `
    UPDATE Trybesmith.Products
    SET name = ?, amount = ?
    WHERE id = ?
    `,
    delete:
    `
    DELETE FROM Trybesmith.Products
    WHERE id = ?
    `,
  },
  orders: {
    all:
    `
    SELECT * FROM Trybesmith.Orders
    `,
    one:
    `
    SELECT * FROM Trybesmith.Orders
    WHERE id = ?
    `,
  },
};

export default Query;
