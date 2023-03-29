import Head from 'next/head'
import { useMemo } from 'react'

import Clock from '../../components/Clock.js'

function SsrPage (props) {
  const dttm = useMemo(() => new Date(props.now), [props.now])
  return (
    <main>
      <Head>
        <title>SSR Page</title>
      </Head>
      <h1>SSR Page</h1>
      <p>
        Hi! I am a <code>Server Side Rendered</code> Page born in{' '}
        <mark>
          <time dateTime={dttm.toISOString()}>{dttm.toLocaleString()}</time>
        </mark>
        , but it&apos;s{' '}
        <mark>
          <Clock />
        </mark>{' '}
        now.
        <br />
        and my slug is: <code>{props.slug}</code>. You can change the{' '}
        <code>any-slug</code> fragment in the address bar to see my content
        changing. Also, don&apos;t forget to inspect the initial source code.
      </p>
    </main>
  )
}

export default SsrPage

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps (context) {
  // NOTE: on SSR, data fetching happens here, because `process.env` variables, file system and other modules are avaiable inside this function.
  return {
    props: {
      // <PageComponent {...attributes} />{children}</PageComponent>
      now: Date.now(),
      slug: context.query.slug
    }
  }
}
