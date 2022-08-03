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
    login:
    `
    SELECT * FROM Trybesmith.Users
    WHERE username = ? AND password = ?
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
    /*
    Informação da query JSON_ARRAYAGG:
    https://www.tutorialspoint.com/mysql/mysql_aggregate_functions_json_arraygg.htm
    */
    all:
    `
    SELECT ord.id, ord.userId, JSON_ARRAYAGG(prd.id) AS productsIds
    FROM Trybesmith.Products AS prd
    INNER JOIN Trybesmith.Orders AS ord
    ON ord.id = prd.orderId
    GROUP BY ord.id
    ORDER BY ord.userId
    `,
    one:
    `
    SELECT * FROM Trybesmith.Orders
    WHERE id = ?
    `,
  },
};

export default Query;
