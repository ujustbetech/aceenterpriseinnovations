<template>
  <div id="FrontView" class="FrontView">
    <div class="front-box">
      <div class="front-box-50">
        <div class="icon">
          <img src="../assets/logo-aie-white.svg" alt class="icon-fluid" />
        </div>
        <p> Powering Efficiency </p>
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
  background-image: url("../assets/join01front.svg");
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;
  background-color: #FFFCF4;
}

.img-nb {
  background: url("../assets/join01front.svg") no-repeat;
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
</style>
    