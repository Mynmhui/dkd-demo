import Layout from '@/layout'
export default { 
    path: '/Order', 
    component: Layout, 
    children: [
    {
    path: '', 
    name: 'Order', 
    component: () => import('@/views/Order/index'),
    meta: { title: '订单管理', icon: 'dashboard'}
    }
    ]
}