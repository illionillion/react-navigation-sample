import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => setCount((prev) => prev + 1)}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};
