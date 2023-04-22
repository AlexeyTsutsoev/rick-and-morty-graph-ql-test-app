import * as React from "react";

import { Skeleton, SkeletonItem } from "../../../shared/ui/components/organisms";
import { scaleHeight, scaleWidth } from "../../../shared/ui/theme";

const skeletonEpisodes = Array(10).fill(0);

export const DetailsSkeleton: React.FC = () => {
  return (
    <Skeleton>
      <SkeletonItem paddingHorizontal={scaleWidth(20)} paddingTop={scaleHeight(10)}>
        <SkeletonItem flexDirection="row" alignItems="center" marginBottom={scaleHeight(20)}>
          <SkeletonItem
            borderRadius={50}
            marginRight={scaleWidth(20)}
            height={scaleHeight(80)}
            width={scaleHeight(80)}
          />

          <SkeletonItem width={scaleWidth(150)} height={scaleHeight(28)} />
          <SkeletonItem />
        </SkeletonItem>

        <SkeletonItem width={scaleWidth(200)} height={scaleHeight(24)} marginBottom={scaleHeight(10)} />

        <SkeletonItem width={scaleWidth(200)} height={scaleHeight(24)} marginBottom={scaleHeight(10)} />

        <SkeletonItem width="100%" height={1} marginBottom={scaleHeight(10)} />

        {skeletonEpisodes.map((_, index) => {
          return (
            <SkeletonItem key={index.toString()} width="100%" height={scaleHeight(50)} marginBottom={scaleHeight(5)} />
          );
        })}
      </SkeletonItem>
    </Skeleton>
  );
};
