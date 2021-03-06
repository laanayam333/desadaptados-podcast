export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'The main site url. Used to create canonical url'
    },

    // // {
    // //   name: 'frontpage',
    // //   type: 'reference',
    // //   description: 'Choose page to be the frontpage',
    // //   to: { type: 'page' }
    // // },
    // // {
    // //   title: 'Site language',
    // //   description:
    // //     'Should be a valid bcp47 language code like en, en-US, no or nb-NO',
    // //   name: 'lang',
    // //   type: 'string',
    // //   validation: (Rule) =>
    // //     Rule.custom((lang) =>
    // //       bcp47.parse(lang) ? true : 'Please use a valid bcp47 code'
    // //     )
    // // },
    {
      title: 'Brand logo',
      description:
        'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true
          }
        }
      ]
    }
    // // {
    // //   title: 'Main navigation',
    // //   name: 'mainNavigation',
    // //   description: 'Select pages for the top menu',
    // //   validation: (Rule) => [
    // //     Rule.max(5).warning('Are you sure you want more than 5 items?'),
    // //     Rule.unique().error('You have duplicate menu items')
    // //   ],
    // //   type: 'array',
    // //   of: [
    // //     {
    // //       type: 'reference',
    // //       to: [{ type: 'route' }]
    // //     }
    // //   ]
    // // },
    // // {
    // //   title: 'Footer navigation items',
    // //   name: 'footerNavigation',
    // //   type: 'array',
    // //   validation: (Rule) => [
    // //     Rule.max(10).warning('Are you sure you want more than 10 items?'),
    // //     Rule.unique().error('You have duplicate menu items')
    // //   ],
    // //   fieldset: 'footer',
    // //   of: [
    // //     {
    // //       type: 'reference',
    // //       to: [{ type: 'route' }]
    // //     }
    // //   ]
    // // },
    // // {
    // //   name: 'footerText',
    // //   type: 'simplePortableText',
    // //   fieldset: 'footer'
    // // }
  ]
};
