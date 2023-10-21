<template>
    <div id="home" class="containerhome ssection">
        <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="true">
            <div class="title-primary">
                <img src="../assets/title-icon-primary.svg" alt class="icon-fluid-title" />
                <p>Our Industries</p>

            </div>
        </div>
        <div class="center-box aei-text-small">
            <div class="row">
                <!-- Customized Software Solutions  -->
                <div class="portfolio-box-1" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                    <div class="exp-col">
                        <div class="cont-img">
                            <h3>Aerospace</h3>
                            <div class="img">
                                <div class="img-aero">
                                </div>
                                <div class="middle">
                                    <div class="text">
                                        <p>We understand precision and efficiency are critical in the aerospace
                                            industry and to support these goals we offer the development of software
                                            solutions to
                                            both improve communication and streamline product lifecycles. Our aim being to
                                            support
                                            the information needs demanded by all phases of a product lifecycle from the
                                            initial
                                            design of new aviation equipment to its full-scale production to the maintenance
                                            and
                                            repair of existing aircraft. With the ability to create solutions which help
                                            aerospace
                                            organizations share insights, both in real-time and between cross-functional
                                            teams, we
                                            have the skills needed to allow your company to quickly and effectively achieve
                                            complex
                                            goals.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="portfolio-box-1" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                    <div class="exp-col">
                        <div class="cont-img">
                            <h3>Transportation </h3>
                            <div class="img">
                                <div class="img-trans">
                                </div>
                                <div class="middle">
                                    <div class="text">
                                        <p>In the transportation industry, time is money. That's why we offer our
                                            clients customized supply chain solutions designed to help transportation
                                            companies
                                            automate complex logistics, optimize supply chains, and employ analytics to
                                            simplify
                                            freight forecasting and inform predictive maintenance activities. From freight and logistics to
                                            asset
                                            tracking analytics, to the creation of predictive models, our team has the
                                            expertise
                                            required to create optimized solutions that meet the unique needs of
                                            transportation
                                            focused organizations.</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="row">
                <div class="portfolio-box-1-full" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                    <div class="exp-col">
                        <div class="cont-img">

                            <h3>Nuclear </h3>
                            <div class="img">
                                <div class="img-nuc">
                                </div>
                                <div class="middle">
                                    <div class="text">
                                        <p>We know the nuclear industry demands superior project management
                                            standards, standards required to ensure successful and timely completion of
                                            complex projects to the highest possible quality. This is why we pride ourselves on the
                                            ability to develop tools to help plan, execute, and monitor complex portfolios from
                                            inspection to completion. This includes the ability to manage resource demand, organize and
                                            optimize staff qualifications, mitigate risk, and improve both collaboration and
                                            communication. By leveraging these capabilities, organizations can more effectively support portfolio
                                            management and achieve both maximum efficiency and productivity during project execution.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

<style scoped> 
.middle {
     text-align: left;
     position: absolute;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     height: 100%;
     width: 100%;
     opacity: 0;
     transition: .5s ease;
 }

 .cont-img:hover .img-aero {
     opacity: 0.1;
 }

 .cont-img:hover .img-trans {
     opacity: 0.1;
 }

 .cont-img:hover .img-nuc {
     opacity: 0.1;
 }

 .cont-img:hover .middle {
     opacity: 1;
 }

 .text {
     color: #373F37;
     padding: 10% 5% 0% 5%;
 }
 
 .img-aero {
     background: url("../assets/home06aero.svg") no-repeat;
     background-size: cover;
     padding: 50%;
 }


 .img-trans {
     background: url("../assets/home06trans.svg") no-repeat;
     background-size: cover;
     padding: 50%;
 }

 .img-nuc {
     background: url("../assets/home06nuc.svg") no-repeat;
     background-size: cover;
     padding: 50%;

 }


 .exp-col .img {
     position: relative;
     vertical-align: middle;
     border-style: none;
 }


 .containerhome {
     background-color: #D0D9CD;
 }

 .row {
     display: block;
     margin-top: 5%;
     display: flex;
     flex-wrap: wrap;
     box-sizing: border-box;
     width: 80%;
     margin: 0% 10%;
     height: auto;
 }

 .exp-col p {
         font-size: 20px;
     }
 .portfolio-box-1 {
     box-sizing: border-box;
     display: block;
     flex-basis: 46%;
     flex-grow: 0;
     flex-shrink: 0;
     font-size: 16px;
     margin-left: 2%;
     margin-right: 2%;
     line-height: 24px;
     max-width: 46%;
     width: 240px;
     margin-bottom: 50px;
 }

 .portfolio-box-1-full {
     box-sizing: border-box;
     display: block;
     flex-basis: 96%;
     flex-grow: 0;
     flex-shrink: 0;
     font-size: 16px;
     margin-left: 25%;
     margin-right: 25%;
     line-height: 24px;
     max-width: 50%;
     width: 240px;
     margin-bottom: 50px;
 }

 @media screen and (max-width: 1024px) {
     .portfolio-box-1 {
         max-width: 96%;
         flex-basis: 96%;
     }

     .exp-col p {
         font-size: 20px;
     }

     .portfolio-box-1-full {
         box-sizing: border-box;
         display: block;
         flex-grow: 0;
         flex-shrink: 0;
         font-size: 16px;
         margin-left: 2%;
         margin-right: 2%;
         line-height: 24px;
         max-width: 96%;
         flex-basis: 96%;
         width: 240px;
         margin-bottom: 50px;
     }
 }

 @media screen and (max-width: 650px) {
     .exp-col p {
         font-size: 15px;
     }
 }

 @media screen and (max-width: 400px) {
     .exp-col p {
         font-size: 10px;
     }
 }</style>