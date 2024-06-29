import { Album } from '@/types';
import { albumsService } from '@/services/albums';
import { Card } from '@/components/ui/card';
import { MusicalNoteIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default async function Albums() {
  const albums: Album[] = await albumsService.getAlbums();
  return (
    <main className="py-20 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold text-center mt-10">Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 max-w-6xl">
        {albums.map((album) => (
          <Card
            key={album.id}
            className="p-5 border rounded-lg shadow flex items-center hover:scale-105 transition duration-300"
          >
            <MusicalNoteIcon className="h-6 w-6 text-blue-500 mr-4" />
            <Link
              href={`/albums/${album.id}`}
              className="text-xl font-semibold underline"
            >
              {album.title}
            </Link>
          </Card>
        ))}
      </div>
    </main>
  );
}
