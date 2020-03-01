import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Icon } from "react-native-elements";

import { Actions } from "react-native-router-flux";
import * as Font from 'expo-font';
import {LinearGradient} from "expo-linear-gradient";

export default class Show extends React.Component {
  logout = () => {
   Actions.login();
  };

  render() {
      return (
        <View style={styles.container}>
          {
            <View
              style={styles.backgroundColor}
            >
              <TouchableOpacity onPress={this.logout}>
              <LinearGradient
              colors={["#6420c9", "#9f34eb"]}
              style={styles.logout}
              start={[0.0, 0.5]} 
              end={[1.0, 0.5]} 
              locations={[0.0, 1.0]}>
                <Text style={[styles.logText, { color: "#efefef" }]}>Log Out</Text>
              </LinearGradient>
              </TouchableOpacity>
              <ScrollView style={styles.cardset}>
                <View style={styles.card}>
                    <Text style={styles.title}>Suspicious Activity</Text>
                    <Text style={styles.description}>I saw some suspicious teenagers walking around yesterday. I was wondering if any of you guys knew anything about this. Please let me know if you know anything because I am afraid that they will vandalize my property or cause a commotion.</Text>
                    <Text style={styles.time}>9:15 | February 28, 2020</Text>
                    <Text style={styles.neighbor}>Anshul Kashyap</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>Suspicious Activity</Text>
                    <Text style={styles.description}>I saw some suspicious teenagers walking around yesterday. I was wondering if any of you guys knew anything about this. Please let me know if you know anything because I am afraid that they will vandalize my property or cause a commotion.</Text>
                    <Text style={styles.time}>9:15 | February 28, 2020</Text>
                    <Text style={styles.neighbor}>Anshul Kashyap</Text>
                </View>
              </ScrollView>
            </View>
          }
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  logout: {
      margin: 30,
      width: "25%",
      padding: 20,
      paddingTop: 15,
      paddingBottom: 15,
      marginTop: 40
  },
  cardset: {

  },
  card: {
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    elevation: 2,
    width: "80%",
    padding: 30,
    margin: 35,
    backgroundColor: "rgba(209,32,245, 0.0)",
  },
  title: {
    fontSize: 25
  },
  description: {
    color: "grey",
    lineHeight: 20,
    marginTop: 10
  },
  time: {
    color: "grey",
    fontSize: 12,
    marginTop: 20
  },
  neighbor: {
    color: "grey",
    fontSize: 12,
    marginTop: 10
  }
});
