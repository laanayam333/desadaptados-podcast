import { HiOutlineFilm } from 'react-icons/hi';

export default {
  name: 'film',
  title: 'Film',
  type: 'document',
  icon: HiOutlineFilm,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },

    {
      name: 'director',
      title: 'Director',
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
