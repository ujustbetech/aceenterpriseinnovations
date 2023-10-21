<template>
    <div class="contact">
        <Contact01front />
        <Contact02form /> 
        <Join00line />
        <Join03 />
    </div>
</template>
  
<script>
// @ is an alias to /src  
import Contact01front from '@/components/contact01front.vue';
import Contact02form from '@/components/contact02form.vue'; 

export default {
    name: 'HomeView',
    components: {
    Contact01front, 
    Contact02form
}
}
</script>

<style>
.container-green{
    background-color: #D0D9CD;
    border: transparent solid;

}

</style>
  