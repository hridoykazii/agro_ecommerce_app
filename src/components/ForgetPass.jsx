import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
const ForgetPass = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#3a5340",
          alignItems: "center",
          justifyContent: "center",
          height: 70,
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: "space-between", backgroundColor: "#fff",padding:10}}>
        <Ionicons name="chevron-back-sharp" size={30} color="#3a5340" onPress={() => navigation.navigate("Home")} />
        <Text style={{ color: "#3a5340", fontSize: 22 }}>AKKOR</Text>
        <Text style={{ color: "#1575E3", fontSize: 22 }}></Text>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          justifyContent: "center",
          flex: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 380
          }}
        >
          <Text style={{ color: "#3a5340", marginVertical: 10, fontSize: 22 }}>Forgot Your Password?</Text>
          <Text style={{ marginVertical: 10 }}>Enter Your Register mobile number to reset your Password</Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
              borderRadius: 10,
              marginBottom: 10,
              marginTop: 10,
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
              width: '100%', // Take up 100% width
              alignItems: 'center' // Center content horizontally
            }}
            onPress={() => {
              // Handle button press
            }}
          >
            <Text style={{ color: '#fff' }}>RESET YOUR PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ForgetPass