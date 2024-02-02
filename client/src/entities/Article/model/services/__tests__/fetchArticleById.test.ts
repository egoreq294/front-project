import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleById } from '../fetchArticleById';

describe('fetchArticleById test suite', () => {
  test('should fetch data with success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);

    thunk.apiNew.get.mockReturnValue(
      Promise.resolve({
        data: {
          id: '1',
          title: 'title',
        },
      }),
    );
    const result = await thunk.callThunkNew('1');

    expect(thunk.apiNew.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual({
      id: '1',
      title: 'title',
    });
  });

  test('should fetch data with error', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.apiNew.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunkNew('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
