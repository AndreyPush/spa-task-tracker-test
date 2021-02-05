const Main = ()=> import('@pages/main');
const Card = ()=> import('@pages/card');
const AddTask = ()=> import('@pages/addTask');
const Error = ()=> import('@pages/error');

export const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
        meta: {title: to=>'Main Page'}
    },
    {
        path: '/tasks/add',
        name: 'addTask',
        component: AddTask,
        meta: {title: to=>`Create new task`}
    },
    {
        path: '/tasks/:id',
        name: 'card',
        component: Card,
        meta: {title: to=>`Card #${to.params.id}`},
    },
    {
        path: '*',
        name: 'error',
        component: Error,
        meta: {title: to=>'Error!'}
    }
]
