import getDataFromApi from '../utils/request';

global.fetch = jest.fn(() => 
  Promise.resolve({
    json: {}
  })
)

it("gets data", async () => {
  const data = await getDataFromApi('https://www.themealdb.com/api/json/v1/1/categories.php');

  expect(data).toBe(Object);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/categories.php')
});