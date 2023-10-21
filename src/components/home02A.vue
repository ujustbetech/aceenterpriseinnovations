<template>
    <div id="FrontView" class="FrontView">
        <div class="front-box">
            <div class="front-box-50">
                <div class="philo-text">
                    <p>
                        Ace Enterprise Innovations specializes in Enterprise Engineering, which is the body of
                        knowledge, principles, and practices that involve managing complex systems of people,
                        resources, information, and technology.</p>
                </div>

            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'FrontView'
}
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.FrontView {
    background-image: url("../assets/home02A.png"); 
    width: 100%; 
    height: 60vh;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-position: center;
    background-color: #FFFCF4;
   /* height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center; */
} 

.img-nb {
    background: url("../assets/home02A.png") no-repeat;
    background-size: cover;
    padding: 50%;
    position: relative;
    background-size: contain;
}

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
@media screen and (max-width: 1024px) {
  .FrontView {
    background-image: url("../assets/home02A_2.png");
  }
}
</style>
    