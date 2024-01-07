import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticles } from '../fetchArticles';
import { fetchNextArticles } from '../fetchNextArticles';

jest.mock('../fetchArticles');

describe('fetchNextArticles test suite', () => {
  test('should fetch data with success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticles).toHaveBeenCalledWith({ page: 3 });
  });

  test('should not fetch data', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalled();
  });
});
