const db = require('../models')

const getAll = async () => {
  const response = await db.Products.findAll();
  return response
}

const getById = async (idProduct) => {
  const response = await db.Products.findOne({ where: { code: idProduct } });
  return response
}

const create = async (productData) => {
  const product = await db.Products.create(productData);
  return product
}

const update = async (data, id) => {
  const response = await db.Products.update(data, {
    where: {
      code: id
    }
  })
  return response
}

const remove = async (id) => {
  const response = await db.Products.destroy({
    where: {
      code: id
    }
  })
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}