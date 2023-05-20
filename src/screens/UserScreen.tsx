import { RouteProp } from "@react-navigation/native";
import { View, Text } from "react-native";
interface UserProps {
  route: RouteProp<any, any>;
}
export const UserScreen = ({ route }: UserProps) => {
  return (
    <View>
      <Text>ユーザー画面</Text>
      <Text>id: {route?.params?.userId}</Text>
    </View>
  );
};
