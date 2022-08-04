import Layout from '@/layout'
export default { 
    path: '/Personnel', 
    component: Layout, 
    children: [
    {
    path: '', 
    name: 'Personnel', 
    component: () => import('@/views/Personnel/index'),
    meta: { title: '人员管理', icon: 'dashboard'}
    }
    ]
}