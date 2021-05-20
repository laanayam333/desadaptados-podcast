import { HiOutlineBookOpen } from 'react-icons/hi';

export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  icon: HiOutlineBookOpen,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },

    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },

    {
      name: 'year',
      title: 'Year',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
        calendarTodayLabel: 'Today'
      }
    }
  ],

  preview: {
    select: {
      title: 'title'
    }
  }
};
