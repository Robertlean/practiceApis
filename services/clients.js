const clientRepo = require('../repositories/clients');

const getAll = async () => {
  const response = await clientRepo.getAll()
}

const getById = async (id) => {
  return await clientRepo.getById(id)
}

const create = async (clientData) => {
  let existingClient = await clientRepo.getById(clientData.numberClient);
  if (existingClient) {
    const error = new Error('Invalid client');
    error.status = 404;
    throw error
  }
  const newClient = {
    firstName: clientData.firstName,
    lastName: clientData.lastName,
    phoneNumber: clientData.phoneNumber,
    address: clientData.address,
    city: clientData.city,
    numberClient: clientData.numberClient
  };

  const clientCreate = await clientRepo.create(newClient);
  return clientCreate
}

const update = async (clientData, id) => {
  const client = clientRepo.getById(id);
  if (!client) {
    const error = new Error('Client not found!');
    error.status = 404;
    throw error;
  }

  const clientUpdate = {
    firstName: clientData.firstName,
    lastName: clientData.lastName,
    phoneNumber: clientData.phoneNumber,
    address: clientData.address,
    city: clientData.city,
    numberClient: clientData.numberClient
  };

  await clientRepo.update(clientUpdate, id);

  const updatedClient = await clientRepo.getById(id);
  return updatedClient
}

const remove = async (id) => {
  const client = await clientRepo.getById(id);
  if(!client) {
    const error = new Error('Client not found!');
    error.status = 404;
    throw error
  }
  return await clientRepo.remove(id)
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}