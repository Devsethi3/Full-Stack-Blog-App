import Link from "next/link";
import { MdAddCircleOutline } from "react-icons/md";

const AuthLinks = () => {
  const status = "authenticated";
  return (
    <>
      <div className="sm:flex sm:gap-4">
        {status === "notauthenticated" ? (
          <Link
            className="rounded-md bg-primary px-5 py-2.5 font-semibold text-gray-100 shadow"
            href="/login"
          >
            Login
          </Link>
        ) : (
          <div className="flex items-center gap-[2rem]">
            <Link
              href="/write"
              className="rounded-md whitespace-nowrap bg-primary px-4 py-2.5  font-semibold text-gray-100 shadow flex items-center"
            >
              {" "}
              <span className="text-xl mr-2">
                <MdAddCircleOutline className="font-bold" />
              </span>
              Add Posts
            </Link>
            <span className="border-2 rounded-md cursor-pointer border-primary px-5 py-2 font-medium dark:text-white text-black shadow">
              Logout
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default AuthLinks;
