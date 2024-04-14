import { createClient } from 'microcms-js-sdk';
import { BlogType, Category, GalleryType } from './_libs/microcms';

// if (!process.env.MICROCMS_API_KEY) {
//   throw new Error('API_KEYが設定されていません。');
// }

export const client = createClient({
  serviceDomain: 'pas874vg75',
  apiKey: 'RcBLJUn2LFXDHBwsvt8pZMFd4S0gN9nSEKVH',
});

export const getRandomGallery = async (): Promise<GalleryType | null> => {
  try {
    const res = await client.get({ endpoint: 'galleries', queries: { limit: 100 } });
    if (res.contents.length > 0) {
      const randomIndex = Math.floor(Math.random() * res.contents.length);
      return res.contents[randomIndex];
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchAllBlogs = async (): Promise<BlogType[] | null> => {
  try {
    const res = await client.getList({
      endpoint: 'blogs',
      queries: { limit: 100 },
      customRequestInit: {
        next: {
          revalidate: 3600,
        },
      },
    });
    if (res.contents.length > 0) {
      return res.contents;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchBlog = async (id: string): Promise<BlogType | null> => {
  try {
    const res = await client.get({ endpoint: 'blogs', contentId: id });

    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
