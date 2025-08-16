import { type SchemaTypeDefinition } from 'sanity';
import { categoryType } from './categoryType';
import { blockContentType } from './blockContentType';
import { orderType } from './orderType';
import { productType } from './productType';
import { brandType } from './brandType';
import { blogType } from './blogType';
import { addressType } from './addressType';
import { blogCategoryType } from './blogCategoryType';
import { authorType } from './authorType';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    blockContentType,
    orderType,
    productType,
    brandType,
    blogCategoryType,
    blogType,
    addressType,
    authorType,
  ],
};
