import * as React from "react";
import { StyleSheet, View } from "react-native";

import { scaleHeight, scaleWidth } from "../../theme";
import { Typography } from "../atoms";
import { Button } from "../molecules";

interface ErrorStateProps {
  /**
   * message for showing
   * default value -> `Something went wrong, please reload data.`
   */
  message?: string;
  /**
   * text for button
   * default value -> `Update`
   */
  buttonTitle?: string;
  /**
   * action for reloading data
   */
  onRefetch: () => void;
  isRefreshing?: boolean;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  message = "Something went wrong, please reload data.",
  buttonTitle = "Update",
  isRefreshing,
  onRefetch,
}) => {
  return (
    <View style={styles.container}>
      <Typography style={styles.text} variant="headingLarge" color="negative">
        {message}
      </Typography>

      <Button onPress={onRefetch} loading={isRefreshing} color="negative">
        {buttonTitle}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scaleWidth(10),
  },

  text: {
    marginBottom: scaleHeight(10),
    textAlign: "center",
  },
});
