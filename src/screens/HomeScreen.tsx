import { NavigationProp } from "@react-navigation/native";
import { View, Text } from "react-native";
import React from 'react';

interface HomeProps {
  navigation: NavigationProp<any, any>;
}
export const HomeScreen = ({ navigation }: HomeProps) => {
  return (
    <View>
      <Text>ホーム画面</Text>
      {/* <Button
        title="ユーザ"
        onPress={() => navigation.navigate("User", { userId: 2 })}
      /> */}
    </View>
  );
};
