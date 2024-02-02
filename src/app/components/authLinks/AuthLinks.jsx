import Link from "next/link";

const AuthLinks = () => {
  const status = "authenticated";
  return (
    <>
      <div className="sm:flex sm:gap-4">
        {status === "authenticated" ? (
          <Link
            className="rounded-md bg-primary px-5 py-2.5 font-semibold text-gray-100 shadow"
            href="/login"
          >
            Login
          </Link>
        ) : (
          <div className="flex items-center gap-[6rem]">
            <Link href="/write" className="rounded-md bg-primary px-5 py-2.5 font-semibold text-gray-200 shadow flex items-center"> <span className=" text-xl mr-2">+</span>Add Posts</Link>
            <span className="border-2 rounded-md cursor-pointer border-primary px-5 py-2 font-medium text-black shadow">Logout</span>
          </div>
        )}
      </div>
    </>
  );
};

export default AuthLinks;
