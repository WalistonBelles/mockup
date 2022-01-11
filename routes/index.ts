import Index from '@/pages/index.vue'
import Product from '@/pages/product/index.vue'

export default [
  {
    path: '/',
    component: Index,
    name: 'Home'
  },
  {
    path: '/products',
    component: Product,
    name: 'Lista de Produtos',
  },
  {
    path: '/product/:id',
    component: Product,
    name: 'Detalhes do Produto',
  },
]
