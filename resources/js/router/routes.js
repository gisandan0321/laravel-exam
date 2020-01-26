export default [
  {
    path: '/',
    component: () => import('../pages/posts/show'),
    name: 'postDetails'
  },
  {
    path: '/page-not-found',
    component: () => import('../components/Error404'),
    name: 'pageNotFound'
  },
  {
    path: '*',
    redirect: '/page-not-found',
    name: 'error404'
  }
];