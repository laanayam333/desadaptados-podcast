import S from '@sanity/desk-tool/structure-builder';
import { HiOutlineLocationMarker, HiOutlineCog } from 'react-icons/hi';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(HiOutlineCog)
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),

      S.listItem()
        .title('Podcast')
        .icon(HiOutlineLocationMarker)
        .child(S.document().schemaType('podcast').documentId('podcast')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['siteSettings', 'podcast', 'book', 'film'].includes(
            listItem.getId()
          )
      )
      // // S.listItem()
      // // .title('Site settings')
      // //   .child(
      // //     S.editor().schemaType('siteSettings').documentId('siteSettings')
      // //   ),
      // // // Add a visual divider (optional)
      // // S.divider(),
      // // // List out the rest of the document types, but filter out the config type
      // // ...S.documentTypeListItems().filter(
      // //   (listItem) => !['siteSettings'].includes(listItem.getId())
      // // )
    ]);
