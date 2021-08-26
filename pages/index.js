import Head from 'next/head'

import Clock from '../components/Clock.js'

function IndexPage (props) {
  const dttm = new Date(Date.now())
  return (
    <main>
      <Head>
        <title>Index Page</title>
      </Head>
      <h1>Index Page</h1>
      <p>
        I am a simple static page born in <mark><time dateTime={dttm.toISOString()}>{dttm.toLocaleString()}</time></mark> but it&apos;s <mark><Clock /></mark> now.
      </p>
    </main>
  )
}

export default IndexPage
