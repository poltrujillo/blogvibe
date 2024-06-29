export const albumsService = {
  getAlbums: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    return await response.json();
  },

  getAlbumsPhotos: async (albumId: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    );
    return await response.json();
  },
};
