import Link from 'next/link'

import '../node_modules/mini.css/dist/mini-default.css'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <header className='sticky'>
        <Link href='/'><a className='logo'>next.js</a></Link>
        <Link href='/ssr/any-slug'><a className='button'>SSR</a></Link>
        <Link href='/csr/any-slug'><a className='button'>CSR</a></Link>
        <Link href='/ssg/lorem-ipsum'><a className='button'>SSG</a></Link>
        <Link href='/isg/lorem-ipsum'><a className='button'>ISG</a></Link>
        <Link href='/isr/another-non-existing-slug'><a className='button'>ISR</a></Link>
      </header>
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp
