import top250 from './component/top250.vue'
import now from './component/now.vue'
import inComing from './component/inComing.vue'
import search from './component/search.vue'


export default [
    {path:'/top250',component:top250},
    {path:'/now',component:now},
    {path:'/inComing',component:inComing},
    {path:'/search',component:search},
    {path:'/',component:now}
]


