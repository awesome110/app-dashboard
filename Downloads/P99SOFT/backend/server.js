import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "test",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/locations", (req, res) => {
  const q = "SELECT * FROM locations";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/locations", (req, res) => {
  const q = "INSERT INTO locations(`location`) VALUES (?)";

  const values = [
    req.body.location
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/locations/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM location WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/locations/:id", (req, res) => {
  const locationId = req.params.id;
  const q = "UPDATE locations SET `location`= ?";

  const values = [
    req.body.location
  ];

  db.query(q, [...values,locationId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend");
});