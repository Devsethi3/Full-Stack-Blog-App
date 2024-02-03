import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AuthProviders from "./providers/AuthProviders";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Next JS Blog App",
  description: "Welcome to my Next JS Project | Blog App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <AuthProviders>
        <body className={dmSans.className}>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </AuthProviders>
    </html>
  );
}
