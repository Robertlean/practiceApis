const productRepo = require('../repositories/products');

const getAll = async () => {
  const response = await productRepo.getAll();
  return response
}

const getById = async (id) => {
  return await productRepo.getById(id)
}

const create = async (productData) => {
  let existingProduct = await productRepo.getById(productData.code);
  if(existingProduct) {
    const error = new Error('Invalid product');
    error.status = 404;
    throw error
  }
  const newProduct = {
    code: productData.code,
    name: productData.name,
    price: productData.price,
    stock: productData.stock
  }

  const productCreate = await productRepo.create(newProduct);
  return productCreate
}

const update = async (productData, id) => {
  const product = productRepo.getById(id);
  if(!product) {
    const error = new Error('Product not found!');
    error.status = 404;
    throw error
  }

  const productUpdate = {
    code: productData.code,
    name: productData.name,
    price: productData.price,
    stock: productData.stock
  }

  await productRepo.update(productUpdate, id);

  const updatedProduct = await productRepo.getById(id);
  return updatedProduct
}

const remove = async (id) => {
  const product = await productRepo.getById(id);
  if(!product) {
    const error = new Error('Product not found!');
    error.status = 404;
    throw error
  }
  return await productRepo.remove(id)
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}