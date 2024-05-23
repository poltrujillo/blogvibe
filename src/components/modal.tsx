/* eslint-disable react/no-unescaped-entities */
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './ui/dialog';
import { Comment } from '@/types';

interface CommentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  comments: Comment[];
  postTitle: string;
}

export default function CommentsModal({
  isOpen,
  onClose,
  comments,
  postTitle,
}: CommentsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Comments for "{postTitle}"</DialogTitle>
        <DialogDescription>
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id} className="py-2 border-b">
                  <p className="font-semibold">
                    {comment.name} ({comment.email})
                  </p>
                  <p>{comment.body}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments available.</p>
          )}
        </DialogDescription>
        <DialogClose className="mt-4">Close</DialogClose>
      </DialogContent>
    </Dialog>
  );
}
