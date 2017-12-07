// @flow
import Colors from '../theme/Colors';

const tabStyle = {
  tabs: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  tabLink: {
    paddingVertical: 30,
    paddingHorizontal: 50,
    flexDirection: 'row',
    borderBottomColor: '#bbb',
    borderBottomWidth: 4,
  },
  tabLinkTitle: {
    fontSize: 15,
    color: Colors.white,
  },
  tabLinkSelected: {
    borderBottomColor: Colors.secondary,
  },
  tabContent: {},
  activeLinkStyle: {
    borderBottom: '2px solid #333',
  },
  visibleTabStyle: {
    flexDirection: 'row',
  },
  content: {
    padding: 15,
  },
};

export default tabStyle;
