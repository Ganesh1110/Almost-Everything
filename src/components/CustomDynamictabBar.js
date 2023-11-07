import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Animated,
} from "react-native";
import { Colors, DIM } from "../utilities/Constants";
import { GlobalStyles } from "../utilities/GlobalStyles";

const DynamicTabHeader = ({ tabs, activeTab, onTabChange }) => {
  const [scrollX] = useState(new Animated.Value(0));
  const flatListRef = useRef(null);

  const handleTabChange = (index) => {
    flatListRef.current.scrollToIndex({ index: index, animated: true });
    onTabChange(index);
  };

  const renderTabItem = ({ item, index }) => {
    const scale = scrollX.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [1, 1.2, 1],
      extrapolate: "clamp",
    });

    return (
      <TouchableOpacity
        onPress={() => handleTabChange(index)}
        style={{
          paddingVertical: 10,
        }}
      >
        <Animated.View
          style={{
            flexDirection: "row",
            alignItems: "center",
            transform: [{ scale }],
          }}
        >
          {item.image !== null && (
            <Image
              source={item.image}
              style={[
                GlobalStyles.iconSize,
                {
                  tintColor:
                    activeTab === index ? Colors.CuriousBlue : Colors.Martini,
                  marginRight: DIM.deviceWidth * 0.025,
                },
              ]}
            />
          )}
          <Text
            style={{
              color: activeTab === index ? Colors.CuriousBlue : Colors.Martini,
              fontWeight: "700",
              fontSize: DIM.deviceFont * 16,
            }}
          >
            {item.title}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      ref={flatListRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      data={tabs}
      inverted={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderTabItem}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
    />
  );
};

export default DynamicTabHeader;
