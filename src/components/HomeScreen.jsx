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
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  // const navigation = useNavigation();
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
            shadowColor: "#8BAD92",
            shadowOffset: { width: 0, height: 0 },
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
              marginTop: 5,
            }}
            onPress={() => navigation.navigate("LoginPage")}
          >
            <Zocial name="call" size={30} color="#aeaeae" />
            <Text style={{ marginLeft: 15, color: "#575757" }} >
              Sign in with phone number
            </Text>
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
            onPress={() => navigation.navigate("GoogleLogin")}
          >
            <AntDesign name="google" size={30} color="#aeaeae" />
            <Text style={{ marginLeft: 15, marginRight: 40, color: "#575757" }} >
              Sign in with google
            </Text>
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
            <Text style={{ marginLeft: 15, marginRight: 25, color: "#575757" }}>
              Sign in with facebook
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 320,
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Text style={{ marginLeft: 5, marginRight: 5, color: "#575757" }} onPress={() => navigation.navigate("LoginPage")}>Login</Text>
            <Text style={{ marginLeft: 5, marginRight: 5, color: "#575757" }}>Or</Text>
            <Text style={{ marginLeft: 5, marginRight: 5, color: "#575757" }} onPress={() => navigation.navigate("SignUp")}>Signup</Text>
          </View>
          
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
            <Text style={{ marginLeft: 15, marginRight: 25, color: "#575757" }} onPress={() => navigation.navigate("ForgetPass")}>
              Forgot Your Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
