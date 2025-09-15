import React from 'react';
// react-bootstrap
import { Row, Col, Card, Table, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import chartData from './chart/analytics-cuatomer-chart';
// third party
import Chart from 'react-apexcharts';
import PerfectScrollbar from 'react-perfect-scrollbar';

// project import
import OrderCard from '../../components/Widgets/Statistic/OrderCard';
// import SocialCard from '../../components/Widgets/Statistic/SocialCard';

import uniqueVisitorChart from './chart/analytics-unique-visitor-chart';
// import customerChart from './chart/analytics-cuatomer-chart';
import customerChart1 from './chart/analytics-cuatomer-chart-1';


// assets
// import avatar1 from '../../assets/images/user/avatar-1.jpg';
// import imgGrid1 from '../../assets/images/gallery-grid/img-grd-gal-1.jpg';
// import imgGrid2 from '../../assets/images/gallery-grid/img-grd-gal-2.jpg';
// import imgGrid3 from '../../assets/images/gallery-grid/img-grd-gal-3.jpg';

// ==============================|| DASHBOARD ANALYTICS ||============================== //

const DashAnalytics = () => {
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);
  const [newUsers, setNewUsers] = useState(0);
  const [oldUsers, setOldUsers] = useState(0);
  const [transactionLoading, setTransactionLoading] = useState(false);
  const [transaction, setTransaction] = useState([]);
  const [adminWallet, setAdminWallet] = useState(null);
  const [totalQr, setTotalQr] = useState('');
  const [totalUsedQr, setTotalUsedQr] = useState('');
  const [totalUnusedQr, setTotalUnusedQr] = useState('');
  // const [qrData, setQrData] = useState([]);
  // const [chartConfig, setChartConfig] = useState(null);

  console.log(newUsers);
  console.log(usersLoading);
  console.log(users);
  console.log(adminWallet);
  console.log(totalQr);
  console.log(totalUnusedQr);
  console.log(totalUsedQr);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const token = Cookies.get('token');

      if (!token) {
        navigate('/auth/signin-1', { replace: true });
        return;
      }

      try {
        const response = await fetch('https://starx-backend.onrender.com/api/user/getall', {
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
          const allUsers = data.result || [];
          setUsers(allUsers);

          // Total users
          const total = allUsers.length;
          setTotalUsers(total);

          // Start of current month
          const startOfMonth = new Date();
          startOfMonth.setDate(1);
          startOfMonth.setHours(0, 0, 0, 0);

          // New users (this month)
          const newUsersCount = allUsers.filter((user) => new Date(user.createdAt) >= startOfMonth).length;
          setNewUsers(newUsersCount);

          // Old users (before this month)
          const oldUsersCount = total - newUsersCount;
          setOldUsers(oldUsersCount);
        } else {
          setError(data.message || 'Failed to fetch users');
        }
      } catch (err) {
        setError('Something went wrong. Try again!');
      } finally {
        setUsersLoading(false);
      }
    };

    fetchUsers();
  }, [navigate]);

  useEffect(() => {
    const fetchtransaction = async () => {
      const token = Cookies.get('token');

      if (!token) {
        navigate('/auth/signin-1', { replace: true });
        return;
      }
      setTransactionLoading(true);

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
          const topFive = data.transactions.slice(0, 5);
          setTransaction(topFive || []);
          console.log('userBB ', data);
        } else {
          // setError(data.message || 'Failed to fetch users');
          console.log(data.message);
        }
      } catch (err) {
        // setError('Something went wrong. Try again!');
        console.log(err.message);
      } finally {
        setTransactionLoading(false);
      }
    };

    fetchtransaction();
  }, [navigate]);

  useEffect(() => {
    const fetchtWallet = async () => {
      const token = Cookies.get('token');

      if (!token) {
        navigate('/auth/signin-1', { replace: true });
        return;
      }
      // setTransactionLoading(true);

      try {
        const response = await fetch('https://starx-backend.onrender.com/api/wallet/admin/', {
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
          console.log('adminWallet', data.wallet);
          setAdminWallet(data.wallet.balance);
          console.log('userBB ', data);
        } else {
          // setError(data.message || 'Failed to fetch users');
          console.log(data.message);
        }
      } catch (err) {
        // setError('Something went wrong. Try again!');
        console.log(err.message);
      } finally {
        setTransactionLoading(false);
      }
    };

    fetchtWallet();
  }, [navigate]);

  useEffect(() => {
    const fetchtQR = async () => {
      const token = Cookies.get('token');

      if (!token) {
        navigate('/auth/signin-1', { replace: true });
        return;
      }
      // setTransactionLoading(true);

      try {
        const response = await fetch('https://starx-backend.onrender.com/api/qrcode/all', {
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
          
          setTotalQr(data.length);
          setTotalUnusedQr(data.filter((cur) => cur.status === 'unused').length);
          setTotalUsedQr(data.filter((cur) => cur.status === 'used').length);

          console.log('userBBn ', data.length);
        } else {
          // setError(data.message || 'Failed to fetch users');
          console.log(data.message);
        }
      } catch (err) {
        // setError('Something went wrong. Try again!');
        console.log(err.message);
      } finally {
        setTransactionLoading(false);
      }
    };

    fetchtQR();
  }, [navigate]);

  
  return (
    <React.Fragment>
      <Row>
        {/* order cards */}
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Total Amount In Wallet',
              class: 'bg-c-blue',
              icon: 'feather icon-credit-card',
              primaryText: adminWallet
              // secondaryText: 'Completed Orders',
              // extraText: '351'
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Total QR',
              class: 'bg-c-green',
              icon: 'feather icon-grid',
              primaryText: totalQr
              // secondaryText: 'This Month',
              // extraText: '213'
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Total Used QR',
              class: 'bg-c-yellow',
              icon: 'feather icon-repeat',
              primaryText: totalUsedQr
              // secondaryText: 'This Month',
              // extraText: '$5,032'
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Total User',
              class: 'bg-c-red',
              icon: 'feather icon-user',
              primaryText: totalUsers
              // secondaryText: 'This Month',
              // extraText: '$542'
            }}
          />
        </Col>

        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <h5>QR analyst</h5>
            </Card.Header>
            <Card.Body className="ps-4 pt-4 pb-0">
              <Chart {...uniqueVisitorChart} />
              
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={6}>
          <Row>
            <Col sm={6}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col sm="auto">
                      <span>Customers</span>
                    </Col>
                    <Col className="text-end">
                      <h2 className="mb-0">{totalUsers}</h2>
                    </Col>
                  </Row>
                  {/* <Chart {...customerChart} /> */}
                  <Chart {...chartData(newUsers, oldUsers)} />;
                  <Row className="mt-3 text-center">
                    <Col>
                      <h3 className="m-0">
                        <i className="fas fa-circle f-10 mx-2 text-success" />
                        {newUsers}
                      </h3>
                      <span className="ms-3">New</span>
                    </Col>
                    <Col>
                      <h3 className="m-0">
                        <i className="fas fa-circle text-primary f-10 mx-2" />
                        {oldUsers}
                      </h3>
                      <span className="ms-3">Return</span>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card className="bg-primary text-white">
                <Card.Body>
                  <Row>
                    <Col sm="auto">
                      <span>Total QR</span>
                    </Col>
                    <Col className="text-end">
                      <h2 className="mb-0 text-white">{totalQr}</h2>
                    </Col>
                  </Row>
                  {/* <Chart {...customerChart1} /> */}
                  <Chart {...customerChart1(totalUsedQr, totalUnusedQr)} />

                  <Row className="mt-3 text-center">
                    <Col>
                      <h3 className="m-0 text-white">
                        <i className="fas fa-circle f-10 mx-2 text-success" />
                        674
                      </h3>
                      <span className="ms-3">Unused</span>
                    </Col>

                    <Col>
                      <h3 className="m-0 text-white">
                        <i className="fas fa-circle f-10 mx-2 text-white" />
                        182
                      </h3>
                      <span className="ms-3">Used</span>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Recent Transation</Card.Title>
            </Card.Header>
            {/* <Card.Body className="p-0">
              <div className="table-card" style={{ height: '362px' }}>
                <PerfectScrollbar>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>
                          <span>QR Id</span>
                        </th>
                        <th>
                          <span>Product Name</span>
                        </th>
                        <th>
                          <span>Amount</span>
                        </th>
                        <th>
                          <span>From Wallet</span>
                        </th>
                        <th>
                          <span>TO Wallet</span>
                        </th>
                        <th>
                          <span>Status</span>
                        </th>
                        <th>
                          <span>PayoutDate</span>
                        </th>
                        <th>
                          <span>PayAt</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>08-11-2016</td>
                        <td>786</td>
                        <td>485</td>
                        <td>769</td>
                        <td>45,3%</td>
                        <td>pending</td>
                        <td>10-11-2025</td>
                        <td>10:55</td>
                      </tr>
                    </tbody>
                  </Table>
                </PerfectScrollbar>
              </div>
            </Card.Body> */}

            <Card.Body className="p-0">
              <div className="table-card" style={{ height: '362px' }}>
                <PerfectScrollbar>
                  {transactionLoading ? (
                    // 👇 Loading spinner centered in the table area
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                      <Spinner animation="border" role="status" variant="primary">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                  ) : (
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>
                            <span>QR Id</span>
                          </th>

                          <th>
                            <span>Amount</span>
                          </th>
                          <th>
                            <span>From Wallet</span>
                          </th>
                          <th>
                            <span>To Wallet</span>
                          </th>
                          <th>
                            <span>Status</span>
                          </th>
                          <th>
                            <span>Payout Date</span>
                          </th>
                          {/* <th><span>Pay At</span></th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {transaction && transaction.length > 0 ? (
                          transaction.map((tx, index) => (
                            <tr key={index}>
                              <td>{tx.qrCode}</td>

                              <td>{tx.amount}</td>
                              <td>{tx?.fromWallet?.ownerType}</td>
                              <td>{tx.toWallet?.ownerType}</td>
                              <td>{tx.status}</td>
                              <td>{new Date(tx.payoutBatchDate).toLocaleDateString()}</td>
                              {/* <td>{new Date(tx.payAt).toLocaleTimeString()}</td> */}
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="8" className="text-center">
                              No Transactions Found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  )}
                </PerfectScrollbar>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DashAnalytics;
