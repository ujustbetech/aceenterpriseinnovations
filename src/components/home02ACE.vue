<template>
    <div class="view">
        <div class="row">
            <div class="text-left">
                <div class="philo-text">
                    <p>  Ace Enterprise Innovations specializes in Enterprise Engineering, which is the body of knowledge, principles, and practices that involve managing complex systems of people, resources, information, and technology.
                    </p>
                </div>
            </div>
            <div class="image image1">
                <img src="../assets/home02A.png" alt="Image 1">
            </div>
        </div>
        <div class="row">
            <div class="image image2">
                <img src="../assets/home03.png" alt="Image 2">
            </div>
            <div class="text-right">
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
        <div class="row">
            <div class="text-left">
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
            <div class="image image3">
                <img src="../assets/home4.png" alt="Image 3">
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "ProjectView",
    props: {
        msg: String,
    },
};
</script>

<style scoped> .view {
     width: 100%;
     position: relative;
     background-position: center;
 }
 
 .row {
     display: block;
     display: flex;
     /*justify-content: center;
     align-items: center;*/
     width: 100%;
     margin: 1% 0%;
     position: relative;

 }

 .text-right {
     position: absolute;
     top: 1%;
     padding: 0% 0% 0% 40%;
 }

 .text-left {
     position: absolute;
     top: 1%;
     padding: 0% 35% 0% 0%;
 }

 .image {
     flex: 1;
     display: flex;
     justify-content: center;
     align-items: center;
     margin: 2%;
     padding: 0%;
 }

 .image img {
     max-width: 100%;
     max-height: 100%;
 }

 @media screen and (max-width: 1024px) {
     .image1 img {
         content: url("../assets/home02A_2.png");
     }

     .image2 img {
         content: url("../assets/home03_2.png");
     }

     .image3 img {
         content: url("../assets/home4_2.png");
     }

     .text-right {
         top: 15%;

         padding: 0% 0% 0% 0%;
     }

     .text-left {
         top: 15%;

         padding: 0% 0% 0% 0%;
     }
 }

 /***********************************************************************/
</style>