import { postsService } from '@/services/posts';
import type { Comment, Post, User } from '@/types';
import { Card } from '@/components/ui/card';
import { usersService } from '@/services/users';
import Link from 'next/link';

export default async function DetailedPost({
  params,
}: {
  params: { id: string };
}) {
  const comments: Comment[] = await postsService.getCommentsFromPost(
    Number(params.id)
  );

  const post: Post = await postsService.getPostById(Number(params.id));
  const user: User = await usersService.getUserById(post.userId);

  return (
    <div className="p-5 max-w-3xl mx-auto py-20 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-5 mt-10">Post</h1>
      <Card className="mb-5 p-5 border rounded shadow">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="mb-2">{post.body}</p>
        <p className="mb-2">
          Author: {user.name} ({user.username})
        </p>
        <p className="mb-2">
          Email:{' '}
          <a href={`mailto:${user.email}`} className="text-blue-500 underline">
            {user.email}
          </a>
        </p>
        <p>
          Website:{' '}
          <Link
            href={`http://${user.website}`}
            className="text-blue-500 underline"
          >
            {user.website}
          </Link>
        </p>
      </Card>

      <h1 className="text-2xl font-bold my-5">Comments</h1>
      <ul>
        {comments.map((comment) => (
          <Card
            key={comment.id}
            className="mb-5 p-5 border rounded shadow hover:scale-105 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{comment.name}</h2>
            <p className="mb-2">{comment.body}</p>
            <p>
              <a
                href={`mailto:${comment.email}`}
                className="text-blue-500 underline"
              >
                {comment.email}
              </a>
            </p>
          </Card>
        ))}
      </ul>
    </div>
  );
}
