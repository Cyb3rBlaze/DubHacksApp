import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Actions } from "react-native-router-flux";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: ""
    };
  }

  click = () => {
    Actions.show({});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>DeepNet</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={"#383838"}
          onChangeText={text => this.setState({ input1: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={"#383838"}
          onChangeText={text => this.setState({ input1: text })}
        />
        <TouchableOpacity style={styles.button} onPress={this.click}>
          <Text style={styles.buttonText}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    padding: 10,
    width: "70%",
    margin: 15,
    borderBottomWidth: 1,
    borderColor: "#474747",
    color: "#474747"
  },
  title: {
    fontSize: 40,
    color: "#474747",
    marginBottom: 40,
    marginTop: 0
  },
  button: {
    backgroundColor: "#efefef",
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 50
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute"
  }
});