import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// objects
import blockContent from './objects/blockContent';
import figure from './objects/figure';
import mailChimp from './objects/mailChimp';

// documents
import author from './documents/author';
import book from './documents/book';
import category from './documents/category';
import comment from './documents/comment';
import episode from './documents/episode';
import film from './documents/film';
import guest from './documents/guest';
import host from './documents/host';
import podcast from './documents/podcast';
import post from './documents/post';
import siteSettings from './documents/siteSettings';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    author,
    book,
    category,
    episode,
    film,
    guest,
    host,
    podcast,
    post,
    siteSettings,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    comment,
    figure,
    mailChimp
  ])
});
