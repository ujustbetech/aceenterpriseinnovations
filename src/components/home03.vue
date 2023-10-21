<template>
    <div id="FrontView" class="FrontView">
        <div class="front-box">
            <div class="front-box-50">
                <div class="philo-text">
                    <p>
                        At our core, we are a small business dedicated to helping our clients overcome big
                        industry challenges. It is this entrepreneurial spirit and our commitment to utilizing the
                        power of technology that allows us to deliver the complex solutions that define us.
                        Whether we're automating mundane tasks or creating integrated data management
                        tools, we prioritize supporting our clients' core goals to help them execute their work
                        more quickly and efficiently than they thought possible. </p>
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
    background-image: url("../assets/home03.png");
    width: 100%; 
    height: 60vh;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-position: center;
    background-color: #FFFCF4;
}


.img-nb {
    background: url("../assets/home03.png") no-repeat;
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
    background-image: url("../assets/home03_2.png");
  }
}
 </style>
    