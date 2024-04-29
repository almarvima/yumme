import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserCircle2 } from "lucide-react";

/**
 * Comment component - Each comment in the {CommentSection.jsx} component
 * @param {string} author - The author of the comment
 * @param {string} comment - The comment
 * @returns {JSX.Element} Comment component
 */
const Comment = ({ author, comment }) => {
  return (
    <div className="w-full bg-gray-50 rounded-lg p-6">
      <div className="flex flex-col items-start  ">
        <div className="flex gap-2 flex-col">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={""} alt="" />
              <AvatarFallback>
                <UserCircle2 className="size-8" strokeWidth={1.5} />
              </AvatarFallback>
            </Avatar>
            <h2 className="text-lg font-medium leading-none">
              {author.charAt(0).toUpperCase() + author.slice(1)}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground ">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
