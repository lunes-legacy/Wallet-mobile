export default {
  getRoot: () => ({
    ok: true,
    data: require('app/src/fixtures/root.json'),
  }),
  login: user => ({
    ok: true,
    data: require('app/src/fixtures/user.json'),
  }),
  create: user => ({
    ok: true,
    data: require('app/src/fixtures/user.json'),
  }),
  logout: () => ({
    ok: true,
    data: '',
  }),
};
