import { Category, GalleryType } from '../_libs/microcms';
import { client } from '../client';
import GalleryComponent from '../_components/Gallery/GalleryComponent';

type GalleryResponse = {
  galleries: GalleryType[];
  categories: Category[];
};

const getData = async (): Promise<GalleryResponse> => {
  try {
    const galleries = await client.getList({
      endpoint: 'galleries',
      queries: { limit: 100 },
      customRequestInit: {
        cache: 'no-store',
    
      },
    });

    const categories = await client.get({ endpoint: 'categories', queries: { limit: 100 } });
    return {
      galleries: galleries.contents,
      categories: categories.contents,
    };
  } catch (error) {
    console.error(error);
    return {
      galleries: [],
      categories: [],
    };
  }
};

export default async function Gallery() {
  const result = await getData();
  const { galleries, categories } = result;

  return <GalleryComponent galleries={galleries} categories={categories} />;
}
