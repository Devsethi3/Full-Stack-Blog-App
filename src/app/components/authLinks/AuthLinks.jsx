import Link from "next/link";

const AuthLinks = () => {
  return (
    <>
      <div className="sm:flex sm:gap-4">
        <Link
          className="rounded-md bg-teal-600 px-5 py-2.5 font-medium text-white shadow"
          href="/"
        >
          Login
        </Link> 
      </div>
    </>
  );
};

export default AuthLinks;
