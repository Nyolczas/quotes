require('./bootstrap');

import router from "./routes";
import VueRouter from "vue-router";

window.Vue = require('vue');

Vue.component('app', require('./components/app.vue').default);

Vue.component(
    'new-quote',
    require('./components/new-quote.vue').default
);

Vue.component(
    'quotes',
    require('./components/quotes.vue').default
);

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router: router,
});
