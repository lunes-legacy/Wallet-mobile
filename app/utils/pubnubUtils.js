import ChannelConstant from '../constants/general';

const pubnubKeys = {
  publishKey: 'pub-c-dc9a51d0-1bfb-4150-a358-5b6365bfdbee',
  subscribeKey: 'sub-c-1d9c417a-03e8-11e8-b9cf-5e11f2e66252',
};
const channelDefault = ChannelConstant.PUBNUB.channelDefault;
const channelBalance = ChannelConstant.PUBNUB.channelBalance;

export { pubnubKeys, channelDefault, channelBalance };
