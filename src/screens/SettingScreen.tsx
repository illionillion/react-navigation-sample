import { RouteProp } from "@react-navigation/native";
import { View, Text } from "react-native";
import React, { FC } from 'react';


interface UserProps {
  route: RouteProp<any, any>;
}
export const SettingScreen:FC<UserProps> = ({ route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>設定画面</Text>
    </View>
  );
};
