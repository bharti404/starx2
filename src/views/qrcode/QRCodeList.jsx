// import { Table, Container, Row, Col ,Button ,Modal,Form } from 'react-bootstrap';
// import { useState } from 'react';

// const QRCodeList = () => {

//   const [showModal, setShowModal] = useState(false);

//   const [selectedProduct, setSelectedProduct] = useState('');
//   const [amount, setAmount] = useState('');
//   const [totalQr, setTotalQr] = useState('');

//   const handleShowModal = () => setShowModal(true);
//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedProduct('');
//     setAmount('');
//     setTotalQr('');
//   };

//    const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log('Submitted:', {
//       product: selectedProduct,
//       amount,
//       totalQr
//     });

//     handleCloseModal();
//   };
//   // Sample data
//   const products = [
//     {
//       name: 'Product 1',
//       qr10: { total: 20, used: 10, remain: 10 },
//       qr20: { total: 15, used: 5, remain: 10 },
//       qr30: { total: 25, used: 15, remain: 10 },
//       qr40: { total: 30, used: 10, remain: 20 },
//       qr50: { total: 40, used: 20, remain: 20 }
//     },
//     {
//       name: 'Product 2',
//       qr10: { total: 25, used: 15, remain: 10 },
//       qr20: { total: 20, used: 10, remain: 10 },
//       qr30: { total: 35, used: 20, remain: 15 },
//       qr40: { total: 40, used: 15, remain: 25 },
//       qr50: { total: 50, used: 30, remain: 20 }
//     },
//     {
//       name: 'Product 3',
//       qr10: { total: 30, used: 20, remain: 10 },
//       qr20: { total: 25, used: 15, remain: 10 },
//       qr30: { total: 40, used: 25, remain: 15 },
//       qr40: { total: 45, used: 20, remain: 25 },
//       qr50: { total: 55, used: 35, remain: 20 }
//     }
//   ];

//   const productsData = [
//   { id: 1, name: 'Product 1' },
//   { id: 2, name: 'Product 2' },
//   { id: 3, name: 'Product 3' },
//   { id: 4, name: 'Product 4' },
//   { id: 5, name: 'Product 5' },
//   { id: 6, name: 'Product 6' },
//   { id: 7, name: 'Product 7' },
//   { id: 8, name: 'Product 8' }
// ];

//   return (
//     <Container className="my-4">

//       <Row className="mb-4">
//         <Col>
//           <h2 className="text-primary">QR Code Management</h2>
//         </Col>
//         <Col className="text-end">
//           <Button variant="primary" onClick={handleShowModal}>
//             <i className="bi bi-plus-circle me-2"></i>Add QR Codes
//           </Button>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <div className="table-responsive">
//             <Table striped bordered hover className="shadow-sm">
//               <thead className="table-dark">
//                 <tr>
//                   <th style={{ width: '15%' }}>Product Name</th>
//                   <th className="text-center">QR Amount of 10</th>
//                   <th className="text-center">QR Amount of 20</th>
//                   <th className="text-center">QR Amount of 30</th>
//                   <th className="text-center">QR Amount of 40</th>
//                   <th className="text-center">QR Amount of 50</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map((product, index) => (
//                   <tr key={index}>
//                     <td className="fw-bold">{product.name}</td>

//                     {/* QR 10 */}
//                     <td className="text-center">
//                       <div className="d-flex flex-column gap-1">
//                         <span className="fw-bold text-dark">Total: {product.qr10.total}</span>
//                         <span className="text-muted">Used: {product.qr10.used}</span>
//                         <span className="text-primary fw-bold">Remain: {product.qr10.remain}</span>
//                       </div>
//                     </td>

//                     {/* QR 20 */}
//                     <td className="text-center">
//                       <div className="d-flex flex-column gap-1">
//                         <span className="fw-bold text-dark">Total: {product.qr20.total}</span>
//                         <span className="text-muted">Used: {product.qr20.used}</span>
//                         <span className="text-primary fw-bold">Remain: {product.qr20.remain}</span>
//                       </div>
//                     </td>

//                     {/* QR 30 */}
//                     <td className="text-center">
//                       <div className="d-flex flex-column gap-1">
//                         <span className="fw-bold text-dark">Total: {product.qr30.total}</span>
//                         <span className="text-muted">Used: {product.qr30.used}</span>
//                         <span className="text-primary fw-bold">Remain: {product.qr30.remain}</span>
//                       </div>
//                     </td>

