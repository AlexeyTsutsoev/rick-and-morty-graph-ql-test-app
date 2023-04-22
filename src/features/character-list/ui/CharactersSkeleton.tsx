import * as React from "react";

import { Skeleton, SkeletonItem } from "../../../shared/ui/components/organisms";
import { scaleHeight } from "../../../shared/ui/theme";

const array = Array(10).fill(0);

export const CharactersSkeleton: React.FC = () => {
  return (
    <Skeleton>
      <SkeletonItem>
        {array.map((_, index) => {
          return (
            <SkeletonItem key={index.toString()} width="100%" marginBottom={scaleHeight(10)} height={scaleHeight(56)} />
          );
        })}
      </SkeletonItem>
    </Skeleton>
  );
};
