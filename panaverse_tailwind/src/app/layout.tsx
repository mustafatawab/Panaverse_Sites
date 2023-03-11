import Footer from "@/views/footer/Footer";
import Header from "@/views/navBar/navBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*s
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <Header></Header>
        {children}
        <Footer></Footer>

      </body>
    </html>
  );
}
