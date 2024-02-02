import Image from "next/image";
import Link from "next/link";
import { GrSend } from "react-icons/gr";

const Comments = () => {
  const status = "authenticated";
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
        <div className="comment">
          <div className="flex items-center gap-4 mt-[3rem]">
            <Image
              className="rounded-full"
              src="/images/p1.jpeg"
              width={35}
              height={35}
            />
            <div className="flex flex-col">
              <p className="font-medium">William Randolph</p>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                12 January 2024
              </span>
            </div>
          </div>
          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            laborum, ut minima animi molestiae dicta numquam deleniti optio,
            tempora iure beatae voluptas harum repellat et doloremque error
            maiores quaerat laudantium.
          </p>
        </div>
        <div className="comment">
          <div className="flex items-center gap-4 mt-[3rem]">
            <Image
              className="rounded-full"
              src="/images/p1.jpeg"
              width={35}
              height={35}
            />
            <div className="flex flex-col">
              <p className="font-medium">William Randolph</p>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                12 January 2024
              </span>
            </div>
          </div>
          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            laborum, ut minima animi molestiae dicta numquam deleniti optio,
            tempora iure beatae voluptas harum repellat et doloremque error
            maiores quaerat laudantium.
          </p>
        </div>
        <div className="comment">
          <div className="flex items-center gap-4 mt-[3rem]">
            <Image
              className="rounded-full"
              src="/images/p1.jpeg"
              width={35}
              height={35}
            />
            <div className="flex flex-col">
              <p className="font-medium">William Randolph</p>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                12 January 2024
              </span>
            </div>
          </div>
          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            laborum, ut minima animi molestiae dicta numquam deleniti optio,
            tempora iure beatae voluptas harum repellat et doloremque error
            maiores quaerat laudantium.
          </p>
        </div>
      </div>
    </>
  );
};

export default Comments;
