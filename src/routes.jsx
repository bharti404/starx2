// import React, { Suspense, Fragment, lazy } from 'react';
// import { Routes, Navigate, Route } from 'react-router-dom';

// // project import
// import Loader from './components/Loader/Loader';
// import AdminLayout from './layouts/AdminLayout';

// import { BASE_URL } from './config/constant';

// // ==============================|| ROUTES ||============================== //

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
//                 <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
//               </Guard>
//             }
//           />
//         );
//       })}
//     </Routes>
//   </Suspense>
// );

// export const routes = [
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
//   {
//     path: '*',
//     layout: AdminLayout,
//     routes: [
//       {
//         exact: 'true',
//         path: '/app/dashboard/analytics',
//         element: lazy(() => import('./views/dashboard'))
//       },
//       {
//         exact: 'true',
//         path: '/basic/button',
//         element: lazy(() => import('./views/ui-elements/BasicButton'))
//       },
//       {
//         exact: 'true',
//         path: '/basic/badges',
//         element: lazy(() => import('./views/ui-elements/BasicBadges'))
//       },
//       {
//         exact: 'true',
//         path: '/basic/breadcrumb-pagination',
//         element: lazy(() => import('./views/ui-elements/BasicBreadcrumbPagination'))
//       },
//       {
//         exact: 'true',
//         path: '/basic/collapse',
//         element: lazy(() => import('./views/ui-elements/BasicCollapse'))
//       },

//       {
//         exact: 'true',
//         path: '/basic/typography',
//         element: lazy(() => import('./views/ui-elements/BasicTypography'))
//       },
//       {
//         exact: 'true',
//         path: '/basic/tooltip-popovers',
//         element: lazy(() => import('./views/ui-elements/BasicTooltipsPopovers'))
//       },
//       {
//         exact: 'true',
//         path: '/sample-page',
//         element: lazy(() => import('./views/extra/SamplePage'))
//       },
//       {
//         path: '*',
//         exact: 'true',
//         element: () => <Navigate to={BASE_URL} />
//       }
//     ]
//   }
// ];

// export default renderRoutes;



//seconnd round of 


// import React, { Suspense, Fragment, lazy } from 'react';
// import { Routes, Navigate, Route } from 'react-router-dom';

// // project import
// import Loader from './components/Loader/Loader';
// import AdminLayout from './layouts/AdminLayout';
// import ProtectedRoute from 'components/protectedRoute/ProtectedRoute';



// import { BASE_URL } from './config/constant';

// // ==============================|| ROUTES ||============================== //

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
//                 <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
//               </Guard>
//             }
//           />
//         );
//       })}
//     </Routes>
//   </Suspense>
// );

// export const routes = [
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
//   {
//     path: '*',
//     layout: AdminLayout,
//     routes: [
//       {
//         exact: 'true',
//         path: '/app/dashboard/analytics',
//         element: lazy(() => import('./views/dashboard'))
//       },
//        {
//         exact: 'true',
//         path: '/app/product/analytics',
//         element: lazy(() => import('./views/product/ProductList'))
//       },
//        {
//         exact: 'true',
//         path: '/app/user/analytics',
//         element: lazy(() => import('./views/user/UserList'))
//       },
      
// {
//   exact: 'true',
//   path: '/app/user/:userId',
//   element: lazy(() => import('./views/user/UserDetail'))
// },
//       {
//         exact: 'true',
//         path: '/app/transation/analytics',
//         element: lazy(() => import('./views/transation/TransationList'))
//       },
//        {
//         exact: 'true',
//         path: '/app/qrcode/analytics',
//         element: lazy(() => import('./views/qrcode/QRCodeList'))
//       },
//       {
//         exact: 'true',
//         path: '/basic/button',
//         element: lazy(() => import('./views/ui-elements/BasicButton'))
//       },
//       {
//         exact: 'true',
//         path: '/basic/badges',
//         element: lazy(() => import('./views/ui-elements/BasicBadges'))
//       },
//       {
//         exact: 'true',
//         path: '/basic/breadcrumb-pagination',
//         element: lazy(() => import('./views/ui-elements/BasicBreadcrumbPagination'))
//       },
//       {
//         exact: 'true',
//         path: '/basic/collapse',
//         element: lazy(() => import('./views/ui-elements/BasicCollapse'))
//       },

