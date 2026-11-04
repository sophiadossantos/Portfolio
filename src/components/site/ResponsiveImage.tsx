import type { ComponentProps } from "react";

import { imageMeta } from "@/assets/optimized/manifest";

type ResponsiveImageProps = ComponentProps<"img"> & {
  src: string;
  sizes: string;
  priority?: boolean;
};

export function ResponsiveImage({
  src,
  priority = false,
  loading,
  ...props
}: ResponsiveImageProps) {
  const meta = imageMeta[src];

  return (
    <img
      src={src}
      srcSet={meta?.srcSet}
      width={meta?.width}
      height={meta?.height}
      loading={priority ? "eager" : (loading ?? "lazy")}
      fetchPriority={priority ? "high" : undefined}
      {...props}
    />
  );
}
