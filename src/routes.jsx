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

import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';

// project import
import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'; // ✅ fixed import
// import { BASE_URL } from './config/constant';

// ==============================|| ROUTES RENDERER ||============================== //

const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            element={
              <Guard>
                <Layout>
                  {route.protected ? (
                    <ProtectedRoute>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</ProtectedRoute>
                  ) : route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Element props={true} />
                  )}
                </Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

export const routes = [
  // Public routes
  {
    path: '/auth/signup-1',
    element: lazy(() => import('./views/auth/signup/SignUp1'))
  },
  {
    path: '/auth/signin-1',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    path: '/auth/reset-password-1',
    element: lazy(() => import('./views/auth/reset-password/ResetPassword1'))
  },

  // Protected routes inside AdminLayout
  {
    path: '/app/*',
    layout: AdminLayout,
    routes: [
      {
        path: 'dashboard/analytics',
        element: lazy(() => import('./views/dashboard')),
        protected: true
      },
      {
        path: 'product/analytics',
        element: lazy(() => import('./views/product/ProductList')),
        protected: true
      },
      {
        path: 'user/analytics',
        element: lazy(() => import('./views/user/UserList')),
        protected: true
      },
      {
        path: 'user/:userId',
        element: lazy(() => import('./views/user/UserDetail')),
        protected: true
      },
      {
        path: 'transation/analytics',
        element: lazy(() => import('./views/transation/TransationList')),
        protected: true
      },
      {
        path: 'qrcode/analytics',
        element: lazy(() => import('./views/qrcode/QRCodeList')),
        protected: true
      },
      {
        path: 'basic/button',
        element: lazy(() => import('./views/ui-elements/BasicButton')),
        protected: true
      },
      {
        path: 'basic/badges',
        element: lazy(() => import('./views/ui-elements/BasicBadges')),
        protected: true
      },
      {
        path: 'basic/breadcrumb-pagination',
        element: lazy(() => import('./views/ui-elements/BasicBreadcrumbPagination')),
        protected: true
      },
      {
        path: 'basic/collapse',
        element: lazy(() => import('./views/ui-elements/BasicCollapse')),
        protected: true
      },
      {
        path: 'basic/typography',
        element: lazy(() => import('./views/ui-elements/BasicTypography')),
        protected: true
      },
      {
        path: 'basic/tooltip-popovers',
        element: lazy(() => import('./views/ui-elements/BasicTooltipsPopovers')),
        protected: true
      },
      {
        path: 'sample-page',
        element: lazy(() => import('./views/extra/SamplePage')),
        protected: true
      }
    ]
  },

  // ✅ Top-level fallback (outside AdminLayout)
  {
    path: '*',
    element: () => <Navigate to="/auth/signin-1" replace />
  }
];

export default renderRoutes;
