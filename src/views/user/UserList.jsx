// import React from 'react';
// import { Table, Container, Badge } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const UserList = () => {
//   const users = [
//     // ... users data from above
//   ];

//   const userData={
//   "users": [
//     {
//       "id": 1,
//       "name": "John Doe",
//       "email": "john.doe@email.com",
//       "phone": "+1 (555) 123-4567",
//       "walletBalance": 1250.50
//     },
//     {
//       "id": 2,
//       "name": "Jane Smith",
//       "email": "jane.smith@email.com",
//       "phone": "+1 (555) 987-6543",
//       "walletBalance": 875.25
//     },
//     {
//       "id": 3,
//       "name": "Mike Johnson",
//       "email": "mike.j@email.com",
//       "phone": "+1 (555) 456-7890",
//       "walletBalance": 2100.75
//     },
//     {
//       "id": 4,
//       "name": "Sarah Wilson",
//       "email": "sarah.wilson@email.com",
//       "phone": "+1 (555) 234-5678",
//       "walletBalance": 450.00
//     },
//     {
//       "id": 5,
//       "name": "David Brown",
//       "email": "david.b@email.com",
//       "phone": "+1 (555) 876-5432",
//       "walletBalance": 1675.30
//     },
//     {
//       "id": 6,
//       "name": "Emily Davis",
//       "email": "emily.davis@email.com",
//       "phone": "+1 (555) 345-6789",
//       "walletBalance": 3200.00
//     },
//     {
//       "id": 7,
//       "name": "Chris Taylor",
//       "email": "chris.t@email.com",
//       "phone": "+1 (555) 765-4321",
//       "walletBalance": 925.80
//     },
//     {
//       "id": 8,
//       "name": "Amanda Lee",
//       "email": "amanda.lee@email.com",
//       "phone": "+1 (555) 543-2109",
//       "walletBalance": 1580.45
//     },
//     {
//       "id": 9,
//       "name": "Robert Clark",
//       "email": "robert.c@email.com",
//       "phone": "+1 (555) 321-0987",
//       "walletBalance": 2750.20
//     },
//     {
//       "id": 10,
//       "name": "Lisa Martinez",
//       "email": "lisa.m@email.com",
//       "phone": "+1 (555) 890-1234",
//       "walletBalance": 625.90
//     }
//   ]
// }

//   return (
//     <Container className="my-4">
//       <div className="table-responsive">
//         <Table striped bordered hover>
//           <thead className="table-dark">
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th className="text-end">Wallet Balance</th>
//                 <th className="text-end">User Detail</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userData?.users.map((user) => (
//               <tr key={user.id}>
//                 <td className="fw-bold">{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.phone}</td>
//                 <td className="text-end fw-bold">
//                   ${user.walletBalance.toLocaleString('en-US', {
//                     minimumFractionDigits: 2,
//                     maximumFractionDigits: 2
//                   })}
//                 </td>
//                  <td className='text-end text-primary'>
//                      <Link
//                     to={`/app/user/${user.id}`}
//                     className="btn btn-sm btn-outline-primary"
//                   >
//                     View
//                   </Link>
//                  </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </Container>
//   );
// };

// export default UserList;

import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
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
          setUsers(data.result || []);
          console.log('user', data);
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
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th className="text-end">Wallet Balance</th>
              <th className="text-end">User Detail</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="fw-bold">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className="text-end fw-bold">404</td>
                <td className="text-end">
                  <Link to={`/app/user/${user.id}`} className="btn btn-sm btn-outline-primary">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default UserList;
