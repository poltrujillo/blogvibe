export const usersService = {
  getUsers: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  },

  getUserById: async (userId: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return response.json();
  },
};
