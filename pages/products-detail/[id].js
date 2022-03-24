import { useRouter } from "next/router";
import { useContext, useEffect, useState, useCallback } from "react";
import ProductContext from "../../store/productContext";

const ProductsDetail = () => {
  const { productData } = useContext(ProductContext);
  const [selectedProduct, setSelectedProduct] = useState();
  const [selectedOptionValues, setSelectedOptionValues] = useState([]);
  const [selectedVariants, setSelectedVariants] = useState([]);
  const router = useRouter();
  const id = router.query.id;

  const filterVariants = (dataArr, selectedOptionItem) => {
    const variants = dataArr.variants
      .map((item) => {
        const selectedValue = dataArr.options[0].values[selectedOptionItem[0]];
        if (item.option1 === selectedValue) {
          return item;
        }
      })
      .filter((item) => item);
    setSelectedVariants(variants);
  };

  const getData = useCallback(() => {
    const data = productData.find((item) => item.id === +id);
    setSelectedProduct(data);
    const selectedOptionValues = [];
    data.options.forEach(() => {
      selectedOptionValues.push(0);
    });

    setSelectedOptionValues(selectedOptionValues);
    filterVariants(data, selectedOptionValues);
  }, [id, productData]);

  const selectOptionValue = (valueIndex, optionIndex) => {
    const optionValues = selectedOptionValues.map((item, index) => {
      if (index === optionIndex) {
        item = valueIndex;
      }
      return item;
    });
    filterVariants(selectedProduct, optionValues);
    setSelectedOptionValues(optionValues);
  };

  useEffect(() => {
    getData();
  }, [getData]);
  
  return (
    <div className="product-detail container">
      <div className="row alert alert-dark">
        {selectedProduct && (
          <>
            <div className="col-4 d-flex">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={selectedProduct.images[0].src}
                      className="d-block w-100"
                      alt="product-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div
                className="d-flex justify-content-between alert alert-light mb-2"
                role="alert"
              >
                <p className="text-uppercase fs-3"> {selectedProduct.title}</p>
                <p className="text-uppercase fs-3">
                  {" "}
                  {`${selectedVariants[0].price} $`}
                </p>
              </div>
              <div
                className="alert alert-light d-flex flex-column"
                role="alert"
              >
                {selectedProduct.options.map((item, optionIndex) => (
                  <>
                    <p className="fs-2">{item.name}</p>
                    {item.values.map((value, index) => {
                      const customOptions =
                        (optionIndex > 0 &&
                          selectedVariants.some(
                            (variant) => variant.option2 === value
                          )) ||
                        value;
                      return (
                        customOptions && (
                          <button
                            style={{
                              color:
                                index !== selectedOptionValues[optionIndex]
                                  ? "white"
                                  : "#43ffff",
                            }}
                            onClick={() =>
                              selectOptionValue(index, optionIndex)
                            }
                            className="btn btn-dark mb-2"
                          >
                            {value}
                          </button>
                        )
                      );
                    })}
                  </>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsDetail;
