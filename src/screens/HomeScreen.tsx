import { NavigationProp } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import React, { FC } from 'react';

interface HomeProps {
  navigation: NavigationProp<any, any>;
}
export const HomeScreen:FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ホーム画面</Text>
      <Button
        title="ユーザ"
        onPress={() => navigation.navigate("User", { userId: 2 })}
      />
    </View>
  );
};
