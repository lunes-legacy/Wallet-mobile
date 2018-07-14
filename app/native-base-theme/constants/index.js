export const TextDensityConstant = {
  LIGHT: 'light',
  REGULAR: 'regular',
  MEDIUM: 'medium',
  BOLD: 'bold',
};

export const FontFamilyConstant = {
  $bosonFontRobotoLight: 'Roboto-Light',
  $bosonFontRobotoRegular: 'Roboto-Regular',
  $bosonFontRobotoMedium: 'Roboto-Medium',
  $bosonFontRobotoMediumItalic: 'Roboto-MediumItalic',
  $bosonFontRobotoBold: 'Roboto-Bold',
  $bosonFontRobotoBoldItalic: 'Roboto-BoldItalic',
};

export const AllCoins = {
  BTC: {
    name: 'BTC',
    label: 'Bitcoin',
    initials: 'BTC',
    price: 0,
  },
  LTC: {
    name: 'LTC',
    label: 'Litecoin',
    initials: 'LTC',
    price: 0,
  },
  LNS: {
    name: 'LNS',
    label: 'Lunes',
    initials: 'LNS',
    price: 0.08,
  },
  ETH: {
    name: 'ETH',
    label: 'Ethereum',
    initials: 'ETH',
    price: 0,
  },
};

export const LunesTabCoinsConstant = [
  {
    name: AllCoins.BTC.name,
    label: AllCoins.BTC.label,
    isActive: true,
    isCoinSelected: true, // to show chart or not
    price: {
      displayPrice: '0.00',
      displayPercent: '0%',
      display: `${this.displayPrice} ${this.displayPercent}`,
      percent: '0,0 (0%)',
      status: '-', // up, down
    },
  },
  {
    name: AllCoins.LNS.name,
    label: AllCoins.LNS.label,
    isActive: true, // to show or not on the device
    isCoinSelected: false, // to show chart or not
    price: {
      displayPrice: `$ ${AllCoins.LNS.price}`,
      displayPercent: '-',
      display: `${this.displayPrice} ${this.displayPercent}`,
      percent: '0 (0.0%)',
      status: '-', // up, down
    },
  },
  {
    name: AllCoins.ETH.name,
    label: AllCoins.ETH.label,
    isActive: true,
    isCoinSelected: false, // to show chart or not
    price: {
      displayPrice: '0.00',
      displayPercent: '0%',
      display: `${this.displayPrice} ${this.displayPercent}`,
      percent: '0 (0%)',
      status: '-', // up, down
    },
  },
  {
    name: AllCoins.LTC.name,
    label: AllCoins.LTC.name,
    isActive: true,
    isCoinSelected: false, // to show chart or not
    price: {
      displayPrice: '0.00',
      displayPercent: '0%',
      display: `${this.displayPrice} ${this.displayPercent}`,
      percent: '0 (0%)',
      status: '-', // up, down
    },
  },
];
