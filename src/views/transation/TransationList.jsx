// import React from 'react';
// import { Table, Container, Row, Col } from 'react-bootstrap';

// const transationData = {
//   qrTransactions: [
//     {
//       id: 'QR001',
//       productName: 'Product 1',
//       amount: 10,
//       fromWallet: 'Wallet_A123',
//       toWallet: 'Wallet_B456',
//       status: 'used',
//       payoutData: 'TXN_789XYZ',
//       payAt: '12-8-2025'
//     },
//     {
//       id: 'QR002',
//       productName: 'Product 2',
//       amount: 20,
//       fromWallet: 'Wallet_C789',
//       toWallet: 'Wallet_D012',
//       status: 'pending',
//       payoutData: 'TXN_345ABC',
//       payAt: '15-8-2025'
//     },
//     {
//       id: 'QR003',
//       productName: 'Product 3',
//       amount: 30,
//       fromWallet: 'Wallet_E345',
//       toWallet: 'Wallet_F678',
//       status: 'used',
//       payoutData: 'TXN_901DEF',
//       payAt: '18-8-2025'
//     },
//     {
//       id: 'QR004',
//       productName: 'Product 1',
//       amount: 40,
//       fromWallet: 'Wallet_G901',
//       toWallet: 'Wallet_H234',
//       status: 'failed',
//       payoutData: 'TXN_567GHI',
//       payAt: '20-8-2025'
//     },
//     {
//       id: 'QR005',
//       productName: 'Product 4',
//       amount: 50,
//       fromWallet: 'Wallet_I567',
//       toWallet: 'Wallet_J890',
//       status: 'used',
//       payoutData: 'TXN_123JKL',
//       payAt: '22-8-2025'
//     },
//     {
//       id: 'QR006',
//       productName: 'Product 2',
//       amount: 10,
//       fromWallet: 'Wallet_K123',
//       toWallet: 'Wallet_L456',
//       status: 'used',
//       payoutData: 'TXN_789MNO',
//       payAt: '25-8-2025'
//     },
//     {
//       id: 'QR007',
//       productName: 'Product 5',
//       amount: 20,
//       fromWallet: 'Wallet_M789',
//       toWallet: 'Wallet_N012',
//       status: 'pending',
//       payoutData: 'TXN_345PQR',
//       payAt: '28-8-2025'
//     },
//     {
//       id: 'QR008',
//       productName: 'Product 3',
//       amount: 30,
//       fromWallet: 'Wallet_O345',
//       toWallet: 'Wallet_P678',
//       status: 'used',
//       payoutData: 'TXN_901STU',
//       payAt: '01-9-2025'
//     },
//     {
//       id: 'QR009',
//       productName: 'Product 1',
//       amount: 40,
//       fromWallet: 'Wallet_Q901',
//       toWallet: 'Wallet_R234',
//       status: 'used',
//       payoutData: 'TXN_567VWX',
//       payAt: '05-9-2025'
//     },
//     {
//       id: 'QR010',
//       productName: 'Product 6',
//       amount: 50,
//       fromWallet: 'Wallet_S567',
//       toWallet: 'Wallet_T890',
//       status: 'failed',
//       payoutData: 'TXN_123YZA',
//       payAt: '10-9-2025'
//     }
//   ]
// };

// function TransationList() {
//   return (
//     <Container className="my-4">
//       <Row>
//         <Col>
//           <div className="table-responsive">
//             <Table striped bordered hover className="shadow-sm">
//               <thead className="table-dark">
//                 <tr>
//                   <th style={{ width: '15%' }}>QR Id</th>
//                   <th style={{ width: '15%' }}>Product Name</th>

//                   <th className="text-center">Amount</th>
//                   <th className="text-center">From Wallet</th>
//                   <th className="text-center">To Wallet</th>
//                   <th className="text-center">status</th>

//                   <th className="text-center">PayoutData</th>
//                   <th className="text-center">PayAt</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transationData?.qrTransactions.map((product, index) => (
//                   <tr key={index}>
//                     <td>{product.id}</td>
//                     <td>{product.productName}</td>
//                     <td>{product.amount}</td>
//                     <td>{product.fromWallet}</td>
//                     <td>{product.toWallet}</td>
//                     <td>
//                       <span
//                         className={`

//     ${product.status === 'used' ? 'text-secondary' : ''}
//     ${product.status === 'failed' ? 'text-danger' : ''}
//     ${product.status === 'pending' ? 'text-primary' : ''}
//   `}
//                         style={{ minWidth: '70px' }}
//                       >
//                         {product.status}
//                       </span>
//                     </td>
//                     <td>{product.payoutData}</td>
//                     <td>{product.payAt}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default TransationList;

// bharti

import { useState, useEffect } from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

