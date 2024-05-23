import { get } from 'http';

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

  getUserPosts: async (userId: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    return response.json();
  },

  getUserAlbums: async (userId: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    );
    return response.json();
  },
};
