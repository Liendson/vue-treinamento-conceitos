import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

import minhaDiretivaDirective from '@/directives/minha-diretiva.directive';
import MeuComponenteComponent from '@/components/MeuComponenteComponent.vue';
import UtilMixin from '@/mixins/util.mixin';
import LetraMaiusculaFilter from '@/filters/letra-maiuscula.filter';

import AxiosPlugin from '@/plugins/axios.plugin';

Vue.directive("primeiraDiretiva", minhaDiretivaDirective);

Vue.component("MeuComponenteComponent", MeuComponenteComponent);

Vue.mixin(UtilMixin);

Vue.use(AxiosPlugin);

Vue.filter("letraMaiuscula", LetraMaiusculaFilter);

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