//                     {/* QR 40 */}
//                     <td className="text-center">
//                       <div className="d-flex flex-column gap-1">
//                         <span className="fw-bold text-dark">Total: {product.qr40.total}</span>
//                         <span className="text-muted">Used: {product.qr40.used}</span>
//                         <span className="text-primary fw-bold">Remain: {product.qr40.remain}</span>
//                       </div>
//                     </td>

//                     {/* QR 50 */}
//                     <td className="text-center">
//                       <div className="d-flex flex-column gap-1">
//                         <span className="fw-bold text-dark">Total: {product.qr50.total}</span>
//                         <span className="text-muted">Used: {product.qr50.used}</span>
//                         <span className="text-primary fw-bold">Remain: {product.qr50.remain}</span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         </Col>
//       </Row>

//       <Modal show={showModal} onHide={handleCloseModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Add New QR Codes</Modal.Title>
//         </Modal.Header>
//         <Form onSubmit={handleSubmit}>
//           <Modal.Body>
//             <Form.Group className="mb-3">
//               <Form.Label>Select Product</Form.Label>
//               <Form.Select
//                 value={selectedProduct}
//                 onChange={(e) => setSelectedProduct(e.target.value)}
//                 required
//               >
//                 <option value="">Choose a product...</option>
//                 {productsData.map(product => (
//                   <option key={product.id} value={product.name}>
//                     {product.name}
//                   </option>
//                 ))}
//               </Form.Select>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>QR Code Amount</Form.Label>
//               <Form.Select
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 required
//               >
//                 <option value="">Select amount...</option>
//                 <option value="10">10</option>
//                 <option value="20">20</option>
//                 <option value="30">30</option>
//                 <option value="40">40</option>
//                 <option value="50">50</option>
//               </Form.Select>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Total Number of QR Codes</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={totalQr}
//                 onChange={(e) => setTotalQr(e.target.value)}
//                 min="1"
//                 placeholder="Enter total number of QR codes"
//                 required
//               />
//             </Form.Group>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseModal}>
//               Cancel
//             </Button>
//             <Button variant="primary" type="submit">
//               Add QR Codes
//             </Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>
//     </Container>
//   );
// };

// export default QRCodeList;

// import { Table, Container, Row, Col, Button, Modal, Form ,Spinner} from 'react-bootstrap';
// import { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';

// const initialProductsData = [
//   { id: 1, name: 'Product 1' },
//   { id: 2, name: 'Product 2' },
//   { id: 3, name: 'Product 3' },
//   { id: 4, name: 'Product 4' },
//   { id: 5, name: 'Product 5' },
//   { id: 6, name: 'Product 6' },
//   { id: 7, name: 'Product 7' },
//   { id: 8, name: 'Product 8' }
// ];

// const QRCodeList = () => {

//   const [productsData, setProductsData] = useState(initialProductsData);
//   const [selectedProduct, setSelectedProduct] = useState('');
//   const [amount, setAmount] = useState('');
//   const [totalQr, setTotalQr] = useState('');

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [btnLoading, setBtnLoading] = useState(false);
//   const [qrData, setQrData] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//       const fetchQr = async () => {
//         const token = Cookies.get('token');

//         if (!token) {
//           // Redirect to login if token is missing
//           navigate('/auth/signin-1', { replace: true });
//           return;
//         }
//         setLoading(true)

//         try {
//           const response = await fetch('https://starx-backend.onrender.com/api/qrcode/all', {
//             method: 'GET',
//             headers: {
//               'Content-Type': 'application/json',
//               Authorization: `Bearer ${token}`
//             }
//           });

//           if (response.status === 401) {
//             // Unauthorized, token invalid
//             Cookies.remove('token');
//             navigate('/auth/signin-1', { replace: true });
//             return;
//           }

//           const data = await response.json();

//           if (response.ok) {
//             setQrData(data)
//           } else {
//             setError(data.message || 'Failed to fetch products');
//           }
//         } catch (err) {
//           setError('Something went wrong. Try again!');
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchQr();
//     }, [navigate]);

//     const processQrData = () => {
//     const amounts = [10, 20, 30, 40, 50];
//     const result = {};

//     amounts.forEach(amount => {
//       result[`qr${amount}`] = {
//         total: 0,
//         used: 0,
//         remain: 0
//       };
//     });

//     qrData.forEach(item => {
//       const amount = item.amount;
//       const key = `qr${amount}`;

//       if (result[key]) {
//         result[key].total += 1;
//         if (item.status === 'used') {
//           result[key].used += 1;
//         } else {
//           result[key].remain += 1;
//         }
//       }
//     });

