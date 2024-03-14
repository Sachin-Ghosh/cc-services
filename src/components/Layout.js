// Layout.js
import Head from 'next/head'
import NavbarComponent from './Navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>IT Services Provider</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComponent />
      <main className="container mx-auto">{children}</main>
    </div>
  )
}

export default Layout
