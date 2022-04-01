import Head from 'next/head'
import Image from 'next/image'

import backgroundImg from '../../public/img/code.jpg'

const styles = {
  imgContainer: {
    maxWidth: 400,
    height: 400
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Images</title>
        <meta name="description" content="Images" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Intrinsic</h1>
        <div style={styles.imgContainer}>
          <Image src={backgroundImg} alt="background" layout="intrinsic" width={400} height={400} />
        </div>
        <h1>Fixed</h1>
        <div style={styles.imgContainer}>
          <Image src={backgroundImg} alt="background" layout="fixed" width={400} height={400} />
        </div>
        <h1>Fill contain (needs position relative)</h1>
        <div style={{ ...styles.imgContainer, position: 'relative' }}>
          <Image src={backgroundImg} alt="background" layout="fill" width={400} height={400} objectFit="contain" />
        </div>
        <h1>Fill cover (needs position relative)</h1>
        <div style={{ ...styles.imgContainer, position: 'relative' }}>
          <Image src={backgroundImg} alt="background" layout="fill" width={400} height={400} objectFit="cover" />
        </div>
        <h1>Fill none (needs position relative)</h1>
        <div style={{ ...styles.imgContainer, position: 'relative' }}>
          <Image src={backgroundImg} alt="background" layout="fill" width={400} height={400} objectFit="none" />
        </div>
        <h1>Responsive contain</h1>
        <div style={styles.imgContainer}>
          <Image src={backgroundImg} alt="background" layout="responsive" width={400} height={400} objectFit="contain" />
        </div>
        <h1>Responsive cover</h1>
        <div style={styles.imgContainer}>
          <Image src={backgroundImg} alt="background" layout="responsive" width={400} height={400} objectFit="cover" />
        </div>
        <h1>Responsive none</h1>
        <div style={styles.imgContainer}>
          <Image src={backgroundImg} alt="background" layout="responsive" width={400} height={400} objectFit="none" />
        </div>
      </main>
    </>
  )
}
