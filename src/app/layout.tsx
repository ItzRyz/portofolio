import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { NavLinkProps } from "@/components/ui/nav.ui";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeButton } from "@/components/ui/theme.ui";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
const ibm_plex_mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], style: ["normal"] });

export const metadata: Metadata = {
  title: "Alyvazen | Salman Al Farizi",
  description: "Muhammad Salman Al Farizi\nFullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const NavLinkData: NavLinkProps[] = [
    { url: "about", title: "About" },
    { url: "education", title: "Education" },
    { url: "skill", title: "Skill" },
    { url: "contact", title: "Contact" },
    { url: "", title: "Blog" },
  ]
  return (
    <html lang="en">
      <body className={ibm_plex_mono.className + ' flex flex-col max-w-screen-lg mx-auto'}>
        <ThemeProvider enableSystem disableTransitionOnChange attribute="class" defaultTheme="system">
          <Navbar NavLinkData={NavLinkData} />
          <div className="flex justify-center w-full">
            {children}
            <ThemeButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
