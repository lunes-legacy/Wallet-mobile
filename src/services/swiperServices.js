const imagesURLs = [
  'http://res.cloudinary.com/luneswallet/image/upload/c_scale,w_397/v1515019717/bem-vindo.png',
  'http://res.cloudinary.com/luneswallet/image/upload/c_scale,w_397/v1515019717/analytics.png',
  'http://res.cloudinary.com/luneswallet/image/upload/c_scale,w_300/v1515019717/faca-backup.png',
  'http://res.cloudinary.com/luneswallet/image/upload/c_scale,w_397/v1515019717/compre-moedas.png',
  'http://res.cloudinary.com/luneswallet/image/upload/c_scale,w_390/v1515019717/transferencia-moedas.png',
];

// build images, texts for IntroductionScree
// the Introduction contain a total 5 screens
export const buildSwipers = I18n => {
  const swipers = [
    {
      uri: imagesURLs[0],
      headerText: I18n.t('WELCOME'),
      bodyText: [
        I18n.t('WELCOME_MSG'),
        I18n.t('WELCOME_MSG_2'),
        I18n.t('WELCOME_MSG_3'),
      ],
    },
    {
      uri: imagesURLs[1],
      headerText: I18n.t('ANALYTICS'),
      bodyText: [I18n.t('ANALYTICS_MSG')],
    },
    {
      uri: imagesURLs[2],
      headerText: I18n.t('DO_YOUR_BACKUP'),
      bodyText: [I18n.t('DO_YOUR_BACKUP_MSG'), I18n.t('DO_YOUR_BACKUP_MSG_2')],
    },
    {
      uri: imagesURLs[3],
      headerText: I18n.t('BUY_COINS'),
      bodyText: [I18n.t('BUY_COINS_MSG'), I18n.t('BUY_COINS_MSG_2')],
    },
    {
      uri: imagesURLs[4],
      headerText: I18n.t('TRANSACTIONS_P2P'),
      bodyText: [I18n.t('TRANSACTIONS_P2P_MSG')],
    },
  ];
  return swipers;
};
