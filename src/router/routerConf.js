import Home from '@/pages/home';
import Fun from '@/pages/fun';
import MainLayout from '@/layout/mainLayout';

export const routerConf = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    layout: MainLayout
  },
  {
    path: '/fun',
    component: Fun,
    layout: MainLayout
  }
];