import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import google from "../../assets/logo/googleSign.png";
import { TextInput, Button, useTheme, Provider as PaperProviders } from 'react-native-paper';

const GoogleLogin = () => {
    const [text, setText] = React.useState('');
    const theme = useTheme(); 
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
                    <Image source={google} style={{ width: 100, marginVertical:20 }} />
                    <View style={{ padding: 16, width: '100%' }}>
                        <TextInput
                            label="Email or Phone"
                            value={text}
                            onChangeText={text => setText(text)}
                            mode="outlined"
                            style={{ 
                                marginBottom: 16, 
                                width: '100%', 
                                borderColor: theme.colors.primary, 
                            }} 
                            theme={{
                                colors: {
                                    primary: '#1575E3' // Changing default border color
                                }
                            }}
                        />
                        <Text>Forgot email ?</Text>
                        <View style={{ marginVertical: 20 }}>
                            <Text>Not Your Computer? Use Guest mode to sign in privately</Text>
                            <Text style={{ color: "#1575E3", marginVertical: 10 }}>Lern more</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={{ color: "#1575E3"}}>Create account</Text>
                            <Button
                                mode="contained"
                                onPress={() => console.log('Pressed')}
                                style={{ backgroundColor: '#1575E3', borderRadius: 5 }}
                            >
                                Next
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default GoogleLogin;