//     return result;
//   };

//   const qrStats = processQrData();

//   console.log(qrStats)

//   //eslint-disable-next-line react-hooks/exhaustive-deps
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const token = Cookies.get('token');

//       if (!token) {
//         // Redirect to login if token is missing
//         navigate('/auth/signin-1', { replace: true });
//         return;
//       }

//       try {
//         const response = await fetch('https://starx-backend.onrender.com/api/product', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`
//           }
//         });

//         if (response.status === 401) {
//           // Unauthorized, token invalid
//           Cookies.remove('token');
//           navigate('/auth/signin-1', { replace: true });
//           return;
//         }

//         const data = await response.json();

//         if (response.ok) {
//           // If API returns products, use them; otherwise keep fallback
//           setProductsData(data.products && data.products.length ? data.products : initialProductsData);
//         } else {
//           setError(data.message || 'Failed to fetch products');
//         }
//       } catch (err) {
//         setError('Something went wrong. Try again!');
//       } finally {
//         setLoading(false);
//       }
//     };

//     // eslint-disable-next-line react-hooks/exhaustive-deps

//     fetchProducts();
//   }, [navigate]); //<- ESLint says "missing dependency: initialProductsData"

//   const handleShowModal = () => setShowModal(true);
//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedProduct('');
//     setAmount('');
//     setTotalQr('');
//   };

//   // Submit to your POST API using fetch
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = Cookies.get('token');
//     if (!token) {
//       navigate('/auth/signin-1', { replace: true });
//       return;
//     }

//     // build payload as requested
//     const payload = {
//       amount: amount,
//       count: totalQr,
//       productId: selectedProduct
//     };
//     setBtnLoading(true)

//     try {
//       const response = await fetch('https://starx-backend.onrender.com/api/qrcode/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(payload)
//       });

//       if (response.status === 401) {
//         Cookies.remove('token');
//         navigate('/auth/signin-1', { replace: true });
//         return;
//       }

//       const data = await response.json();

//       if (response.ok) {
//         console.log('QR Code Created:', data);
//         handleCloseModal();
//       } else {
//         // show server message if any
//         alert(data.message || 'Failed to create QR code');
//       }
//     } catch (err) {
//       console.error('Error creating QR code:', err);
//       alert('Something went wrong while creating QR codes.');
//     }finally{
//       setBtnLoading(false)
//     }
//   };

//    if (loading)
//       return (
//         <div className="d-flex justify-content-center align-items-center vh-100">
//           <div className="text-center">
//             <Spinner animation="border" variant="primary" role="status" style={{ width: '4rem', height: '4rem' }} />
//             <p className="mt-3 fw-bold text-primary">Loading QR...</p>
//           </div>
//         </div>
//       );

//   return (
//     <Container className="my-4">
//       <Row className="mb-4">
//         <Col>
//           <h2 className="text-primary">QR Code Management</h2>
//         </Col>
//         <Col className="text-end">
//           <Button variant="primary" onClick={handleShowModal}>
//             <i className="bi bi-plus-circle me-2"></i>Add QR Codes
//           </Button>
//         </Col>
//       </Row>

//       {/* Keep your original table exactly (unchanged) */}
//       <Row>
//         <Col>
//           <div className="table-responsive">
//             <Table striped bordered hover className="shadow-sm">
//               <thead className="table-dark">
//                 <tr>

//                   <th className="text-center">QR Amount of 10</th>
//                   <th className="text-center">QR Amount of 20</th>
//                   <th className="text-center">QR Amount of 30</th>
//                   <th className="text-center">QR Amount of 40</th>
//                   <th className="text-center">QR Amount of 50</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="text-center">
//                         <div className="d-flex flex-column gap-1 p-2">
//                           <span className="fw-bold text-dark">Total: {qrStats.qr10.total}</span>
//                           <span className="text-muted">Used: {qrStats.qr10.used}</span>
//                           <span className="text-primary fw-bold">Remain: {qrStats.qr10.remain}</span>
//                         </div>
//                       </td>

//                        <td className="text-center">
//                         <div className="d-flex flex-column gap-1 p-2">
//                           <span className="fw-bold text-dark">Total: {qrStats.qr20.total}</span>
//                           <span className="text-muted">Used: {qrStats.qr20.used}</span>
//                           <span className="text-primary fw-bold">Remain: {qrStats.qr20.remain}</span>
//                         </div>
//                       </td>

