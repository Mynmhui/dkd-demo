import Layout from '@/layout'
export default { 
    path: '/Reconciliation', 
    component: Layout, 
    children: [
    {
    path: '', 
    name: 'Reconciliation', 
    component: () => import('@/views/Reconciliation/index'),
    meta: { title: '对账统计', icon: 'dashboard'}
    }
    ]
}