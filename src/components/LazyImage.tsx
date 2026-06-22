import { useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  aspect?: string;
  wrapperClassName?: string;
}

const LazyImage = ({
  src,
  alt,
  className,
  aspect,
  wrapperClassName,
  loading = "lazy",
  ...rest
}: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        aspect,
        wrapperClassName
      )}
    >
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 bg-[length:200%_100%] animate-[shimmer_1.6s_linear_infinite]"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...rest}
      />
    </div>
  );
};

export default LazyImage;