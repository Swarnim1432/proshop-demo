import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';


const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchProducts = async ()=>{
      const {data} = await axios.get('/api/products');
      setProducts(data);
    }
    fetchProducts();
  },[]);

  return (
    <>
    <h1>Latest product</h1>
    <Row>
        {products.map((product)=>(
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}></Product>
            </Col>
        ))}
    </Row>
    </>
  )
}

export default HomeScreen