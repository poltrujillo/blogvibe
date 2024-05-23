export const usersService = {
  getUsers: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  },
};
