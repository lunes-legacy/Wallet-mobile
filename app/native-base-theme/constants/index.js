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

export const LunesTabCoinsConstant = [
  {
    name: 'BTC',
    label: 'Bitcoin',
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
    name: 'LNS',
    label: 'Lunes',
    isActive: true, // to show or not on the device
    isCoinSelected: false, // to show chart or not
    price: {
      displayPrice: '$ 0.08',
      displayPercent: '-',
      display: `${this.displayPrice} ${this.displayPercent}`,
      percent: '0 (0.0%)',
      status: '-', // up, down
    },
  },
  {
    name: 'ETH',
    label: 'Ethereum',
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
    name: 'LTC',
    label: 'Litecoin',
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
