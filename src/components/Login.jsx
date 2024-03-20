import {
    Button,
    Image,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import logo from "../../assets/logo/Akkor.png";
  import Zocial from "react-native-vector-icons/Zocial";
  import AntDesign from "react-native-vector-icons/AntDesign";
  import Ionicons from "react-native-vector-icons/Ionicons";
  
  const Login = () => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#3a5340",
            alignItems: "center",
            justifyContent: "center",
            height: 180,
          }}
        >
          <Image source={logo} style={{ width: 100, height: 180 }} />
        </View>
        <View
          style={{
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              height: 360,
              width: 380,
              shadowColor: "#000",
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.25,
              shadowRadius: 1,
              elevation: 6,
            }}
          >
            <TouchableOpacity
              style={{
                width: 310,
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                borderWidth: 1,
                borderColor: "#808080",
                borderRadius: 10,
                justifyContent: "center",
                marginBottom: 10,
                marginTop: 5
              }}
            >
              <Zocial name="call" size={30} color="#aeaeae" />
              <Text style={{ marginLeft: 15, color: "#575757" }}>Sign in with phone number</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 320,
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                borderWidth: 1,
                borderColor: "#808080",
                borderRadius: 10,
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <AntDesign name="google" size={30} color="#aeaeae" />
              <Text style={{ marginLeft: 15, marginRight: 40, color: "#575757" }}>Sign in with google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 320,
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                borderWidth: 1,
                borderColor: "#808080",
                borderRadius: 10,
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <Ionicons name="logo-facebook" size={30} color="#aeaeae" />
              <Text style={{ marginLeft: 15, marginRight: 25, color: "#575757" }}>Sign in with facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 320,
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                borderRadius: 10,
                justifyContent: "center",
                marginTop: 5,
                marginBottom: 10,
              }}
            >
              <Text style={{ marginLeft: 15, marginRight: 25, color: "#575757" }}>Login Or Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 320,
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <Text style={{ marginLeft: 15, marginRight: 25, color: "#575757" }}>Forgot Your Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Login;
  