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
  avatar: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.secondary,
    size: 80,
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
    paddingLeft: 20,
    paddingBottom: 20,
    color: Colors.white,
    coins: {
      color: Colors.secondary,
    },
    dolar: {
      fontSize: 18,
    },
    brl: {
      fontSize: 18,
    },
  },
  hr: {
    color: Colors.white,
  },
};
