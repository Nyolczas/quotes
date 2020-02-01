
import VueRouter from "vue-router";
import Quotes from './components/quotes.vue';
import NewQuote from './components/new-quote.vue';

const routes = [
    { path: "/", component: Quotes, name: "home"},
    { path: "/new", component: NewQuote, name: "new"},
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;
