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
  
  const LoginPage = () => {
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
            <Text>Loginpage</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default LoginPage;
  