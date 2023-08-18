import { StateSchema } from '@app/providers/StorePovider';
import { getArticleDetailsError } from '../getArticleDetailsError';

describe('getArticleDetailsError test suite', () => {
  test('should return article details error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };

    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });

  test('should return null', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsError(state as StateSchema)).toEqual(null);
  });
});
