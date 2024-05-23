import type { Post, User } from '@/types';
import { postsService } from '@/services/posts';
import { usersService } from '@/services/users';
import Link from 'next/link';

export default async function Posts() {
  const posts: Post[] = await postsService.getPosts();
  const users: User[] = await usersService.getUsers();

  return (
    <main className="py-20 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold text-center mt-10">Posts</h1>
      <ul className="w-2/3">
        {posts.map((post) => {
          const user = users.find((user) => user.id === post.userId);
          return (
            <li key={post.id} className="py-4 border-b">
              <Link
                href={`/posts/${post.id}`}
                className="text-xl font-semibold hover:underline"
              >
                {post.title}
              </Link>
              <p>{post.body}</p>
              {user && (
                <div className="mt-4 text-sm text-gray-600">
                  <p>
                    <strong>Author:</strong> {user.name} ({user.username})
                  </p>
                  <p>
                    <strong>Email:</strong>{' '}
                    <a
                      href={`mailto:${user.email}`}
                      className="text-blue-500 underline"
                    >
                      {user.email}
                    </a>
                  </p>
                  <p>
                    <strong>Website:</strong>{' '}
                    <a
                      href={`http://${user.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {user.website}
                    </a>
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
