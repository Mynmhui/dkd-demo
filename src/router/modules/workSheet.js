import Layout from '@/layout'
export default { 
    path: '/workSheet', 
    component: Layout, 
    hidden: true,
    children: [
    {
    path: '', 
    name: 'workSheet', 
    component: () => import('@/views/workSheet/index'),
    meta: { title: '工单管理', icon: 'dashboard'}
    }
    ]
}