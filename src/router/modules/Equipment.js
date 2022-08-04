import Layout from '@/layout'
export default { 
    path: '/Equipment', 
    component: Layout, 
    children: [
    {
    path: '', 
    name: 'Equipment', 
    component: () => import('@/views/Equipment/index'),
    meta: { title: '设备管理', icon: 'dashboard'}
    }
    ]
}