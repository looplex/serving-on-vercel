import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Clock from '../../components/Clock.js'

function CsrPage (props) {
  const router = useRouter()
  // NOTE: on CSR, data fetching happens here, using libraries like SWR or state management libraries actions.
  const [dttm] = useState(new Date())
  return (
    <main>
      <Head>
        <title>CSR Page</title>
      </Head>
      <h1>CSR Page</h1>
      <p>
        Hi! I am a <code>Client Side Rendered</code> Page born in{' '}
        <mark>
          <time dateTime={dttm.toISOString()}>{dttm.toLocaleString()}</time>
        </mark>
        , but it&apos;s{' '}
        <mark>
          <Clock />
        </mark>{' '}
        now.
        <br />
        and my slug is: <code>{router.query.slug}</code>. You can change the{' '}
        <code>any-slug</code> fragment in the address bar to see my content
        changing. Also, don&apos;t forget to inspect the initial source code.
      </p>
    </main>
  )
}

export default CsrPage
