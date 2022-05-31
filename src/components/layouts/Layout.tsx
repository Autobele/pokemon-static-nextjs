import Head from 'next/head'
import Navbar from '../ui/Navbar'

interface LayoutProps {  
  children: React.ReactNode,
  title?: string
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || 'Pókemon App'}</title>
      </Head>
      <Navbar/>
      <main style={{
        padding: '0 20px'
      }}>
        {children}
      </main>
    </>
  )
}

export default Layout