// import React, { Suspense, Fragment, lazy } from 'react';
// import { Routes, Navigate, Route } from 'react-router-dom';

// // project import
// import Loader from './components/Loader/Loader';
// import AdminLayout from './layouts/AdminLayout';
// import ProtectedRoute from './components/protectedRoute/ProtectedRoute'; // ✅ fixed import
// // import { BASE_URL } from './config/constant';

// // ==============================|| ROUTES RENDERER ||============================== //

// const renderRoutes = (routes = []) => (
//   <Suspense fallback={<Loader />}>
//     <Routes>
//       {routes.map((route, i) => {
//         const Guard = route.guard || Fragment;
//         const Layout = route.layout || Fragment;
//         const Element = route.element;

//         return (
//           <Route
//             key={i}
//             path={route.path}
//             exact={route.exact}
//             element={
//               <Guard>
//                 <Layout>
//                   {route.protected ? (
//                     <ProtectedRoute>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</ProtectedRoute>
//                   ) : route.routes ? (
//                     renderRoutes(route.routes)
//                   ) : (
//                     <Element props={true} />
//                   )}
//                 </Layout>
//               </Guard>
//             }
//           />
//         );
//       })}
//     </Routes>
//   </Suspense>
// );

// export const routes = [
//   // Public routes
//   {
//     exact: 'true',
//     path: '/auth/signup-1',
//     element: lazy(() => import('./views/auth/signup/SignUp1'))
//   },
//   {
//     exact: 'true',
//     path: '/auth/signin-1',
//     element: lazy(() => import('./views/auth/signin/SignIn1'))
//   },
//   {
//     exact: 'true',
//     path: '/auth/reset-password-1',
//     element: lazy(() => import('./views/auth/reset-password/ResetPassword1'))
//   },

//   // Protected routes inside AdminLayout
//   {
//     path: '*',
//     layout: AdminLayout,
//     routes: [
//       {
//         exact: 'true',
//         path: '/app/dashboard/analytics',
//         element: lazy(() => import('./views/dashboard')),
//         protected: true
//       },
//       {
//         exact: 'true',
//         path: '/app/product/analytics',
//         element: lazy(() => import('./views/product/ProductList')),
//         protected: true
//       },
//       {
//         exact: 'true',
//         path: '/app/user/analytics',
//         element: lazy(() => import('./views/user/UserList')),
//         protected: true
//       },
//       {
//         exact: 'true',
//         path: '/app/user/:userId',
//         element: lazy(() => import('./views/user/UserDetail')),
//         protected: true
//       },
//       {
//         exact: 'true',
//         path: '/app/transation/analytics',
//         element: lazy(() => import('./views/transation/TransationList')),
//         protected: true
//       },
//       {
//         exact: 'true',
//         path: '/app/qrcode/analytics',
//         element: lazy(() => import('./views/qrcode/QRCodeList')),
//         protected: true
//       },

//       // Example: UI Elements (can also be protected)
//       {
//         exact: 'true',
//         path: '/basic/button',
//         element: lazy(() => import('./views/ui-elements/BasicButton')),
//         protected: true
//       },
//       {
//         exact: 'true',
//         path: '/basic/badges',
//         element: lazy(() => import('./views/ui-elements/BasicBadges')),
//         protected: true
//       },
//       {
//         exact: 'true',
//         path: '/basic/breadcrumb-pagination',
//         element: lazy(() => import('./views/ui-elements/BasicBreadcrumbPagination')),
//         protected: true
//       },
//       {
//         exact: 'true',
//         path: '/basic/collapse',
//         element: lazy(() => import('./views/ui-elements/BasicCollapse')),
//         protected: true
//       },
//       {
//         exact: 'true',
//         path: '/basic/typography',
//         element: lazy(() => import('./views/ui-elements/BasicTypography')),
//         protected: true
//       },
//       {
//         exact: 'true',
//         path: '/basic/tooltip-popovers',
//         element: lazy(() => import('./views/ui-elements/BasicTooltipsPopovers')),
//         protected: true
//       },

//       // Sample page
//       {
//         exact: 'true',
//         path: '/sample-page',
//         element: lazy(() => import('./views/extra/SamplePage')),
//         protected: true
//       },

//       // Fallback redirect
//       {
//         path: '*',
//         exact: 'true',
//         element: () => <Navigate to="/auth/signin-1" replace />
//       }
//     ]
//   }
// ];

// export default renderRoutes;

//bharti

// import React, { Suspense, Fragment, lazy } from 'react';
// import { Routes, Navigate, Route } from 'react-router-dom';

// // project import
// import Loader from './components/Loader/Loader';
// import AdminLayout from './layouts/AdminLayout';
// import ProtectedRoute from './components/protectedRoute/ProtectedRoute'; // ✅ fixed import
// // import { BASE_URL } from './config/constant';

// // ==============================|| ROUTES RENDERER ||============================== //

// const renderRoutes = (routes = []) => (
//   <Suspense fallback={<Loader />}>
//     <Routes>
//       {routes.map((route, i) => {
//         const Guard = route.guard || Fragment;
//         const Layout = route.layout || Fragment;
//         const Element = route.element;

//         return (
//           <Route
//             key={i}
//             path={route.path}
//             exact={route.exact}
//             element={
//               <Guard>
//                 <Layout>
//                   {route.protected ? (
//                     <ProtectedRoute>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</ProtectedRoute>
//                   ) : route.routes ? (
//                     renderRoutes(route.routes)
//                   ) : (
//                     <Element props={true} />
//                   )}
//                 </Layout>
//               </Guard>
//             }
//           />
//         );
//       })}
//     </Routes>
//   </Suspense>
// );

