import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const IssuersDetail = () => {
  const { issuersId } = useParams();
  const { issueSubMenu } = useContext(ShopContext);
  const [productData, setProductData] = useState([]);

  const fetchProductData = async () => {
    issueSubMenu.map((item, index) => {
      if (index === issuersId) {
        setProductData(item);
        console.log(item); // Log the matched item
      }
      return null; // To prevent React warnings
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [issuersId]);

  return (
    <div>
   
    </div>
  );
};

export default IssuersDetail;
