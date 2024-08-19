const axios = require('axios');

async function getUser() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
  return response;
}

module.exports = getUser;