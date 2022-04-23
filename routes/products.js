var express = require("express");
var router = express.Router();
var fs = require("fs");

/* GET  products page. */
router.get("/", function (req, res, next) {
  fs.readFile("./public/products.json", "utf8", (err, data) => {
    if (err) {
      res.status(500);
      res.json(err);
      return;
    }
    res.json(JSON.parse(data));
  });
});

/*  Get products/:id/ */
router.get("/:id", function (req, res, next) {
  fs.readFile("./public/products.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    data = JSON.parse(data);
    res.json(data[req.params.id]);
  });
});

/* GET products/instock/:qt page. */
router.get("/instock/:qt", function (req, res, next) {
    fs.readFile("./public/products.json", "utf8", (err, data) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      data = JSON.parse(data);
  
      const desiredProductsInStock = Object.values(data).filter(
        (product) => product.stock >= req.params.qt
      );
      res.json(desiredProductsInStock);
    });
  });

/* GET products/:id/:qt page. */
router.get("/:id/:qt", function (req, res, next) {
  fs.readFile("./public/products.json", "utf8", (err, data) => {
    if (err) {
      res.status(500);
      res.json(err);
      return;
    }
    data = JSON.parse(data);
    const desiredProduct = data[req.params.id];
    const total_price = desiredProduct.price * req.params.qt;
    res.json({
      id: req.params.id,
      qt: req.params.id,
      unit_price: desiredProduct.price,
      total_price,
    });
  });
});



module.exports = router;
