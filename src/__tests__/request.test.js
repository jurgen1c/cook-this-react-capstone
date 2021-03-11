import getDataFromApi from '../utils/request';

describe('Api communications module', () => {
  it(
    '1. Checks the get pokemons method',
    async () => {
      const data = await getDataFromApi('https://www.themealdb.com/api/json/v1/1/categories.php');
      expect(data).toBeInstanceOf(Object);
      expect(data.categories).toBeInstanceOf(Array);
    },
  );

  it(
    '2. Checks the get one pokemon info method',
    async () => {
      const data = await getDataFromApi('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
      expect(data).toBeInstanceOf(Object);
      expect(data.meals).toBeInstanceOf(Array);
    },
  );
});
