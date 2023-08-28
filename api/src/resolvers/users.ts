import usersData from '../data/users.json';

export const rootValue = {
  user: ({ _id }: {_id: string}) => {
    return usersData.find(user => user._id === _id);
  },
  list: ({ name }: { name?: string }) => {
    if (!name) {
      return usersData;
    }
    
    const regex = new RegExp(name.split(' ').join('.*'), 'i');
    return usersData.filter(user => regex.test(user.name));
  }
};
