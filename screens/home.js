import React from "react";
import { StyleSheet, View, ScrollView, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function home() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Button title="Go to Job" onPress={() => navigation.navigate("Job")} />
      {/* Component1 */}
      {/* Component2 */}
      {/* Component3 */}
      {/* Component4 */}
      {/* Component5 */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
