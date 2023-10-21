<template>
  <div class="home">
    <home01front />
    <home02ACE /> 
    <home05exp />
    <home06ind />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import home01front from '@/components/home01front.vue'
import home02ACE from '@/components/home02ACE.vue' 
import home05exp from '@/components/home05exp.vue'
import home06ind from '@/components/home06ind.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld, home01front, home02ACE,   home05exp, home06ind
  }
}
</script>

<style>
 @media screen and (max-width: 1024px) { 
}

@media screen and (max-width: 768px) {  }

@media screen and (max-width: 650px) { 
}

@media screen and (max-width: 400px) {  }
 </style>
