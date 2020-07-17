// /routes/productRoutes.js
const mongoose = require('mongoose');
const Player = mongoose.model('players');

module.exports = (app) => {

  app.get(`/api/player`, async (req, res) => {
    let products = await Player.find();
    return res.status(200).send(products);
  });

  app.post(`/api/player`, async (req, res) => {
    let product = await Player.create(req.body);
    return res.status(201).send({
      error: false,
      product
    })
  })

  app.put(`/api/player/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Player.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product
    })

  });

  app.delete(`/api/player/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Player.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product
    })

  })

}