import Layout from '@/layout'
export default { 
    path: '/Strategic', 
    component: Layout, 
    children: [
    {
    path: '', 
    name: 'Strategic', 
    component: () => import('@/views/Strategic/index'),
    meta: { title: '策略管理', icon: 'dashboard'}
    }
    ]
}