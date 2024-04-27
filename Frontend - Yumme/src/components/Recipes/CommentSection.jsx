import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Comment from "./Comment";

import { useForm } from "react-hook-form";
import { useComments } from "@/api/comments";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { Fragment } from "react";

export default function CommentSection({ id, comments }) {
  const { register, handleSubmit, watch, reset } = useForm();
  const { toast } = useToast();

  const { addComment } = useComments();
  const queryClient = useQueryClient();

  const { mutate } = addComment();
  const onSubmit = (data) => {
    const recipe = {
      id: id,
      comment: data.comment,
    };

    mutate(recipe, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["recipe", id],
        });

        // Delete the values from the field
        reset();
      },
      onError: () => {
        toast({
          title: "Error!",
          description: " An error occurred while submitting your comment.",
          variant: "destructive",
        });
      },
    });
  };

  return (
    <div className="flex flex-col items-center w-full gap-8">
      <div className="space-y-4 w-full">
        <div className="space-y-2"></div>
        <div className="space-y-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row items-start gap-8 "
          >
            <div className="flex flex-col w-full gap-2">
              <Textarea
                {...register("comment", { required: true })}
                className=" w-full h-auto min-h-0 overflow-none resize-y text-base"
                placeholder="Leve a comment..."
                style={{ fieldSizing: "content" }}
              />

              <div className="w-full flex justify-between">
                <span className="text-gray-500">
                  {watch("comment")?.length || 0}/255
                </span>

                <Button
                  type="submit"
                  className="flex md:hidden"
                  size="lg"
                  disabled={
                    watch("comment") === "" ||
                    watch("comment") === undefined ||
                    watch("comment")?.length > 255
                  }
                >
                  Comment
                </Button>
              </div>
            </div>
            <Button
              type="submit"
              className="hidden md:flex"
              size="lg"
              disabled={
                watch("comment") === "" ||
                watch("comment") === undefined ||
                watch("comment")?.length > 255
              }
            >
              Comment
            </Button>
          </form>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-x-8 gap-y-4">
        {comments
          .slice()
          .reverse()
          .map((comment, index) => (
            <Fragment key={comment.id}>
              <Comment author={comment.author} comment={comment.comment} />

              {/* {index !== comments.length - 1 && <Separator />} */}
            </Fragment>
          ))}
      </div>
    </div>
  );
}
