const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

const PORT = process.env.PORT || 3000;

const CategorySchema = require("./schemas/CategorySchema");
const ProductSchema = require("./schemas/ProductSchema");

const server = express();

server.use(cors());

server.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.xewvrap.mongodb.net/?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

server.get("/", (req, res) => {
  return res.json({
    message: "Seja bem vindo à API - Wesley Bruno!!!😉",
  });
});

//Category
server.get("/category", async (req, res) => {
  const categories = await CategorySchema.find();
  return res.json(categories);
});

//Product
server.get("/product", async (req, res) => {
  const products = await ProductSchema.find();
  return res.json(products);
});

server.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await ProductSchema.findById(id);
  return res.json(product);
});

// server.post("/todo", async (req, res) => {
//   const { title, date } = req.body;
//   if (!title || !date) {
//     return res.status(400).json({ message: "Validations Fails" });
//   }
//   const todo = await ToDoSchema.create(req.body);
//   return res.status(201).json(todo);
// });

// server.get("/todo", async (req, res) => {
//   const todos = await ToDoSchema.find();
//   return res.json(todos);
// });

// server.get("/todo/:id", async (req, res) => {
//   const { id } = req.params;
//   const todo = await ToDoSchema.findById(id);
//   return res.json(todo);
// });

// server.put("/todo/:id", async (req, res) => {
//   const { id } = req.params;
//   const todo = await ToDoSchema.findOneAndUpdate({ _id: id }, req.body);
//   return res.json(todo);
// });

// server.delete("/todo/:id", async (req, res) => {
//   const { id } = req.params;
//   const todo = await ToDoSchema.deleteOne({ _id: id });
//   return res.json({ message: "Successfully deleted" });
// });

server.listen(PORT, () =>
  console.log("Servidor iniciado em http://localhost:" + PORT)
);
