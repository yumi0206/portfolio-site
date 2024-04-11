import { createClient } from 'microcms-js-sdk';
import { Category, GalleryType } from './_libs/microcms';

// if (!process.env.MICROCMS_API_KEY) {
//   throw new Error('API_KEYが設定されていません。');
// }

export const client = createClient({
  serviceDomain: 'pas874vg75',
  apiKey: 'RcBLJUn2LFXDHBwsvt8pZMFd4S0gN9nSEKVH',
});

export const fetchPicture = async () => {
  try {
    return await client.get<GalleryType[]>({ endpoint: 'galleries' });
  } catch (error) {
    console.error('Error fetching picture', error);
    throw error;
  }
};

export const fetchAlbum = async () => {
  try {
    return await client.get<Category[]>({ endpoint: 'album' });
  } catch (error) {
    console.error('Error fetching album', error);
    throw error;
  }
};

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
