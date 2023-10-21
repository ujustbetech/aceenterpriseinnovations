<template>
    <div class="philosophy">
        <Join01front />
        <Join02 /> 
        <Join00line />
        <Join03 />
    </div>
</template>
  
<script>
// @ is an alias to /src  
import Join00line from '@/components/join00line.vue';
import Join01front from '@/components/join01front.vue'
import Join02 from '@/components/join02.vue'
import Join03 from '@/components/join03.vue'

export default {
    name: 'HomeView',
    components: {
    Join01front,
    Join02,
    Join03,
    Join00line
}
}
</script>

<style>
.container-green{
    background-color: #D0D9CD;
    border: transparent solid;

}
 
</style>
  