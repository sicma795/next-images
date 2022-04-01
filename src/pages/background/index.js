import Head from 'next/head'
import Image from 'next/image'

import backgroundImg from '../../../public/img/code.jpg'

const styles = {
  header: {
    with: '100%',
    height: '100vh',
    position: 'relative'
  },
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'red',
  }
}

const Background = () => {
  return (
    <>
      <Head>
        <title>Images</title>
        <meta name="description" content="Images" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header style={styles.header}>
        <Image src={backgroundImg} alt="background" layout="fill" objectFit="cover" />
        <div style={styles.container}>
          <h1 style={styles.title}>This is the header title</h1>
        </div>
      </header>
      <main>
        <h1>My content here</h1>
      </main>
    </>
  );
}

export default Background;
