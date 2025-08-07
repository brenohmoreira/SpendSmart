import type { Metadata } from "next"
import { ToastContainer } from "react-toastify"
import { Inter } from 'next/font/google'
import "react-toastify/dist/ReactToastify.css"
import "./globals.css"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', 
});

export const metadata: Metadata = {
  title: "SpendSmart"
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} min-h-screen`}>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          pauseOnFocusLoss
          theme="light"
        />
      </body>
    </html>
  );
}
