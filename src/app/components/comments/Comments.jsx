"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { GrSend } from "react-icons/gr";
import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};

const Comments = ({ postSlug }) => {
  const status = useSession();
  const { data, isLoading } = useSWR(
    `https://localhot:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  return (
    <>
      <h1 className="mt-[4rem] text-2xl font-bold mb-4">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex items-center gap-8">
          <textarea
            className="w-full px-3 py-2 dark:bg-[#e1ffef1a] resize-none outline-none bg-[#e1ffef] rounded-md"
            placeholder="Write a comment..."
          ></textarea>
          <button className="bg-[#228851] flex items-center gap-3 rounded-md py-3 px-8 text-white">
            <span>Send</span>
            <GrSend />
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write to comment</Link>
      )}
      <div>
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div key={item._id} className="comment">
                <div className="flex items-center gap-4 mt-[3rem]">
                  {item.user.image && (
                    <Image
                      className="rounded-full"
                      src={item.user.image}
                      width={35}
                      height={35}
                    />
                  )}
                  <div className="flex flex-col">
                    <p className="font-medium">{item.user.name}</p>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item.createdAt}
                    </span>
                  </div>
                </div>
                <p className="mt-4">{item.desc}</p>
              </div>
            ))}
      </div>
    </>
  );
};

export default Comments;
