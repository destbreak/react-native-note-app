import react from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "./src/components/customButton";
import CustomTextInput from "./src/components/customTextInput";

const App = () => (
  <View style={styles.container}>
    <CustomButton backgroundColor="#ddd" color="#39494f" text="Custom Button" width="100%" onPress={() => {}} />
    <CustomTextInput label="Custom Text" multiline numberOfLines={2} onChange={() => {}} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 40,
  },
});

export default App;
