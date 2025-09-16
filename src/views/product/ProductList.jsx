// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import ProductCard from './ProductCard';

// const ProductList = () => {
//    const productData ={
//   "products": [
//     {
//       "id": 1,
//       "title": "Premium Coffee Blend",
//       "description": "High-quality arabica beans from Ethiopia with rich flavor and aroma.",
//       "totalqr": 150,
//       "totalusedqr": 85,
//       "image": "https://via.placeholder.com/180x120/6D4C41/FFFFFF?text=Coffee"
//     },
//     {
//       "id": 2,
//       "title": "Organic Tea Collection",
//       "description": "Assorted organic teas including green, black, and herbal varieties.",
//       "totalqr": 200,
//       "totalusedqr": 120,
//       "image": "https://via.placeholder.com/180x120/4CAF50/FFFFFF?text=Tea"
//     },
//     {
//       "id": 3,
//       "title": "Wireless Headphones",
//       "description": "Noise-cancelling wireless headphones with 30-hour battery life.",
//       "totalqr": 75,
//       "totalusedqr": 60,
//       "image": "https://via.placeholder.com/180x120/2196F3/FFFFFF?text=Headphones"
//     },
//     {
//       "id": 4,
//       "title": "Fitness Tracker",
//       "description": "Smart fitness tracker with heart rate monitor and sleep tracking.",
//       "totalqr": 180,
//       "totalusedqr": 145,
//       "image": "https://via.placeholder.com/180x120/FF5722/FFFFFF?text=Fitness"
//     },
//     {
//       "id": 5,
//       "title": "Gourmet Chocolate Box",
//       "description": "Assorted premium chocolates with different flavors and fillings.",
//       "totalqr": 90,
//       "totalusedqr": 65,
//       "image": "https://via.placeholder.com/180x120/795548/FFFFFF?text=Chocolate"
//     },
//     {
//       "id": 6,
//       "title": "Smartphone Case",
//       "description": "Durable smartphone case with drop protection and sleek design.",
//       "totalqr": 300,
//       "totalusedqr": 250,
//       "image": "https://via.placeholder.com/180x120/9E9E9E/FFFFFF?text=Case"
//     },
//     {
//       "id": 7,
//       "title": "Yoga Mat",
//       "description": "Eco-friendly yoga mat with non-slip surface and carrying strap.",
//       "totalqr": 120,
//       "totalusedqr": 95,
//       "image": "https://via.placeholder.com/180x120/8BC34A/FFFFFF?text=Yoga+Mat"
//     },
//     {
//       "id": 8,
//       "title": "Desk Lamp",
//       "description": "LED desk lamp with adjustable brightness and USB charging port.",
//       "totalqr": 60,
//       "totalusedqr": 45,
//       "image": "https://via.placeholder.com/180x120/FFC107/000000?text=Desk+Lamp"
//     }
//   ]
// }

//   return (
//     <Container className="my-4">
//       <h1 className="text-center mb-4">Our Products</h1>
//       <Row className='g-8'>
//         {productData?.products.map((product) => (
//           <Col key={product.id} xs={12} sm={6} md={4} lg={4} className="mb-4 d-flex">
//             <ProductCard
//               title={product.title}
//               description={product.description}
//               totalqr={product.totalqr}
//               totalusedqr={product.totalusedqr}
//             />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default ProductList;

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const token = Cookies.get('token');

      if (!token) {
        // Redirect to login if token is missing
        navigate('/auth/signin-1', { replace: true });
        return;
      }

      try {
        const response = await fetch('https://starx-backend.onrender.com/api/product', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 401) {
          // Unauthorized, token invalid
          Cookies.remove('token');
          navigate('/auth/signin-1', { replace: true });
          return;
        }

        const data = await response.json();

        if (response.ok) {
          setProducts(data.products || []);
        } else {
          setError(data.message || 'Failed to fetch products');
        }
      } catch (err) {
        setError('Something went wrong. Try again!');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [navigate]);

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <Spinner animation="border" variant="primary" role="status" style={{ width: '4rem', height: '4rem' }} />
          <p className="mt-3 fw-bold text-primary">Loading products...</p>
        </div>
      </div>
    );
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Our Products</h1>
      <Row className="g-8">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={4} className="mb-4 d-flex">
            <ProductCard
              imageurl={product.imageUrl}
              title={product.name}
              description={product.description}
              totalqr={product.qrCount}
              totalusedqr={product.qrUsed}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
