import { StateSchema } from '@app/providers/StoreProvider';
import { getArticleDetailsLoading } from '../getArticleDetailsLoading';

describe('getArticleDetailsLoading test suite', () => {
  test('should return article details error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        loading: true,
      },
    };

    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(false);
  });
});
