import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
