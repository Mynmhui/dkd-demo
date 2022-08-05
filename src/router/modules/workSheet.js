import Layout from '@/layout'
export default { 
    path: '/workSheet', 
    component: Layout, 
    // path: '', 
    name: 'workSheet', 
    // component: () => import('@/views/workSheet/index'),
    meta: { title: '工单管理', icon: 'dashboard'},
    redirect: '/operating',
    children: [
    {
    // path: '', 
    // name: 'workSheet', 
    // component: () => import('@/views/workSheet/index'),
    // meta: { title: '工单管理', icon: 'dashboard'},
    // children: [
    // {
    path: '/workShee/operating',
    name: 'operating',
    component: () => import('@/views/workSheet/operating'),
    meta: { title: '运营工单'}
    },
    {
    path: '/workShee/operations',
    name: 'operations',
    component: () => import('@/views/workSheet/operations'),
    meta: { title: '运维工单'}
    }
    ]
    // },
    // ]
}