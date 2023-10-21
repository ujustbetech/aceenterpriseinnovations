<template>
    <div id="FrontView" class="FrontView">
        <div class="front-box">
            <div class="front-box-50">
                <div class="philo-text">
                    <p>
                        Our team has a wide range of skills, including software development, data analysis,
                        project planning, and project management and we are committed to using these talents
                        to deliver exceptional results to our clients. Our primary focus being on building lasting
                        partnerships to ensure our customers long-term success. <br> <br>
                        Explore our website to learn more about our expertise and the industries we serve, and
                        check out our public web applications to see how we've helped our clients achieve their
                        goals in the past.
                    </p>
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
    background-image: url("../assets/home4.png");
    width: 100%; 
    height: 60vh;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-position: center;
    background-color: #FFFCF4;
}

.img-nb {
    background: url("../assets/home4.png") no-repeat;
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
    background-image: url("../assets/home4_2.png");
  }
}
</style>
    