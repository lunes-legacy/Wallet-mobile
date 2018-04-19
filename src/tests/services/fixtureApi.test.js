import api from 'app/src/services/api';
import fixtureApi from 'app/src/services/fixtureApi';
import R from 'ramda';

test('All fixture map to actual api', () => {
  const fixtureKeys = R.keys(fixtureApi).sort();
  const apiKeys = R.keys(api.createApi()).sort();

  const intersection = R.intersection(fixtureKeys, apiKeys).sort();

  // There is no difference between the intersection and all fixtures
  expect(R.equals(apiKeys, intersection)).toBe(true);
});

test('fixtureApi create', () => {
  const expectedFile = require('app/src/fixtures/user.json');
  const user = {};
  expect(fixtureApi.create(user)).toEqual({
    ok: true,
    data: expectedFile,
  });
});

test('fixtureApi login', () => {
  const expectedFile = require('app/src/fixtures/user.json');
  const user = {};
  expect(fixtureApi.login(user)).toEqual({
    ok: true,
    data: expectedFile,
  });
});
