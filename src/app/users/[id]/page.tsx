import { usersService } from '@/services/users';
import { Card } from '@/components/ui/card';
import { Album, Post, User } from '@/types';

export default async function DetailedUser({
  params,
}: {
  params: { id: number };
}) {
  const user: User = await usersService.getUserById(params.id);
  const albums: Album[] = await usersService.getUserAlbums(params.id);
  const posts: Post[] = await usersService.getUserPosts(params.id);
  return (
    <main className="py-20 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold text-center mt-10">User Profile</h1>
      <div className="bg-background shadow border rounded-lg p-10 w-full max-w-2xl">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
          <p className="text-gray-600 mb-2">@{user.username}</p>
          <p className="text-blue-500 mb-2">
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </p>
        </div>
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p>
            {user.address.street}, {user.address.suite}
          </p>
          <p>
            {user.address.city}, {user.address.zipcode}
          </p>
          <p className="text-gray-600">
            Geo: {user.address.geo.lat}, {user.address.geo.lng}
          </p>
        </div>
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-2">Company</h3>
          <p className="font-bold">{user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
          <p className="text-gray-600">{user.company.bs}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p className="mb-2">Phone: {user.phone}</p>
          <p>
            Website:{' '}
            <a
              href={`http://${user.website}`}
              className="text-blue-500 underline"
            >
              {user.website}
            </a>
          </p>
        </div>
      </div>

      <div className="bg-background shadow border rounded-lg p-10 w-full max-w-2xl mt-10">
        <h2 className="text-2xl font-semibold mb-5">Posts</h2>
        {posts.map((post) => (
          <Card key={post.id} className="mb-5 p-5 border rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>

      <div className="bg-background shadow border rounded-lg p-10 w-full max-w-2xl mt-10">
        <h2 className="text-2xl font-semibold mb-5">Albums</h2>
        {albums.map((album) => (
          <Card key={album.id} className="mb-5 p-5 border rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{album.title}</h3>
          </Card>
        ))}
      </div>
    </main>
  );
}
