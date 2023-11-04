import { StateSchema } from '@app/providers/StoreProvider';
import { getArticleDetailsData } from '../getArticleDetailsData';

describe('getArticleDetailsData test suite', () => {
  test('should return article details data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: {
          id: '1',
          title: 'title',
        },
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual({
      id: '1',
      title: 'title',
    });
  });

  test('should return null', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsData(state as StateSchema)).toEqual(null);
  });
});
