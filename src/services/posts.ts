export const postsService = {
  getPosts: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
  },

  getPostById: async (postId: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return response.json();
  },

  getCommentsFromPost: async (postId: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    return response.json();
  },
};
