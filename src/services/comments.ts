export const commentsService = {
  getComments: async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments'
    );
    return response.json();
  },
};
