// import React from 'react';
// import { NavLink, Link } from 'react-router-dom';

// // react-bootstrap
// import { Card, Button, Alert } from 'react-bootstrap';

// // third party
// import { CopyToClipboard } from 'react-copy-to-clipboard';

// // project import
// import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';
// import AuthLogin from './JWTLogin';

// // assets
// import logoDark from '../../../assets/images/logo-dark.png';

// // ==============================|| SIGN IN 1 ||============================== //

// const Signin1 = () => {
//   return (
//     <React.Fragment>
//       <Breadcrumb />
//       <div className="auth-wrapper">
//         <div className="auth-content">
//           <div className="auth-bg">
//             <span className="r" />
//             <span className="r s" />
//             <span className="r s" />
//             <span className="r" />
//           </div>
//           <Card className="borderless text-center">
//             <Card.Body>
//               <img src={logoDark} alt="" className="img-fluid mb-4" />
//               <AuthLogin />
//               <p className="mb-2 text-muted">
//                 Forgot password?{' '}
//                 <NavLink to="/auth/reset-password-1" className="f-w-400">
//                   Reset
//                 </NavLink>
//               </p>
//               <p className="mb-0 text-muted">
//                 Don’t have an account?{' '}
//                 <NavLink to="/auth/signup-1" className="f-w-400">
//                   Signup
//                 </NavLink>
//               </p>
//               <Alert variant="primary" className="text-start mt-3">
//                 User:
//                 <CopyToClipboard text="info@codedthemes.com">
//                   <Button variant="outline-primary" as={Link} to="#" className="badge mx-2 mb-2" size="sm">
//                     <i className="fa fa-user" /> info@codedthemes.com
//                   </Button>
//                 </CopyToClipboard>
//                 <br />
//                 Password:
//                 <CopyToClipboard text="123456">
//                   <Button variant="outline-primary" as={Link} to="#" className="badge mx-2" size="sm">
//                     <i className="fa fa-lock" /> 123456
//                   </Button>
//                 </CopyToClipboard>
//               </Alert>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Signin1;

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert ,Spinner} from 'react-bootstrap';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


const SignIn1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
     setLoading(true);

    try {
      // Example API call (replace with your API endpoint)
      const response = await fetch('https://starx-backend.onrender.com/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // Save token in cookies
        Cookies.set('token', data.token, { expires: 7 }); // expires in 7 days

        navigate('/app/dashboard/analytics', { replace: true });
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Something went wrong. Try again!', err.message);
    }finally{
      setLoading(false)
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={4}>
          <h3 className="text-center">Login</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 d-flex justify-content-center align-items-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn1;
