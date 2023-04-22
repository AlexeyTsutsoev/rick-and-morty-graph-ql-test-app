import * as React from "react";
import {
  Animated,
  GestureResponderEvent,
  Pressable as PressableBase,
  PressableProps,
  StyleProp,
  ViewStyle,
} from "react-native";

interface AnimatedPressableProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
}

const Pressable = Animated.createAnimatedComponent(PressableBase);

/**
 * Simple decorator for Pressable component from React-Native.
 * For reuse in App
 * use base Animated API from React-Native, because reanimated doesn't stable for 0.65 version
 */
export const AnimatedPressable: React.FC<AnimatedPressableProps> = ({
  onPressIn,
  onPressOut,
  children,
  style,
  ...rest
}) => {
  const pressed = React.useRef(new Animated.Value(0)).current;

  const onPressInDecorator = React.useCallback(
    (event: GestureResponderEvent) => {
      Animated.timing(pressed, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();

      if (onPressIn) {
        onPressIn(event);
      }
    },
    [pressed, onPressIn],
  );

  const onPressOutDecorator = React.useCallback(
    (event: GestureResponderEvent) => {
      Animated.timing(pressed, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();

      if (onPressOut) {
        onPressOut(event);
      }
    },
    [pressed, onPressOut],
  );

  const animatedStyles = React.useMemo(() => {
    return {
      transform: [
        {
          scale: pressed.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.98],
          }),
        },
      ],
      opacity: pressed.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.6],
      }),
    };
  }, [pressed]);

  return (
    <Pressable
      onPressIn={onPressInDecorator}
      onPressOut={onPressOutDecorator}
      {...rest}
      style={[animatedStyles, style]}>
      {children}
    </Pressable>
  );
};
