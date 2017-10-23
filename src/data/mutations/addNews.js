import {
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import NewsItemType from '../types/NewsItemType';
import { items } from '../queries/news';

const addNews = {
  type: NewsItemType,
  args: {
    title: { type: new NonNull(StringType) },
    link: { type: new NonNull(StringType) },
    author: { type: StringType },
    pubDate: { type: new NonNull(StringType) },
    description: { type: StringType },
  },
  resolve(args, context, info) {
    console.log('~~~~~~~~~~~~~~~~~~')
    console.log(context)
    items.push(context);
  },
};

export default addNews;
