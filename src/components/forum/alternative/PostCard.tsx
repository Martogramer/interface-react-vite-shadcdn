import React from "react";

interface Post {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  content: string;
  body?: string;
}

interface PostCardProps extends Post {
  onSelect: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  date,
  imageUrl,
  content,
  onSelect,
}) => {
  return (
    <article key={id} className="flex bg-white transition hover:shadow-xl">
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          dateTime={date}
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span>{date.split("-")[0]}</span>
          <span className="w-px flex-1 bg-gray-900/10"></span>
          <span>{`${new Date(date).toLocaleString("default", {
            month: "short",
          })} ${date.split("-")[2]}`}</span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56">
        <img
          alt=""
          src={imageUrl}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 className="font-bold uppercase text-gray-900">{title}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
            {content}
          </p>
        </div>
        <div className="sm:flex sm:items-end sm:justify-end">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSelect(id);
            }}
            className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
          >
            Read Blog
          </a>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