// export const routes = [
//   // Public routes
//   {
//     path: '/auth/signup-1',
//     element: lazy(() => import('./views/auth/signup/SignUp1'))
//   },
//   {
//     path: '/auth/signin-1',
//     element: lazy(() => import('./views/auth/signin/SignIn1'))
//   },
//   {
//     path: '/auth/reset-password-1',
//     element: lazy(() => import('./views/auth/reset-password/ResetPassword1'))
//   },

//   // Protected routes inside AdminLayout
//   {
//     path: '/app/*',
//     layout: AdminLayout,
//     routes: [
//       {
//         path: 'dashboard/analytics',
//         element: lazy(() => import('./views/dashboard')),
//         protected: true
//       },
//       {
//         path: 'product/analytics',
//         element: lazy(() => import('./views/product/ProductList')),
//         protected: true
//       },
//       {
//         path: 'user/analytics',
//         element: lazy(() => import('./views/user/UserList')),
//         protected: true
//       },
//       {
//         path: 'user/:userId',
//         element: lazy(() => import('./views/user/UserDetail')),
//         protected: true
//       },
//       {
//         path: 'transation/analytics',
//         element: lazy(() => import('./views/transation/TransationList')),
//         protected: true
//       },
//       {
//         path: 'qrcode/analytics',
//         element: lazy(() => import('./views/qrcode/QRCodeList')),
//         protected: true
//       },
//       {
//         path: 'basic/button',
//         element: lazy(() => import('./views/ui-elements/BasicButton')),
//         protected: true
//       },
//       {
//         path: 'basic/badges',
//         element: lazy(() => import('./views/ui-elements/BasicBadges')),
//         protected: true
//       },
//       {
//         path: 'basic/breadcrumb-pagination',
//         element: lazy(() => import('./views/ui-elements/BasicBreadcrumbPagination')),
//         protected: true
//       },
//       {
//         path: 'basic/collapse',
//         element: lazy(() => import('./views/ui-elements/BasicCollapse')),
//         protected: true
//       },
//       {
//         path: 'basic/typography',
//         element: lazy(() => import('./views/ui-elements/BasicTypography')),
//         protected: true
//       },
//       {
//         path: 'basic/tooltip-popovers',
//         element: lazy(() => import('./views/ui-elements/BasicTooltipsPopovers')),
//         protected: true
//       },
//       {
//         path: 'sample-page',
//         element: lazy(() => import('./views/extra/SamplePage')),
//         protected: true
//       }
//     ]
//   },

//   // ✅ Top-level fallback (outside AdminLayout)
//   {
//     path: '*',
//     element: () => <Navigate to="/auth/signin-1" replace />
//   }
// ];

// export default renderRoutes;

import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// project import
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Loader from './components/Loader/Loader';

// Lazy load components
const SignUp1 = lazy(() => import('./views/auth/signup/SignUp1'));
const SignIn1 = lazy(() => import('./views/auth/signin/SignIn1'));
const ResetPassword1 = lazy(() => import('./views/auth/reset-password/ResetPassword1'));

const Dashboard = lazy(() => import('./views/dashboard'));
const ProductList = lazy(() => import('./views/product/ProductList'));
const UserList = lazy(() => import('./views/user/UserList'));
const UserDetail = lazy(() => import('./views/user/UserDetail'));
const TransationList = lazy(() => import('./views/transation/TransationList'));
const QRCodeList = lazy(() => import('./views/qrcode/QRCodeList'));
const BasicButton = lazy(() => import('./views/ui-elements/BasicButton'));
const BasicBadges = lazy(() => import('./views/ui-elements/BasicBadges'));
const BasicBreadcrumbPagination = lazy(() => import('./views/ui-elements/BasicBreadcrumbPagination'));
const BasicCollapse = lazy(() => import('./views/ui-elements/BasicCollapse'));
const BasicTypography = lazy(() => import('./views/ui-elements/BasicTypography'));
const BasicTooltipsPopovers = lazy(() => import('./views/ui-elements/BasicTooltipsPopovers'));
const SamplePage = lazy(() => import('./views/extra/SamplePage'));

// ==============================|| ROUTES RENDERER ||============================== //

const renderRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {/* Public routes */}
      <Route path="/auth/signup-1" element={<SignUp1 />} />
      <Route path="/auth/signin-1" element={<SignIn1 />} />
      <Route path="/auth/reset-password-1" element={<ResetPassword1 />} />

      {/* Protected /app routes */}
      <Route
        path="/app/dashboard/analytics"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/app/product/analytics"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <ProductList />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/app/user/analytics"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <UserList />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/app/user/:userId"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <UserDetail />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/app/transation/analytics"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <TransationList />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/app/qrcode/analytics"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <QRCodeList />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/app/basic/button"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <BasicButton />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/app/basic/badges"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <BasicBadges />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/app/basic/breadcrumb-pagination"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <BasicBreadcrumbPagination />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/app/basic/collapse"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <BasicCollapse />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/app/basic/typography"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <BasicTypography />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/app/basic/tooltip-popovers"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <BasicTooltipsPopovers />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/app/sample-page"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <SamplePage />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      {/* Top-level fallback */}
      <Route path="*" element={<Navigate to="/auth/signin-1" replace />} />
    </Routes>
  </Suspense>
);

export const routes = renderRoutes;

export default renderRoutes;
