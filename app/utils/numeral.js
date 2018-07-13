import numeral from 'numeral';

numeral.register('locale', 'pt-br', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'mil',
    million: 'mi',
    billion: 'bi',
    trillion: 'tri',
  },
  currency: {
    symbol: 'R$',
  },
});

export { numeral };
