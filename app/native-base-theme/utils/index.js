import React from 'react';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import BosonColors from '../variables/bosonColor';
import { LunesTabCoinsConstant } from '../constants';

export const RenderColorCoinUtil = coinName => {
  switch (coinName) {
    case 'BTC':
      return BosonColors.$bosonMediumYellow;
    case 'LUN':
      return BosonColors.$bosonLightGreen;
    case 'ETH':
      return BosonColors.$bosonLightGrey;
    case 'LTC':
      return BosonColors.$bosonPastaPurple;
  }
};

export const RenderIconKPIUtil = status => {
  if (status === 'up') {
    return (
      <Entypo
        name="arrow-long-up"
        size={10}
        color={BosonColors.$bosonLightGreen}
      />
    );
  }
  return (
    <Entypo
      name="arrow-long-down"
      size={10}
      color={BosonColors.$bosonDarkYellow}
    />
  );
};

export const RenderColorWhiteToCoinSelected = kpi => {
  if (kpi.isCoinSelected) {
    return { color: '#fff' };
  }
  return {};
};
