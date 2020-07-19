// /routes/productRoutes.js
const mongoose = require('mongoose');
const Player = mongoose.model('diamond1s');

module.exports = (app) => {

  app.get(`/api/diamond1`, async (req, res) => {
    let products = await Player.find();
    return res.status(200).send(products);
  });

  app.post(`/api/diamond1`, async (req, res) => {
    let product = await Player.create(req.body);
    return res.status(201).send({
      error: false,
      product
    })
  })

  app.put(`/api/diamond1/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Player.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product
    })

  });

  app.delete(`/api/diamond1/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Player.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product
    })

  })

}