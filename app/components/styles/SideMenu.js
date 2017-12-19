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
  avatarColor: Colors.secondary,
  avatar: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarSize: 80,
  avatarSmallSize: 40,
  label:{
    name:{
      paddingTop: 15,
      color: Colors.white,
      fontSize: 18,
    },
    email:{
      color: Colors.white,
      fontSize: 11,
    },
  },
  navItemStyle: {
    padding: 10,
    paddingLeft: 40,
    color: Colors.white,
    flexDirection: 'row',
  },
  divider: {
    borderBottomColor: Colors.divider,
    borderBottomWidth: 1,
  },
  footerContainer: {
    textAlignVertical: 'center',
    color: Colors.white,
    textAlign: 'center',
    backgroundColor: Colors.secondary,
    paddingBottom: 15,
    paddingTop: 15,
    fontSize: 16,
  },
  hr: {
    color: Colors.white,
  },
  coins: {
    color: Colors.primary,
    backgroundColor: Colors.secondary,
    borderWidth: 100
  },
  dolar: {
    fontSize: 15,
  },
  brl: {
    fontSize: 18,
  },
};
