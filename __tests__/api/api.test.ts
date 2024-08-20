const axios = require('axios');
const getUser = require('../../src/api/api');
jest.mock('axios');

it('return post type', async () => {
  axios.get.mockResolvedValue({
    userExist: false
  });

  const user = await getUser();
  expect(user).toMatchObject({
    userExist: false
  });
});
