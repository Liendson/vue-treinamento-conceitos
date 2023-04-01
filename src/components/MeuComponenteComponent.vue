<script>
export default {
  props: {
    variavelDoComponente: {
      type: String,
    }
  },
  methods: {
    emitirValorDaVariavel() {
      this.$emit("ValorEmitido", "Valor");
    }
  },
  watch: {
    variavelDoComponente(value) {
      this.$emit("input", value);
    }
  }
}
</script>

<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <slot></slot>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style>
</style>
