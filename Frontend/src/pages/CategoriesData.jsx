import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const CategoriesData = () => {
  const { id } = useParams();
  console.log('Category ID:', id);

  const { cardData } = useContext(ShopContext);
  const [productData, setProductData] = useState([]);

  const fetchProductData = async () => {
    if (Array.isArray(cardData)) {
      cardData.forEach((item) => {
        if (item.id === id) {
          setProductData(item);
          console.log('Product Data:', item);
        }
      });
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [id, cardData]);

  return (
    <div>
      <h1>Product Details</h1>
      {productData ? (
        <div>
          <h2>{productData.title}</h2>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CategoriesData;
