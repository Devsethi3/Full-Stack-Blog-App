import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="mt-5">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-2xl font-extrabold">NEWDAY</div>

              <p className="mt-4 max-w-xs">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                non cupiditate quae nam molestias.
              </p>

              <ul className="mt-8 flex gap-6">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>
                    <FaInstagram className="text-xl" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>

                    <FaTwitter className="text-xl" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    <span className="sr-only">GitHub</span>

                    <FaGithub className="text-xl" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    <span className="sr-only">Dribbble</span>

                    <FaDribbble className="text-xl" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-gray-900">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {" "}
                      1on1 Coaching{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {" "}
                      Company Review{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {" "}
                      Accounts Review{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {" "}
                      HR Consulting{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {" "}
                      SEO Optimisation{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {" "}
                      Meet the Team{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {" "}
                      Accounts Review{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Helpful Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {" "}
                      Contact{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {" "}
                      FAQs{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {" "}
                      Live Chat{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Legal</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {" "}
                      Accessibility{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {" "}
                      Returns Policy{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {" "}
                      Refund Policy{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {" "}
                      Hiring Statistics{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm">
              &copy; 2022. Company Name. All rights reserved.
            </p>
            <div className="flex items-center gap-8 text-sm">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
