import { StyleSheet } from "react-native";
// import Signup from './screens/signup';
export const GlobalStyle = StyleSheet.create({
  header: {
    backgroundColor: "#061424",
    paddingVertical: 15,
    color: "white",
    fontSize: 30,
    fontFamily: "cursive",
    textAlign: "center",
    fontWeight: "bold",
  },
  SearchInput: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 2,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
  },
  main: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom:450,
    // paddingVertical: 15
    // paddingHorizontal: 15,
  },
  mainScreen: {
    width: "50%",
    // display:"flex",

    // justifyContent:"center",
    // alignItems:"center",
    // flexDirection:"row",
    paddingHorizontal: 15,
    paddingVertical: 15,
    // marginBottom: 250,
  },
  card: {
    // backgroundColor: '#353534',
    marginTop: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  cardHeader: {
    // backgroundColor: '#353534',
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  cardHeadingText: {
    // color: 'white',
    fontSize: 20,
    fontFamily: "sans-serif",
  },
  cardImageContainer: {
    borderWidth: 14,
    borderColor: "white",
  },
  cardImage: {
    resizeMode: "stretch",
    width: "100%",
    height: 200,
  },
  cardBodyContainer: {
    padding:10,
    // backgroundColor: '#353534',
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  cardBodyHeadings: {
    // color: '#E5D9B6',
    fontSize: 22,
    marginBottom: 2,
    fontFamily: "sans-serif",
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  cardBodyPara: {
    // color: 'white',
    fontSize: 16,
    fontFamily: "cursive",
    marginBottom: 10,
    marginTop:10,
    fontWeight:"bold"
  },
  rating: {
    textAlign: "right",
    fontSize: 18,
  },
 Signup:{
  // height:"100%",
  justifyContent: 'center',
  alignItems:"center",
  textAlign: "center",
  },
  SignupView:{
    // marginTop:10,
    width: '80%',
        borderRadius: 20,
        elevation: 12,
        shadowColor: 'grey',
        overflow: 'hidden',
        backgroundColor: 'white',
        marginVertical: 15,
  },
  SignupInput:{
    padding: 8,
        paddingHorizontal: 20,
        fontSize: 15,
  },
  Button:{
    backgroundColor: '#07ABF1',
    //     // width: '80%',
        borderRadius: 20,
        padding: 12,
        paddingHorizontal: 40,
        marginVertical: 15,
        alignItems: 'center',
  }
});
