import Colors from '../theme/Colors';

export default {
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: Colors.background,
  },
  hamburguer: {
    padding: 10,
    backgroundColor: Colors.background,
  },
  navItemStyle: {
    padding: 10,
    paddingLeft: 40,
    color: Colors.white,
    flexDirection: 'row',
    divider: {
      borderBottomColor: Colors.divider,
      borderBottomWidth: 1,
    },
  },
  footerContainer: {
    paddingLeft: 40,
    padding: 10,
    color: Colors.white,
    backgroundColor: Colors.background,
  },
  hr: {
    color: Colors.white,
  },
};
