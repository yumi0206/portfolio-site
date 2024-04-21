import axios from 'axios';
import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk';
import { notFound } from 'next/navigation';

//ギャラリーの型定義
export type GalleryType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  image: MicroCMSImage;
  caption: string;
  category: Category;
};

export type AlbumSelector = {};

// カテゴリーの型定義
export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

// ニュースの型定義
export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: Category;
};

// メタ情報の型定義
export type Meta = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: MicroCMSImage;
  canonical?: string;
};

export type Article = News & MicroCMSContentId & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// カテゴリーの一覧を取得
export const getCategoryList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Category>({
      endpoint: 'categories',
      queries,
    })
    .catch(notFound);

  return listData;
};

// カテゴリーの詳細を取得
export const getCategoryDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<Category>({
      endpoint: 'categories',
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};

// メタ情報を取得
export const getMeta = async (queries?: MicroCMSQueries) => {
  const data = await client
    .getObject<Meta>({
      endpoint: 'meta',
      queries,
    })
    .catch(() => null);

  return data;
};

type Thumbnail = {
  url: string;
  height: number;
  width: number;
};

export type BlogType = {
  id: string;
  title: string;
  content: string;
  thumbnail: Thumbnail;
  category?: Category;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
