import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Product() {
  return (
    <View>
      <Text>product</Text>
      <Button title="Go to cart" onPress={() => router.navigate("/order")} />
    </View>
  );
}
