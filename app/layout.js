import './globals.css'


export const metadata = {
  title: 'Illiya-Coding Admin Panel',
  description: 'This is a nextjs 13 AdminPanel created by Illiya-coding.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