//                        <td className="text-center">
//                         <div className="d-flex flex-column gap-1 p-2">
//                           <span className="fw-bold text-dark">Total: {qrStats.qr30.total}</span>
//                           <span className="text-muted">Used: {qrStats.qr30.used}</span>
//                           <span className="text-primary fw-bold">Remain: {qrStats.qr30.remain}</span>
//                         </div>
//                       </td>
//                       <td className="text-center">
//                         <div className="d-flex flex-column gap-1 p-2">
//                           <span className="fw-bold text-dark">Total: {qrStats.qr40.total}</span>
//                           <span className="text-muted">Used: {qrStats.qr40.used}</span>
//                           <span className="text-primary fw-bold">Remain: {qrStats.qr40.remain}</span>
//                         </div>
//                       </td>

//                        <td className="text-center">
//                         <div className="d-flex flex-column gap-1 p-2">
//                           <span className="fw-bold text-dark">Total: {qrStats.qr50.total}</span>
//                           <span className="text-muted">Used: {qrStats.qr50.used}</span>
//                           <span className="text-primary fw-bold">Remain: {qrStats.qr50.remain}</span>
//                         </div>
//                       </td>
//                 </tr>

//               </tbody>
//             </Table>

//           </div>
//         </Col>
//       </Row>

//       {/* Show loader / error for product fetch if needed */}
//       {loading && <p>Loading products for dropdown...</p>}
//       {error && <p className="text-danger">{error}</p>}

//       {/* Modal (uses fetched dropdown) */}
//       <Modal show={showModal} onHide={handleCloseModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Add New QR Codes</Modal.Title>
//         </Modal.Header>
//         <Form onSubmit={handleSubmit}>
//           <Modal.Body>
//             <Form.Group className="mb-3">
//               <Form.Label>Select Product</Form.Label>
//               <Form.Select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} required>
//                 <option value="">Choose a product...</option>
//                 {productsData.map((product) => (
//                   // support both server (_id) and fallback (id)
//                   <option key={product._id || product.id} value={product._id || product.id}>
//                     {product.name}
//                   </option>
//                 ))}
//               </Form.Select>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>QR Code Amount</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 min="1"
//                 placeholder="Enter amount"
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Total Number of QR Codes</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={totalQr}
//                 onChange={(e) => setTotalQr(e.target.value)}
//                 min="1"
//                 placeholder="Enter total number of QR codes"
//                 required
//               />
//             </Form.Group>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseModal}>
//               Cancel
//             </Button>

//             <Button
//               variant="primary"
//               type="submit"
//               className=" d-flex justify-content-center align-items-center"
//               disabled={btnLoading}
//             >
//               {btnLoading ? (
//                 <>
//                   <Spinner
//                     as="span"
//                     animation="border"
//                     size="sm"
//                     role="status"
//                     aria-hidden="true"
//                     className="me-2"
//                   />
//                   Adding...
//                 </>
//               ) : (
//                 'Add QR Codes'
//               )}
//             </Button>
//             {/* <Button variant="primary" type="submit">
//               Add QR Codes
//             </Button> */}
//           </Modal.Footer>
//         </Form>
//       </Modal>
//     </Container>
//   );
// };

// export default QRCodeList;

