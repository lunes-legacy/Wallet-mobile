import * as Keychain from 'react-native-keychain';

const seedEncrypted = 'seed_encrypted';

async function store(seed) {
  await Keychain.setGenericPassword(seedEncrypted, seed);
}

async function retrieveSeed() {
  try {
    const seed = await Keychain.getGenericPassword();
    if (seed && seed.password) {
      return seed.password;
    }
    return null;
  } catch (error) {
    return null;
  }
}

async function resetSeed() {
  await Keychain.resetGenericPassword();
}

export { store, retrieveSeed, resetSeed };
