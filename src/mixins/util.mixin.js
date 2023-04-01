import MeuSegundoComponenteComponent from '@/components/MeuSegundoComponenteComponent.vue';

export default {
  data: () => {
    return {
      $variavelDoMixin: "Valor da variável do mixin",
      $segundaVariavelDoMixin: "Valor da segunda variável do mixin",
    }
  },
  methods: {
    $metodoDoMixin() {
      console.log("Esse método veio do mixin!")
    }
  },
  components: {
    MeuSegundoComponenteComponent
  },
}