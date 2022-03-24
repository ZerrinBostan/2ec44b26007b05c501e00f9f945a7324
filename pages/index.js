import Head from "next/head";
import { useContext, useState, useCallback, useEffect } from "react";
import getProducts from "../client";
import Banner from "../components/Banner";
import ProductList from "../components/List";
import ProductContext from "../store/productContext";

const itemsPerPage = 6;

const Home = () => {
  const { productData, setProductData } = useContext(ProductContext);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const fetchProducts = useCallback(async () => {
    const response = await getProducts();
    if (Array.isArray(response?.products)) {
      setProductData(response.products);
      setData(response.product);
    }
  }, [setProductData]);

  const pagination = useCallback(() => {
    if (!productData) return;
    const endOffset = itemOffset + itemsPerPage;
    setData(productData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(productData.length / itemsPerPage));
  }, [itemOffset, productData]);

  const searchProduct = (input) => {
    const filteredData = productData.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    setData(filteredData);
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productData.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts();
    setLoading(false);
  }, [fetchProducts]);

  useEffect(() => {
    pagination();
  }, [pagination]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Products data</p>;

  return (
    <div>
      <Head>
        <title>Product Panel</title>
        <meta name="description" content="Products Panel" />
        <link
          rel="icon"
          href="https://teknasyon.com/content/assets/img/favicon/favicon.ico"
        />
      </Head>
      <Banner onInput={searchProduct} />
        {data && <ProductList data={data} handlePageClick={handlePageClick} pageCount={pageCount} />}
    </div>
  );
};
export default Home;
