import Head from 'next/head'
import Image from 'next/image'

import backgroundImg from '../../../public/img/code.jpg'

const L = '500px';

const styles = {
  container: {
    minWidth: '100px',
    maxWidth: '500px',
    aspectRatio: '1 / 1',
    borderRadius: '50%',
    border: '10px solid green',
    position: 'relative'
  },
  image: {
    borderRadius: '50%',
  },
}

const Rounded = () => {
  return (
    <>
      <Head>
        <title>Rounded</title>
        <meta name="description" content="Images" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div style={styles.container}>
          <Image style={styles.image} src={backgroundImg} alt="background" layout="fill" objectFit="cover" />
        </div>
      </main>
    </>
  );
}

export default Rounded;
