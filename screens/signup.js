import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { GlobalStyle } from "../global";
export default function Signup() {
  return (
    <View>
      <View style={GlobalStyle.Signup}>
        <Text style={{ fontSize: 25, marginTop: 100, fontWeight: "bold" }}>
          Welcome
        </Text>
        <Text style={{ fontSize: 20, marginBottom: 40, fontWeight: "bold" }}>
          Create an account
        </Text>
        <View style={GlobalStyle.SignupView}>
          <TextInput style={GlobalStyle.SignupInput} placeholder="UserName*" />
        </View>
        <View style={GlobalStyle.SignupView}>
          <TextInput style={GlobalStyle.SignupInput} placeholder="Email*" />
        </View>
        <View style={GlobalStyle.SignupView}>
          <TextInput style={GlobalStyle.SignupInput} placeholder="Password*" />
        </View>
        <Text
          style={{
            alignSelf: "flex-end",
            marginRight: 40,
            marginVertical: 15,
            color: "#07ABF1",
          }}
        >
          Forgot Password ?
        </Text>
        <TouchableOpacity style={GlobalStyle.Button}>
                <Text style={{ color: 'white', fontSize: 17, }}>Signup </Text>
            </TouchableOpacity>

            <View style={{marginVertical: 10, flexDirection:'row', marginTop: 20}}>

                <Text>You have Already account </Text>
                <Text style={{ color: '#07ABF1' }}>Login</Text>

            </View>
      </View>
    </View>
  );
}
