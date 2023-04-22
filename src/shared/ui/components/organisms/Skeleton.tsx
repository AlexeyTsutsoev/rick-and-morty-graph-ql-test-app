import * as React from "react";
import { ComponentProps } from "react";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import { getColor } from "../../theme";

type Props = ComponentProps<typeof SkeletonPlaceholder>;

export const Skeleton = ({ children, ...rest }: Props) => {
  return (
    <SkeletonPlaceholder borderRadius={6} highlightColor={getColor("accent")} {...rest}>
      {children}
    </SkeletonPlaceholder>
  );
};

export const SkeletonItem = SkeletonPlaceholder.Item;
