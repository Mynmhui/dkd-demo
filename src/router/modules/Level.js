import Layout from '@/layout'
export default { 
    path: '/Level', 
    component: Layout, 
    children: [
    {
    path: '', 
    name: 'Level', 
    component: () => import('@/views/Level/index'),
    meta: { title: '点位管理', icon: 'dashboard'}
    }
    ]
}