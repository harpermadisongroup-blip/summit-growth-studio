import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SkaiLogoProps {
  alt?: string;
  className?: string;
  src?: string;
  whiteThreshold?: number;
  variant?: "dark" | "white";
}

const SkaiLogo = ({
  alt = "Skai logo",
  className,
  src = "/logos/skai.png",
  whiteThreshold = 235,
  variant = "dark",
}: SkaiLogoProps) => {
  const [processedSrc, setProcessedSrc] = useState(src);

  useEffect(() => {
    let isMounted = true;
    const img = new Image();
    img.src = src;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const { data } = imageData;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        if (luminance >= whiteThreshold) {
          data[i + 3] = 0;
          continue;
        }

        const alphaScale = Math.max(0, Math.min(1, (whiteThreshold - luminance) / whiteThreshold));
        if (variant === "white") {
          data[i] = 255;
          data[i + 1] = 255;
          data[i + 2] = 255;
        } else {
          data[i] = 0;
          data[i + 1] = 0;
          data[i + 2] = 0;
        }
        data[i + 3] = Math.round(a * alphaScale);
      }

      ctx.putImageData(imageData, 0, 0);

      if (isMounted) {
        setProcessedSrc(canvas.toDataURL("image/png"));
      }
    };

    img.onerror = () => {
      if (isMounted) {
        setProcessedSrc(src);
      }
    };

    return () => {
      isMounted = false;
    };
  }, [src, whiteThreshold, variant]);

  return <img src={processedSrc} alt={alt} className={cn("w-auto", className)} decoding="async" />;
};

export default SkaiLogo;
