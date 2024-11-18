import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Cart() {
  return (
    <View>
      <Text>cart</Text>
      <Button title="Go back" onPress={router.back} />
    </View>
  );
}