import { Container, Row, Col, Button, Modal, Form, Spinner, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const QRCodeList = () => {
  const [amount, setAmount] = useState('');
  const [totalQr, setTotalQr] = useState('');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [qrData, setQrData] = useState([]);

  const navigate = useNavigate();

  // Fetch QR Codes

  const fetchQr = async () => {
    const token = Cookies.get('token');
    if (!token) {
      navigate('/auth/signin-1', { replace: true });
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('https://starx-backend.onrender.com/api/qrcode/all', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      });
      if (response.status === 401) {
        Cookies.remove('token');
        navigate('/auth/signin-1', { replace: true });
        return;
      }
      const data = await response.json();
      if (response.ok) setQrData(data);
      else setError(data.message || 'Failed to fetch QR codes');
    } catch {
      setError('Something went wrong. Try again!');
    } finally {
      setLoading(false);
    }
  };
  // eslint-disable-next-line
  useEffect(() => {
    fetchQr();
  }, [navigate]);

  // Process QR Data into cards
  const processQrData = () => {
    const result = {};
    qrData.forEach((item) => {
      const key = `₹${item.amount}`;
      if (!result[key]) result[key] = { total: 0, used: 0, remain: 0 };
      result[key].total += 1;
      if (item.status === 'used') result[key].used += 1;
      else result[key].remain += 1;
    });
    return result;
  };

  const qrStats = processQrData();

  // Fetch products for dropdown
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const token = Cookies.get('token');
  //     if (!token) {
  //       navigate('/auth/signin-1', { replace: true });
  //       return;
  //     }
  //     try {
  //       const response = await fetch('https://starx-backend.onrender.com/api/product', {
  //         method: 'GET',
  //         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
  //       });
  //       if (response.status === 401) {
  //         Cookies.remove('token');
  //         navigate('/auth/signin-1', { replace: true });
  //         return;
  //       }
  //       const data = await response.json();
  //       if (response.ok) setProductsData(data.products?.length ? data.products : initialProductsData);
  //       else setError(data.message || 'Failed to fetch products');
  //     } catch {
  //       setError('Something went wrong. Try again!');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchProducts();
  // }, [navigate]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    // setSelectedProduct('');
    setAmount('');
    setTotalQr('');
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const token = Cookies.get('token');
  //   if (!token) navigate('/auth/signin-1', { replace: true });

  //   const payload = { amount, count: totalQr };
  //   setBtnLoading(true);
  //   try {
  //     const response = await fetch('https://starx-backend.onrender.com/api/qrcode/create', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  //       body: JSON.stringify(payload)
  //     });
  //     if (response.status === 401) {
  //       Cookies.remove('token');
  //       navigate('/auth/signin-1', { replace: true });
  //       return;
  //     }
  //     const data = await response.json();
  //     if (response.ok) {
  //       handleCloseModal();
  //       fetchQr()
  //     }else alert(data.message || 'Failed to create QR code');
  //   } catch {
  //     alert('Something went wrong while creating QR codes.');
  //   } finally {
  //     setBtnLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get('token');
    if (!token) return navigate('/auth/signin-1', { replace: true });

    const payload = { amount, count: totalQr };
    setBtnLoading(true);

    try {
      const response = await fetch('https://starx-backend.onrender.com/api/qrcode/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      // Log the raw response for debugging
      const responseText = await response.text();
      console.log('Raw response:', responseText);

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        throw new Error('Server returned invalid JSON');
      }

      console.log('Parsed data:', data);

      if (!response.ok) {
        // Handle non-200 status codes
        throw new Error(data?.message || `Server error: ${response.status}`);
      }

      // Success case
      handleCloseModal();
      fetchQr();
      alert('QR codes created successfully!');
    } catch (err) {
      console.error('Error details:', err);
      alert(err.message || 'Something went wrong while creating QR codes.');
    } finally {
      setBtnLoading(false);
    }
  };

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <Spinner animation="border" variant="primary" role="status" style={{ width: '4rem', height: '4rem' }} />
          <p className="mt-3 fw-bold text-primary">Loading QR...</p>
        </div>
      </div>
    );

  return (
    <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h2 className="text-primary">QR Code Management</h2>
        </Col>
        <Col className="text-end">
          <Button variant="primary" onClick={handleShowModal}>
            <i className="bi bi-plus-circle me-2"></i>Add QR Codes
          </Button>
        </Col>
      </Row>

      <Row className="g-3">
        {Object.keys(qrStats).length === 0 && <p>No QR Codes available</p>}
        {Object.entries(qrStats).map(([key, stats]) => (
          <Col xs={12} sm={6} md={4} lg={3} key={key}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title className="text-center">{key} QR</Card.Title>
                <hr />
                <p className="mb-1">
                  Total: <strong>{stats.total}</strong>
                </p>
                <p className="mb-1 text-muted">
                  Used: <strong>{stats.used}</strong>
                </p>
                <p className="mb-0 text-primary">
                  Remain: <strong>{stats.remain}</strong>
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {error && <p className="text-danger mt-3">{error}</p>}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New QR Codes</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            {/* <Form.Group className="mb-3">
              <Form.Label>Select Product</Form.Label>
              <Form.Select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} required>
                <option value="">Choose a product...</option>
                {productsData.map((product) => (
                  <option key={product._id || product.id} value={product._id || product.id}>
                    {product.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group> */}

            <Form.Group className="mb-3">
              <Form.Label>QR Code Amount</Form.Label>
              <Form.Control
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
                placeholder="Enter amount"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Total Number of QR Codes</Form.Label>
              <Form.Control
                type="number"
                value={totalQr}
                onChange={(e) => setTotalQr(e.target.value)}
                min="1"
                placeholder="Enter total number of QR codes"
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" disabled={btnLoading}>
              {btnLoading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                  Adding...
                </>
              ) : (
                'Add QR Codes'
              )}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default QRCodeList;
