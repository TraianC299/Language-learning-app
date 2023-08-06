import Footer from '@/components/home/Footer'
import './globals.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='dark:bg-slate-800' style={{background: "#f5f5f5"}} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='dark:bg-slate-800'>{children}</body>
      <Footer/>
    </html>
  )
}
