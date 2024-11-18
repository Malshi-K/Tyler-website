"use client";

import Image from "next/image";
import React, { useState } from "react";

const BlogImage = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc("/api/placeholder/400/300")}
      width={400}
      height={300}
    />
  );
};

export default BlogImage;
