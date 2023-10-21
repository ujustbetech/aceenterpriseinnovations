<template>
    <div class="philosophy">
        <philosophy01front />
        <philosophy02 />
        <Philosophy03mission />
        <philosophy00line />

        <Philosophy04sol />
        <Philosophy05res />


    </div>
</template>
  
<script>
// @ is an alias to /src 
import philosophy01front from '@/components/philosophy01front.vue'
import philosophy02 from '@/components/philosophy02.vue' 
import Philosophy03mission from '@/components/philosophy03mission.vue'
import Philosophy04sol from '@/components/philosophy04sol.vue'
import Philosophy05res from '@/components/philosophy05res.vue'
import philosophy00line from '@/components/philosophy00line.vue'

export default {
    name: 'HomeView',
    components: {
    philosophy01front,
    philosophy02, 
    Philosophy03mission,
    Philosophy04sol,
    Philosophy05res, 
    philosophy00line, 

}
}
</script>

<style>
.container-green{
    background-color: #D0D9CD;
    border: transparent solid;

}
.philo-text {
  margin: 2% 10% 5% 10%;
}
</style>
  