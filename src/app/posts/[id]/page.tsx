export default function DetailedPost({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Post {params.id}</h1>
    </div>
  );
}
