<template>
    <div class="contact">
        <WBS01front />
        <WBS02Pricing /> 
        <Join00line />
        <Join03 />
    </div>
</template>
  
<script>
// @ is an alias to /src  
import Contact01front from '@/components/contact01front.vue';
import Contact02form from '@/components/contact02form.vue'; 
import WBS01front from '@/components/WBS01front.vue';
import WBS02Pricing from '@/components/WBS02Pricing.vue';

export default {
    name: 'HomeView',
    components: {
    Contact01front,
    Contact02form,
    WBS01front,
    WBS02Pricing
}
}
</script>

<style>
.container-green{
    background-color: #D0D9CD;
    border: transparent solid;

} 
</style>
  