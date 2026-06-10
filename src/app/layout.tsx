import "./style.css";

export const metadata = {
  title: "MKP Pixel Office",
  description: "Pixel office room layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
