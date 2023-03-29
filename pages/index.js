import Head from 'next/head'
import { useState, useEffect } from 'react'

import Clock from '../components/Clock.js'

function IndexPage (props) {
  const [dttm, setDTTM] = useState(null)
  useEffect(() => {
    setDTTM(new Date(Date.now()))
  }, [])

  if (!dttm) return null

  return (
    <main>
      <Head>
        <title>Index Page</title>
      </Head>
      <h1>Index Page</h1>
      <p>
        I am a simple static page born in{' '}
        <mark>
          <time dateTime={dttm.toISOString()}>{dttm.toLocaleString()}</time>
        </mark>{' '}
        but it&apos;s{' '}
        <mark>
          <Clock />
        </mark>{' '}
        now.
      </p>
    </main>
  )
}

export default IndexPage
