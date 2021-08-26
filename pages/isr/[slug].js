import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Clock from '../../components/Clock.js'
import { sleeper } from '../../helpers.js'

// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export async function getStaticPaths () {
  // NOTE: `process.env` variables, file system and other modules are avaiable on data fetching methods.
  // NOTE: on ISR, `getStaticPaths` is a good place to consume your BI platform to select relevant paths to be generated. The list doesn't need to be exaustive.
  return {
    paths: [
      { params: { slug: 'lorem-ipsum' } },
      { params: { slug: 'foobar' } }
    ],
    fallback: true// or blocking (true is good for UX, blocking is good for SEO)
  }
}

// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export async function getStaticProps (context) {
  // NOTE: on ISR, `getStaticProps` may fetch file data, database records or call external APIs to populate content.
  // IMPORTANT: DO NOT use `fetch()` to call an internal API.
  await sleeper(5)()
  return {
    props: { // <PageComponent {...attributes} />{children}</PageComponent>
      now: Date.now(),
      slug: context.params.slug
    },
    revalidate: 10// in seconds. IMPORTANT: this is the trigger to regenerate the static version.
  }
}

function IsrPage (props) {
  const router = useRouter()

  // NOTE: with `fallback: true`, you can optimize TTFB and UX returning a loading interface here.
  if (router.isFallback) return (
    <main>
      <Head>
        <title>ISR Page</title>
      </Head>
      <h1>ISR Page</h1>
      <p>Please wait, I&apos;m being generated on the server.</p>
    </main>
  )

  // NOTE: and after that, go fetch data for hydration.
  const dttm = new Date(props.now)
  return (
    <main>
      <Head>
        <title>ISR Page</title>
      </Head>
      <h1>Isr Page</h1>
      Hi! I am a <code>Incrementally Static Regenerated</code> Page born in <mark><time dateTime={dttm.toISOString()}>{dttm.toLocaleString()}</time></mark>, but it&apos;s <mark><Clock /></mark> now.<br />
      and my slug is: <code>{props.slug}</code>. Feel free to visit my siblings <Link href='/isr/foobar'><a>foobar</a></Link> and <Link href='/isr/undefined'><a>undefined</a></Link> to understand more about <code>ISR</code> pages.
    </main>
  )
}

export default IsrPage
