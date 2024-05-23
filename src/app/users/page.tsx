import { usersService } from '@/services/users';
import type { User } from '@/types';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default async function Users() {
  const users: User[] = await usersService.getUsers();
  return (
    <main className="py-20 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold text-center mt-10">Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 max-w-6xl">
        {users.map((user) => (
          <Card
            key={user.id}
            className="p-5 border rounded-lg shadow hover:scale-105 transition duration-300"
          >
            <Link
              href={`/users/${user.id}`}
              className="text-xl font-semibold mb-2 underline"
            >
              {user.name}
            </Link>
            <p className="text-gray-600 mb-2">@{user.username}</p>
            <p className="text-blue-500 mb-2">
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </p>
            <div className="mb-2">
              <h3 className="text-lg font-semibold">Address</h3>
              <p>
                {user.address.street}, {user.address.suite}
              </p>
              <p>
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
            <div className="mb-2">
              <h3 className="text-lg font-semibold">Company</h3>
              <p className="font-bold">{user.company.name}</p>
              <p>{user.company.catchPhrase}</p>
            </div>
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
          </Card>
        ))}
      </div>
    </main>
  );
}
