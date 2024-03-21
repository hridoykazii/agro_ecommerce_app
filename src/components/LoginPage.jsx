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

const LoginPage = ({navigation}) => {
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
            height: 260,
            width: 380,
            shadowColor: "#8BAD92",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.25,
            shadowRadius: 1,
            elevation: 6,
          }}
        >
          <View
            style={{
              width: 320,
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
              borderRadius: 10,
              marginBottom: 10,
              backgroundColor: "#F9F6F5"
            }}
          >
            <Ionicons name="call-sharp" size={30} color="#3a5340" style={{ marginHorizontal: 10 }} />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Mobile Number"
              keyboardType="numeric" // Set keyboard type to numeric
              maxLength={15} // Set maximum length of the input
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#3a5340',
              borderRadius: 5,
              marginVertical: 10,
              padding: 10,
              width: '85%', // Take up 100% width
              alignItems: 'center' // Center content horizontally
            }}
            onPress={() => {
              // Handle button press
            }}
          >
            <Text style={{ color: '#fff' }}>NEXT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 320,
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
              justifyContent: "center",
              marginTop: 10
            }}
          >
            <Text style={{ marginLeft: 15, marginRight: 25, color: "#575757" }} onPress={() => navigation.navigate("ForgetPass")}>
              Forgot Your Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
