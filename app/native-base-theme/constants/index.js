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
    isCoinSelected: true, //to show chart or not
    price: {
      percent: '+14,90 (1,35%)',
      status: 'up',
    },
  },
  {
    name: 'LUN',
    label: 'Lunes',
    isActive: true, //to show or not on the device
    isCoinSelected: false, //to show chart or not
    price: {
      percent: '-4,90 (0,15%)',
      status: 'down',
    },
  },
  {
    name: 'ETH',
    label: 'Ethereum',
    isActive: true,
    isCoinSelected: false, //to show chart or not
    price: {
      percent: '+0,90 (1,35%)',
      status: 'up',
    },
  },
  {
    name: 'LTC',
    label: 'Litecoin',
    isActive: true,
    isCoinSelected: false, //to show chart or not
    price: {
      percent: '+11,90 (1,35%)',
      status: 'up',
    },
  },
];
