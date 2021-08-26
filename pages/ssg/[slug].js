import Head from 'next/head'
import Link from 'next/link'

import Clock from '../../components/Clock.js'

// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export async function getStaticPaths () {
  // NOTE: `process.env` variables, file system and other modules are avaiable on data fetching methods.
  // NOTE: on SSG, `getStaticPaths` is a good place to consume your file system or database to generate paths to be generated.
  return {
    paths: [
      { params: { slug: 'lorem-ipsum' } },
      { params: { slug: 'foobar' } }
    ],
    fallback: false// NOTE: using fallback false here is what makes next.js similar to hugo, gatsby, jekyll and others.
  }
}

// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export async function getStaticProps (context) {
  // NOTE: on SSG, `getStaticProps` may fetch file data, database records or call external APIs to populate content.
  // IMPORTANT: DO NOT use `fetch()` to call an internal API.
  return {
    props: { // <PageComponent {...attributes} />{children}</PageComponent>
      now: Date.now(),
      slug: context.params.slug
    }
  }
}

function SsgPage (props) {
  // NOTE: also, on SSG, data fetching for hydration happens here.
  const dttm = new Date(props.now)
  return (
    <main>
      <Head>
        <title>SSG Page</title>
      </Head>
      <h1>SSG Page</h1>
      <p>
        Hi! I am a <code>Static Site Generated</code> Page born in <mark><time dateTime={dttm.toISOString()}>{dttm.toLocaleString()}</time></mark>, but it&apos;s <mark><Clock /></mark> now.<br />
        and my slug is: <code>{props.slug}</code>. Feel free to visit my siblings <Link href='/ssg/foobar'><a>foobar</a></Link> and <Link href='/ssg/undefined'><a>undefined</a></Link> to understand more about <code>SSG</code> pages.
      </p>
    </main>
  )
}

export default SsgPage
