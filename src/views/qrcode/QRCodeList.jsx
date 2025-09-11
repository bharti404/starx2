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

import { Table, Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const QRCodeList = () => {
  const [showModal, setShowModal] = useState(false);

  // --- keep your original sample table data intact ---
  const products = [
    {
      name: 'Product 1',
      qr10: { total: 20, used: 10, remain: 10 },
      qr20: { total: 15, used: 5, remain: 10 },
      qr30: { total: 25, used: 15, remain: 10 },
      qr40: { total: 30, used: 10, remain: 20 },
      qr50: { total: 40, used: 20, remain: 20 }
    },
    {
      name: 'Product 2',
      qr10: { total: 25, used: 15, remain: 10 },
      qr20: { total: 20, used: 10, remain: 10 },
      qr30: { total: 35, used: 20, remain: 15 },
      qr40: { total: 40, used: 15, remain: 25 },
      qr50: { total: 50, used: 30, remain: 20 }
    },
    {
      name: 'Product 3',
      qr10: { total: 30, used: 20, remain: 10 },
      qr20: { total: 25, used: 15, remain: 10 },
      qr30: { total: 40, used: 25, remain: 15 },
      qr40: { total: 45, used: 20, remain: 25 },
      qr50: { total: 55, used: 35, remain: 20 }
    }
  ];

  // --- fallback static list for dropdown (kept so nothing is removed) ---
  const initialProductsData = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' },
    { id: 6, name: 'Product 6' },
    { id: 7, name: 'Product 7' },
    { id: 8, name: 'Product 8' }
  ];

  const [productsData, setProductsData] = useState(initialProductsData);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [amount, setAmount] = useState('');
  const [totalQr, setTotalQr] = useState('');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Fetch real products for dropdown (keeps fallback if fetch fails)
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
          // If API returns products, use them; otherwise keep fallback
          setProductsData(data.products && data.products.length ? data.products : initialProductsData);
        } else {
          setError(data.message || 'Failed to fetch products');
        }
      } catch (err) {
        setError('Something went wrong. Try again!');
      } finally {
        setLoading(false);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps

    fetchProducts();
  }, [navigate]); // keep navigate in deps as you had

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct('');
    setAmount('');
    setTotalQr('');
  };

  // Submit to your POST API using fetch
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = Cookies.get('token');
    if (!token) {
      navigate('/auth/signin-1', { replace: true });
      return;
    }

    // build payload as requested
    const payload = {
      amount: amount,
      count: totalQr,
      productId: selectedProduct
    };

    try {
      const response = await fetch('https://starx-backend.onrender.com/api/qrcode/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (response.status === 401) {
        Cookies.remove('token');
        navigate('/auth/signin-1', { replace: true });
        return;
      }

      const data = await response.json();

      if (response.ok) {
        console.log('QR Code Created:', data);
        handleCloseModal();
      } else {
        // show server message if any
        alert(data.message || 'Failed to create QR code');
      }
    } catch (err) {
      console.error('Error creating QR code:', err);
      alert('Something went wrong while creating QR codes.');
    }
  };

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

      {/* Keep your original table exactly (unchanged) */}
      <Row>
        <Col>
          <div className="table-responsive">
            <Table striped bordered hover className="shadow-sm">
              <thead className="table-dark">
                <tr>
                  <th style={{ width: '15%' }}>Product Name</th>
                  <th className="text-center">QR Amount of 10</th>
                  <th className="text-center">QR Amount of 20</th>
                  <th className="text-center">QR Amount of 30</th>
                  <th className="text-center">QR Amount of 40</th>
                  <th className="text-center">QR Amount of 50</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td className="fw-bold">{product.name}</td>

                    {/* QR 10 */}
                    <td className="text-center">
                      <div className="d-flex flex-column gap-1">
                        <span className="fw-bold text-dark">Total: {product.qr10.total}</span>
                        <span className="text-muted">Used: {product.qr10.used}</span>
                        <span className="text-primary fw-bold">Remain: {product.qr10.remain}</span>
                      </div>
                    </td>

                    {/* QR 20 */}
                    <td className="text-center">
                      <div className="d-flex flex-column gap-1">
                        <span className="fw-bold text-dark">Total: {product.qr20.total}</span>
                        <span className="text-muted">Used: {product.qr20.used}</span>
                        <span className="text-primary fw-bold">Remain: {product.qr20.remain}</span>
                      </div>
                    </td>

                    {/* QR 30 */}
                    <td className="text-center">
                      <div className="d-flex flex-column gap-1">
                        <span className="fw-bold text-dark">Total: {product.qr30.total}</span>
                        <span className="text-muted">Used: {product.qr30.used}</span>
                        <span className="text-primary fw-bold">Remain: {product.qr30.remain}</span>
                      </div>
                    </td>

                    {/* QR 40 */}
                    <td className="text-center">
                      <div className="d-flex flex-column gap-1">
                        <span className="fw-bold text-dark">Total: {product.qr40.total}</span>
                        <span className="text-muted">Used: {product.qr40.used}</span>
                        <span className="text-primary fw-bold">Remain: {product.qr40.remain}</span>
                      </div>
                    </td>

                    {/* QR 50 */}
                    <td className="text-center">
                      <div className="d-flex flex-column gap-1">
                        <span className="fw-bold text-dark">Total: {product.qr50.total}</span>
                        <span className="text-muted">Used: {product.qr50.used}</span>
                        <span className="text-primary fw-bold">Remain: {product.qr50.remain}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      {/* Show loader / error for product fetch if needed */}
      {loading && <p>Loading products for dropdown...</p>}
      {error && <p className="text-danger">{error}</p>}

      {/* Modal (uses fetched dropdown) */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New QR Codes</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Select Product</Form.Label>
              <Form.Select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} required>
                <option value="">Choose a product...</option>
                {productsData.map((product) => (
                  // support both server (_id) and fallback (id)
                  <option key={product._id || product.id} value={product._id || product.id}>
                    {product.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

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
            <Button variant="primary" type="submit">
              Add QR Codes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default QRCodeList;