//       {
//         exact: 'true',
//         path: '/basic/typography',
//         element: lazy(() => import('./views/ui-elements/BasicTypography'))
//       },
//       {
//         exact: 'true',
//         path: '/basic/tooltip-popovers',
//         element: lazy(() => import('./views/ui-elements/BasicTooltipsPopovers'))
//       },
//       {
//         exact: 'true',
//         path: '/sample-page',
//         element: lazy(() => import('./views/extra/SamplePage'))
//       },
//       {
//         path: '*',
//         exact: 'true',
//         element: () => <Navigate to={BASE_URL} />
//       }
//     ]
//   }
// ];

// export default renderRoutes;



import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';

// project import
import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'; // ✅ fixed import
import { BASE_URL } from './config/constant';

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
                    <ProtectedRoute>
                      {route.routes ? renderRoutes(route.routes) : <Element props={true} />}
                    </ProtectedRoute>
                  ) : (
                    route.routes ? renderRoutes(route.routes) : <Element props={true} />
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
    exact: 'true',
    path: '/auth/signup-1',
    element: lazy(() => import('./views/auth/signup/SignUp1'))
  },
  {
    exact: 'true',
    path: '/auth/signin-1',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/auth/reset-password-1',
    element: lazy(() => import('./views/auth/reset-password/ResetPassword1'))
  },

  // Protected routes inside AdminLayout
  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        exact: 'true',
        path: '/app/dashboard/analytics',
        element: lazy(() => import('./views/dashboard')),
        protected: true
      },
      {
        exact: 'true',
        path: '/app/product/analytics',
        element: lazy(() => import('./views/product/ProductList')),
        protected: true
      },
      {
        exact: 'true',
        path: '/app/user/analytics',
        element: lazy(() => import('./views/user/UserList')),
        protected: true
      },
      {
        exact: 'true',
        path: '/app/user/:userId',
        element: lazy(() => import('./views/user/UserDetail')),
        protected: true
      },
      {
        exact: 'true',
        path: '/app/transation/analytics',
        element: lazy(() => import('./views/transation/TransationList')),
        protected: true
      },
      {
        exact: 'true',
        path: '/app/qrcode/analytics',
        element: lazy(() => import('./views/qrcode/QRCodeList')),
        protected: true
      },

      // Example: UI Elements (can also be protected)
      {
        exact: 'true',
        path: '/basic/button',
        element: lazy(() => import('./views/ui-elements/BasicButton')),
        protected: true
      },
      {
        exact: 'true',
        path: '/basic/badges',
        element: lazy(() => import('./views/ui-elements/BasicBadges')),
        protected: true
      },
      {
        exact: 'true',
        path: '/basic/breadcrumb-pagination',
        element: lazy(() => import('./views/ui-elements/BasicBreadcrumbPagination')),
        protected: true
      },
      {
        exact: 'true',
        path: '/basic/collapse',
        element: lazy(() => import('./views/ui-elements/BasicCollapse')),
        protected: true
      },
      {
        exact: 'true',
        path: '/basic/typography',
        element: lazy(() => import('./views/ui-elements/BasicTypography')),
        protected: true
      },
      {
        exact: 'true',
        path: '/basic/tooltip-popovers',
        element: lazy(() => import('./views/ui-elements/BasicTooltipsPopovers')),
        protected: true
      },

      // Sample page
      {
        exact: 'true',
        path: '/sample-page',
        element: lazy(() => import('./views/extra/SamplePage')),
        protected: true
      },

      // Fallback redirect
      {
        path: '*',
        exact: 'true',
        element: () => <Navigate to={BASE_URL} />
      }
    ]
  }
];

export default renderRoutes;
