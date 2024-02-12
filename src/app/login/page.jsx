"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <>
      <section className="">
        <div className="lg:grid lg:min-h-[80vh] lg:grid-cols-12">
          <section className="relative flex items-end bg-gray-950 lg:col-span-5 lg:h-full xl:col-span-6">
            <Image
              alt="Night"
              src="/images/food.png"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
              fill
            />

            <div className="hidden lg:relative lg:block text-white lg:p-12">
              <h2 className="mt-6 text-2xl font-bold  sm:text-3xl md:text-4xl">
                Welcome to Squid
              </h2>

              <p className="mt-4 leading-relaxed /90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <h1 className="mt-2 login-heading dark:text-white text-white text-2xl font-bold sm:text-3xl md:text-4xl">
                  Welcome to Squid
                </h1>

                <p className="mt-4 leading-relaxed login-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>
              <div className="auth-links flex flex-col gap-5">
                <button
                  onClick={() => signIn("google")}
                  className="flex border-2 border-primary items-center justify-center gap-4 rounded-md py-2.5"
                >
                  <Image src="/images/google.png" width={20} height={20} />
                  Login With Google
                </button>
                <button className="border-2 border-primary flex items-center justify-center gap-4 rounded-md py-2.5">
                  <Image src="/images/github.png" width={20} height={20} />
                  Login With Github
                </button>
                <button className="border-2 border-primary flex items-center justify-center gap-4 rounded-md py-2.5">
                  <Image src="/images/facebook.png" width={20} height={20} />
                  Login With Facebook
                </button>
              </div>

              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="h-5 w-5 rounded-md py-2.5 outline-none focus-within:border-2 focus-within:border-primary px-3"
                    />

                    <span className="text-sm ">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <p className="text-sm ">
                    By creating an account, you agree to our
                    <a href="#" className=" underline">
                      {" "}
                      terms and conditions{" "}
                    </a>
                    and
                    <a href="#" className=" underline">
                      privacy policy
                    </a>
                    .
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-primary bg-primary text-white px-12 py-3 text-sm font-medium  transition hover:bg-transparent hover:text-black dark:hover:text-white focus:outline-none focus:ring active:text-blue-500">
                    Create an account
                  </button>

                  <p className="mt-4 text-sm  sm:mt-0">
                    Already have an account?
                    <a href="#" className=" underline">
                      Log in
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
