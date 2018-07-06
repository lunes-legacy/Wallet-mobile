import * as Keychain from 'react-native-keychain';

const seed_encrypted = 'seed_encrypted';

async function store(seed) {
  await Keychain.setGenericPassword(seed_encrypted, seed);
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
