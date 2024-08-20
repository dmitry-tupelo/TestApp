import {activateUser} from '../../src/store/slices/userSlice';
const axios = require('axios');
import {store} from '../../src/store';
jest.mock('axios');

describe('mock api call', () => {
  it('should pass', async () => {
    const postSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    });

    await store.dispatch(activateUser());
    expect(postSpy).toBeCalledWith(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    const state = store.getState();
    expect(state).toEqual({
      users: {
        error: '',
        status: 'succeeded',
        user: {
          email: '',
          name: '',
        },
      },
    });
  });
});