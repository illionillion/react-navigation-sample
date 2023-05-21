import { NavigationProp, RouteProp } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import React, { FC } from "react";
import { Counter } from "../components/Counter";

interface HomeProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}
export const HomeScreen: FC<HomeProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ホーム画面</Text>
      <Button
        title="ユーザ"
        onPress={() => navigation.navigate("User", { userId: 2 })}
      />
      <Counter />
    </View>
  );
};
