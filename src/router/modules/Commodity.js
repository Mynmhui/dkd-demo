import Layout from '@/layout'
export default { 
    path: '/Commodity', 
    component: Layout, 
    children: [
    {
    path: '', 
    name: 'Commodity', 
    component: () => import('@/views/Commodity/index'),
    meta: { title: '商品管理', icon: 'dashboard'}
    }
    ]
}