import Head from 'next/head'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{"SeePay | Home Page" || title}</title>
        <meta name='description' content='FinTech Sass Modern Landing Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </>
  )
}

export default Layout
