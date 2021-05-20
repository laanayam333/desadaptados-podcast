import { HiOutlineUser } from 'react-icons/hi';

export default {
  name: 'guest',
  title: 'Guest',
  type: 'document',
  icon: HiOutlineUser,
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
