import HomePage from './pages/Home/index.vue';
import ArticleDetail from './pages/ArticleDetail/index.vue';
import ArticleCategory from './pages/ArticleCategory/index.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/article-detail',
    name: 'article-detail',
    component: ArticleDetail
  },
  {
    path: '/article-category',
    name: 'article-category',
    component: ArticleCategory
  }
];