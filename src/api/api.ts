const axios = require('axios');

async function getUser() {
  // example of axios request;
  // const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
  // but for mock we will use our own
  const response = {userExist: false}
  return response;
}

module.exports = getUser;