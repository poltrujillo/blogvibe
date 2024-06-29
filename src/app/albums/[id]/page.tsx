import { albumsService } from '@/services/albums';

export default async function DetailedAlbum() {
  const photos = await albumsService.getAlbumsPhotos();
  // Add the album's photos:
}
