import { HiUser } from 'react-icons/hi';

export default {
  name: 'host',
  type: 'document',
  title: 'Host',
  icon: HiUser,
  fields: [
    {
      name: 'firstName',
      type: 'string',
      title: 'First Name'
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last Name'
    }
  ],
  preview: {
    select: {
      title: 'lastName',
      subtitle: 'firstName'
    }
  }
};
