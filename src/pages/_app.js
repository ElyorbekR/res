
import AppLayout from '@/layout/AppLayout';
import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core';


export default function App({ Component, pageProps }) {
  return (<>
    <MantineProvider withGlobalStyle withNormalizeCss>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </MantineProvider>
  </>
  )
}