// const transationData = {
//   qrTransactions: [
//     {
//       id: 'QR001',
//       productName: 'Product 1',
//       amount: 10,
//       fromWallet: 'Wallet_A123',
//       toWallet: 'Wallet_B456',
//       status: 'used',
//       payoutData: 'TXN_789XYZ',
//       payAt: '12-8-2025'
//     },
//     {
//       id: 'QR002',
//       productName: 'Product 2',
//       amount: 20,
//       fromWallet: 'Wallet_C789',
//       toWallet: 'Wallet_D012',
//       status: 'pending',
//       payoutData: 'TXN_345ABC',
//       payAt: '15-8-2025'
//     },
//     {
//       id: 'QR003',
//       productName: 'Product 3',
//       amount: 30,
//       fromWallet: 'Wallet_E345',
//       toWallet: 'Wallet_F678',
//       status: 'used',
//       payoutData: 'TXN_901DEF',
//       payAt: '18-8-2025'
//     },
//     {
//       id: 'QR004',
//       productName: 'Product 1',
//       amount: 40,
//       fromWallet: 'Wallet_G901',
//       toWallet: 'Wallet_H234',
//       status: 'failed',
//       payoutData: 'TXN_567GHI',
//       payAt: '20-8-2025'
//     },
//     {
//       id: 'QR005',
//       productName: 'Product 4',
//       amount: 50,
//       fromWallet: 'Wallet_I567',
//       toWallet: 'Wallet_J890',
//       status: 'used',
//       payoutData: 'TXN_123JKL',
//       payAt: '22-8-2025'
//     },
//     {
//       id: 'QR006',
//       productName: 'Product 2',
//       amount: 10,
//       fromWallet: 'Wallet_K123',
//       toWallet: 'Wallet_L456',
//       status: 'used',
//       payoutData: 'TXN_789MNO',
//       payAt: '25-8-2025'
//     },
//     {
//       id: 'QR007',
//       productName: 'Product 5',
//       amount: 20,
//       fromWallet: 'Wallet_M789',
//       toWallet: 'Wallet_N012',
//       status: 'pending',
//       payoutData: 'TXN_345PQR',
//       payAt: '28-8-2025'
//     },
//     {
//       id: 'QR008',
//       productName: 'Product 3',
//       amount: 30,
//       fromWallet: 'Wallet_O345',
//       toWallet: 'Wallet_P678',
//       status: 'used',
//       payoutData: 'TXN_901STU',
//       payAt: '01-9-2025'
//     },
//     {
//       id: 'QR009',
//       productName: 'Product 1',
//       amount: 40,
//       fromWallet: 'Wallet_Q901',
//       toWallet: 'Wallet_R234',
//       status: 'used',
//       payoutData: 'TXN_567VWX',
//       payAt: '05-9-2025'
//     },
//     {
//       id: 'QR010',
//       productName: 'Product 6',
//       amount: 50,
//       fromWallet: 'Wallet_S567',
//       toWallet: 'Wallet_T890',
//       status: 'failed',
//       payoutData: 'TXN_123YZA',
//       payAt: '10-9-2025'
//     }
//   ]
// };

function TransationList() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [transaction, setTransaction] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const token = Cookies.get('token');

      if (!token) {
        navigate('/auth/signin-1', { replace: true });
        return;
      }

      try {
        const response = await fetch('https://starx-backend.onrender.com/api/transaction', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '0'
          }
        });

        if (response.status === 401) {
          Cookies.remove('token');
          navigate('/auth/signin-1', { replace: true });
          return;
        }

        const data = await response.json();

        if (response.ok) {
          setTransaction(data.transaction || []);
          console.log('userBB ', data);
        } else {
          setError(data.message || 'Failed to fetch users');
        }
      } catch (err) {
        setError('Something went wrong. Try again!');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [navigate]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <Container className="my-4">
      <Row>
        <Col>
          <div className="table-responsive">
            <Table striped bordered hover className="shadow-sm">
              <thead className="table-dark">
                <tr>
                  <th style={{ width: '15%' }}>QR Id</th>
                  <th style={{ width: '15%' }}>Product Name</th>

                  <th className="text-center">Amount</th>
                  <th className="text-center">From Wallet</th>
                  <th className="text-center">To Wallet</th>
                  <th className="text-center">status</th>

                  <th className="text-center">PayoutData</th>
                  <th className="text-center">PayAt</th>
                </tr>
              </thead>
              <tbody>
                {transaction.map((product, index) => (
                  <tr key={index}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>{product.amount}</td>
                    <td>{product.fromWallet}</td>
                    <td>{product.toWallet}</td>
                    <td>
                      <span
                        className={`
    
    ${product.status === 'used' ? 'text-secondary' : ''}
    ${product.status === 'failed' ? 'text-danger' : ''}
    ${product.status === 'pending' ? 'text-primary' : ''}
  `}
                        style={{ minWidth: '70px' }}
                      >
                        {product.status}
                      </span>
                    </td>
                    <td>{product.payoutData}</td>
                    <td>{product.payAt}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TransationList;
