import "./globals.css";
export const metadata = {
  title: "Chat App",
  description: "Real-time chat application using Next Js",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
