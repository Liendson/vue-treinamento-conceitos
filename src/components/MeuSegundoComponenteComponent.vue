<script>
export default {
  props: {
    variavelDoComponente: {
      type: String,
      default: "Valor Padrão"
    }
  },
}
</script>

<template>
  <div>
    {{ variavelDoComponente }}
  </div>
</template>

<style>
</style>
