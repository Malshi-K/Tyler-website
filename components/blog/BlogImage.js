'use client';

import React, { useState } from 'react';

const BlogImage = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc('/api/placeholder/400/300')}
    />
  );
};

export default BlogImage;