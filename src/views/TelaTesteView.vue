<script>
export default {
  data: () => {
    return {
      segundaVariavel: "Valor",
      listaDePessoas: [
        "Jeofton",
        "Jhonatta",
        "Francisco",
        "Daniel"
      ]
    }
  },
  computed: {
    primeiraVariavel() {
      return `${this.segundaVariavel} computado`;
    },
    listaComputada() {
      return [
        "João",
        "Matheus",
        "Patrick",
        "Emanuel"
      ].map((item, i) => {
        return `${i + 1}: ${item}`;
      })
    }
  },
  methods: {
    meuMetodo(parametro) {
      if (parametro) {
        return parametro;
      } else {
        return "Não tem parametro";
      }
    },
    meuSegundoMetodo(parametro) {
      return parametro;
    },
    meuMetodoFor() {
      const listaDePessoas = [
        "João",
        "Matheus",
        "Patrick",
        "Emanuel"
      ]
      listaDePessoas.forEach((pessoa, i) => {
        console.log(pessoa)
      })
    },
    metodoParaDefinirCor(parametro) {
      if (parametro) {
        return "nome-vermelho";
      } else {
        return "nome-azul";
      }
    },
    metodoClickBotao($event) {
      alert("O botão foi clicado!");
      console.log($event)
    },
    metodoObterTecla($event) {
      console.log($event.key)
    }
  },
  beforeMount() {
    console.log("A tela foi quase montada!");
  },
  mounted() {
    console.log("A tela foi montada!");
    this.meuMetodoFor();
  },
  beforeDestroy() {
    console.log("A tela foi quase destruida!");
  },
  destroyed() {
    console.log("A tela foi destruida!");
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
}
</script>

<template>
  <div>
    <div>
      Minha Primeira Rota
    </div>
    <div>
      O valor da primeira variável é: {{ primeiraVariavel }} <br>
      O valor da segunda variável é: {{ segundaVariavel }}
    </div>
    <div>
      {{ meuMetodo("Agora tem um parametro") }}
    </div>
    <div>
      {{ meuSegundoMetodo("Parametro") }}
    </div>
    <div v-if="meuSegundoMetodo()">
      Mostrar esse conteúdo apenas se o if for verdadeiro
    </div>
    <div v-else-if="meuSegundoMetodo(1)">
      Mostrar esse conteúdo apenas se o else-if for verdadeiro
    </div>
    <div v-else>
      Mostrar esse conteúdo apenas se cair no else
    </div>
    <br>
    <div v-for="pessoa in listaComputada">
      {{ `${pessoa}` }}
    </div>
    <br>
    <div :class="metodoParaDefinirCor(1)">
      Conteudo do texto com a classe estática
    </div>
    <br>
    <button @click="metodoClickBotao($event)">Botão Teste</button>
    <input @keypress.enter="metodoObterTecla($event)"/>
    <br>
    <form>
      <button @click.prevent.submit="metodoClickBotao($event)">Botão Teste</button>
    </form>
    <input v-model="segundaVariavel"/>
    <div>
      O valor da segunda variável é: {{ segundaVariavel }}
    </div>
  </div>
</template>

<style scoped>
.nome-vermelho {
  color: red;
}
.nome-azul {
  color: blue;
}
</style>