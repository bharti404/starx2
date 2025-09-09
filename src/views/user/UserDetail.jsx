import React from 'react';
import { Container, Card, Row, Col, Badge } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();
  
  // Sample user data - in real app, you'd fetch this from API
  const userData = {
    "users": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@email.com",
        "phone": "+1 (555) 123-4567",
        "walletBalance": 1250.50,
        "status": "Active",
        "joinedDate": "2024-01-15",
        "lastLogin": "2024-03-10",
        "totalTransactions": 45
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@email.com",
        "phone": "+1 (555) 987-6543",
        "walletBalance": 875.25,
        "status": "Active",
        "joinedDate": "2024-02-10",
        "lastLogin": "2024-03-09",
        "totalTransactions": 32
      },
      {
        "id": 3,
        "name": "Mike Johnson",
        "email": "mike.j@email.com",
        "phone": "+1 (555) 456-7890",
        "walletBalance": 2100.75,
        "status": "Inactive",
        "joinedDate": "2024-01-20",
        "lastLogin": "2024-02-28",
        "totalTransactions": 67
      },
      {
        "id": 4,
        "name": "Sarah Wilson",
        "email": "sarah.wilson@email.com",
        "phone": "+1 (555) 234-5678",
        "walletBalance": 450.00,
        "status": "Active",
        "joinedDate": "2024-03-01",
        "lastLogin": "2024-03-10",
        "totalTransactions": 18
      }
    ]
  };

  const user = userData.users.find(u => u.id === parseInt(userId));

  if (!user) {
    return (
      <Container className="my-4">
        <div className="text-center">
          <h3>User not found</h3>
          <Link to="/app/user/analytics" className="btn btn-primary">
            Back to Users
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>User Details</h2>
        <Link to="/app/user/analytics" className="btn btn-outline-secondary">
          ← Back to Users
        </Link>
      </div>

      <Row>
        <Col md={8}>
          <Card>
            <Card.Header>
              <h4 className="mb-0">{user.name}</h4>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone:</strong> {user.phone}</p>
                  <p><strong>Status:</strong> 
                    <Badge bg={user.status === 'Active' ? 'success' : 'secondary'} className="ms-2">
                      {user.status}
                    </Badge>
                  </p>
                </Col>
                <Col md={6}>
                  <p><strong>Joined Date:</strong> {user.joinedDate}</p>
                  <p><strong>Last Login:</strong> {user.lastLogin}</p>
                  <p><strong>Total Transactions:</strong> {user.totalTransactions}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mt-4">
            <Card.Header>
              <h5 className="mb-0">Wallet Information</h5>
            </Card.Header>
            <Card.Body>
              <div className="text-center">
                <h3 className="text-primary">
                  ${user.walletBalance.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </h3>
                <p className="text-muted">Current Wallet Balance</p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Quick Actions</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-grid gap-2">
                
                <button className="btn btn-outline-danger">Deactivate User</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetail;