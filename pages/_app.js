import { ProductProvider } from '../store/productContext';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
        <Component {...pageProps} />
    </ProductProvider>
  );
}

export default MyApp
