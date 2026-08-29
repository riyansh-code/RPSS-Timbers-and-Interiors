import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.rpsstimbers.com/',
    },
    {
      url: 'https://www.rpsstimbers.com/about',
    },
    {
      url: 'https://www.rpsstimbers.com/products',
    },
    {
      url: 'https://www.rpsstimbers.com/how-we-work',
    },
    {
      url: 'https://www.rpsstimbers.com/contact',
    },
  ];
}
