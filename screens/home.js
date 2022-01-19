import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Button,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import avatar from "../assets/avatar.png";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function home() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* <Button title="Go to Job" onPress={() => navigation.navigate("Job")} /> */}
      {/* Component1 */}
      <View style={styles.component1}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={avatar}
            style={{ width: 45, height: 45, borderRadius: 25 }}
          />
        </View>
        <View
          style={{
            flexGrow: 1,
            height: 50,
            paddingHorizontal: 10,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 14, color: "#000" }}>Hello,</Text>
          <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>
            Jeremy
          </Text>
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="search" size={24} color="black" />
        </View>
      </View>
      {/* Component2 */}
      <View style={styles.component2}>
        <View
          style={{
            width: 100,
            height: 40,
            borderRadius: 25,
            borderWidth: 1,
            margin: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            borderColor: "grey",
          }}
        >
          <Text>Writter</Text>
          <Ionicons name="close" size={20} color="black" />
        </View>
        <View
          style={{
            width: 100,
            height: 40,
            borderRadius: 25,
            borderWidth: 1,
            margin: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            borderColor: "grey",
          }}
        >
          <Text>Editor</Text>
          <Ionicons name="close" size={20} color="black" />
        </View>
        <View
          style={{
            width: 100,
            height: 40,
            borderRadius: 25,
            borderWidth: 1,
            margin: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            borderColor: "grey",
          }}
        >
          <Text>Manager</Text>
          <Ionicons name="close" size={20} color="black" />
        </View>
        <View
          style={{
            width: 100,
            height: 40,
            borderRadius: 25,
            borderWidth: 1,
            margin: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            borderColor: "grey",
          }}
        >
          <Text>Producer</Text>
          <Ionicons name="close" size={20} color="black" />
        </View>
        <View
          style={{
            width: 100,
            height: 40,
            borderRadius: 25,
            borderWidth: 2,
            margin: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            borderColor: "black",
          }}
        >
          <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>
            Add more
          </Text>
        </View>
      </View>
      {/* Component3 */}
      <View style={styles.component3}>
        <View
          style={{
            width: "100%",
            height: 150,
            borderRadius: 15,
            padding: 15,
            justifyContent: "space-around",
            backgroundColor: "#f7ff9e",
          }}
        >
          <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>
            Find your best matches
          </Text>
          <Text style={{ fontSize: 14, color: "#757575", marginTop: 10 }}>
            Get quickly matched with only the
          </Text>
          <Text style={{ fontSize: 14, color: "#757575", marginBottom: 10 }}>
            most qualified candidates
          </Text>
          <View
            style={{
              width: "70%",
              height: 50,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                width: 100,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#000",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, color: "#fff", fontWeight: "bold" }}>
                Find
              </Text>
            </View>
            <View
              style={{
                width: 100,
                height: 40,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "#000",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>
                Skip
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* Component4 */}
      <View style={styles.component4}>
        <View
          style={{
            width: "100%",
            height: 50,
            paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>
            Writter
          </Text>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </View>
      </View>
      {/* Component5 */}
      <View style={styles.component5}>
        <View
          style={{
            width: 150,
            height: 175,
            borderRadius: 10,
            marginRight: 10,
            padding: 15,
            justifyContent: "space-around",
            backgroundColor: "#e5eeff",
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
              backgroundColor: "#387eff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="star" size={24} color="white" />
          </View>
          <View>
            <Text style={{ fontSize: 14, color: "#000" }}>Editor</Text>
            <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>
              $124k<Text>/year</Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 150,
            height: 175,
            borderRadius: 10,
            marginRight: 10,
            padding: 15,
            justifyContent: "space-around",
            backgroundColor: "#e5eeff",
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
              backgroundColor: "#387eff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="bookmarks" size={24} color="white" />
          </View>
          <View>
            <Text style={{ fontSize: 14, color: "#000" }}>Writter</Text>
            <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>
              $124k<Text>/year</Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 150,
            height: 175,
            borderRadius: 10,
            marginRight: 10,
            padding: 15,
            justifyContent: "space-around",
            backgroundColor: "#e5eeff",
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
              backgroundColor: "#387eff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="search" size={20} color="white" />
          </View>
          <View>
            <Text style={{ fontSize: 14, color: "#000" }}>Editor</Text>
            <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>
              $124k<Text>/year</Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  component1: {
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  component2: {
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
  },
  component3: {
    width: "95%",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  component4: {
    width: "95%",
    alignSelf: "center",
    marginTop: 15,
  },
  component5: {
    width: "95%",
    height: 200,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 15,
  },
});
