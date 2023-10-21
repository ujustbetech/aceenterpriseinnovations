<template>
    <div id="portfolio" class="portfolio ssection">

        <div class="philo-text">
            <p>For our clients in the nuclear sector we developed a WBS creation tool which automatically generates
                importable P6 input files using standardized WBS/Schedule Fragnets. <br> <br> <span class="price-smaller">Try out our free Beta Version of the software here:</span> 
            </p>
        </div>
        <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="true">
            <router-link to="/wbscreationtool/projectinfo" class="button button1">Create Project</router-link>
        </div>
        <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="true">
            <div class="title-primary">
                <img src="../assets/title-icon-primary.svg" alt class="icon-fluid-title" />
                <p>Find the Right Plan</p>
            </div>
        </div>
        <div class="center-box ">
            <div class="row aei-text-small">
                <div class="portfolio-box-1 exp-col-1" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                    <div class="icon aei-text">
                        <img src="../assets/pricing-kite.svg" alt class="icon-fluid" />

                    </div>
                    <h4>Starter*</h4>
                    <p>(For independent contractors)</p>

                    <p class="aie-light-p-price">$1250/quarter</p>
                    <form @submit.prevent="">
                        <div class="row-contact">
                            <input type="submit" value="Get Started" class="submit1" />
                        </div>
                    </form>

                    <p class="text-left"><br>
                        - 10 P6 downloads per quarter
                        <br> - 10% discount on any usage beyond this limit
                        <br> - No customization included
                        <br> - Additional training or support charged on a per-hour basis
                        <br> - No commitment required, cancel at any time
                    </p>
                </div>
                <div class="portfolio-box-1 exp-col-2" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                    <div class="icon aei-text">
                        <img src="../assets/pricing-plane.svg" alt class="icon-fluid" />
                    </div>
                    <h4>Advanced*</h4>
                    <p class="aie-light-p">(For small to medium size business)</p>
                    <p class="aie-light-p aie-light-p-price">$2850/quarter</p>
                    <form @submit.prevent="">
                        <div class="row-contact">
                            <input type="submit" value="Get Started" class="submit2" />
                        </div>
                    </form>
                    <p class="text-left aie-light-p"> <br>
                        - 50 P6 downloads per quarter
                        <br> - 20% discount on any usage beyond this limit
                        <br> - Minimum 1 year commitment
                        <br> - Free setup of one custom WBS structure
                        <br> - One free training session provided upon signup
                    </p>
                </div>
                <div class="portfolio-box-1 exp-col-3" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                    <div class="icon aei-text">
                        <img src="../assets/pricing-rocket.svg" alt class="icon-fluid" />
                    </div>
                    <h4>Elite Pro*</h4>
                    <p class="aie-light-p">(For large enterprise)</p>
                    <p class="aie-light-p aie-light-p-price">$16,150/month</p>
                    <form @submit.prevent="">
                        <div class="row-contact">
                            <input type="submit" value="Get Started" class="submit1" />
                        </div>
                    </form>
                    <p class="text-left aie-light-p"> <br>
                        - Unlimited P6 downloads
                        <br> - Minimum 1 year commitment
                        <br> - Up to 3 free training sessions on signup
                        <br> - Setup of multiple customized WBS structure templates
                        <br> - Full time 9-5 support from a dedicated team member
                        <br> - Tool customization options available
                        <br> - Integration with company website
                        <br> - Free setup of accounts for up to 10 vendors or suppliers
                    </p>
                </div>
            </div>
            <p>*Pricing is for the 2023 & 2024 calendar years after which a 5% year over year rate escalation will be
                applied</p>
            <div class="philo-text">
                <p>Contact us at Sales@AceEnterpriseInnovations.com to signup or obtain further information</p><br>
                <p>No P6 License, no problem! <br>
                    Our scheduling support team will work with you to finalize your P6
                    schedule based on the tools output <br>(rates starting as low as $97.25/h).
                </p>
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
input[type="submit"] {
    color: white;
    outline: none;
    border: none;
    padding: 15px 32px;
    font-size: 18px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    margin: 1% 15%;
}

.submit2 {
    background-color: #175935;
}

.submit1 {
    background-color: #30BF7D;
}

.button {
    background-color: #31BE7D;
    font-family: Corbel, FangSong, Euphemia, Sitka Text;
    border: none;
    color: transparent;
    padding: 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 30px;
    margin: -60px 0px 0px 0px;
    transition-duration: 0.4s;
    cursor: pointer;
    font-weight: bold; 
}

.button1 {
    background-color: transparent;
    color: #31BE7D;
    border: 7px solid #31BE7D;
}

.button1:hover {
    background-color: #31BE7D;
    color: white;
}


.row {
    display: block;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 80%;
    margin: 2% 10%;
    height: auto;
}

.portfolio-box-1 {
    box-sizing: border-box;
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 16px;
    margin-left: 1%;
    margin-right: 1%;
    line-height: 24px;
    margin-bottom: 50px;
    max-width: 31.333%;
    flex-basis: 31.333%;
    border: black solid;
    border-radius: 0 0 4px 4px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.5);
    position: relative; 
    border-style: none;
    padding: 3%;
}


.aei-text p {
    text-align: left;
}

.icon { 
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px 20px 10px;

}

.icon-fluid {
    max-width: 55%;
    max-height: 55%;
    margin-left: 5%; 
}

.icon p {
    display: inline;
    text-align: left;
    padding: 0;
    font-family: Tahoma;
    color: #175935;
    margin: 20px 1px 10px 10px;
    font-size: 25px;
}

.exp-col {
    background: #DAE4DA;
}


.exp-col-1 {
    background: #DAE4DA;
}

.exp-col-2 {
    background: #30BF7D;
    color: #DAE4DA;
}

.exp-col-3 {
    color: #DAE4DA;
    background: #175935;
}

.aie-light-p {
    color: #DAE4DA;
}

.aie-light-p-price {
    font-weight: bolder;
    font-size: 25px;
}

@media screen and (max-width: 1024px) { 
    .portfolio-box-1 { 
    max-width: 48%;
    flex-basis: 48%; 
}}

@media screen and (max-width: 768px) { 
    .portfolio-box-1 { 
    max-width: 98%;
    flex-basis: 98%; 
}}

@media screen and (max-width: 650px) { 
    .text-smaller {
        font-size: 11px;
    }}

@media screen and (max-width: 400px) { 
    .text-smaller {
        font-size: 10px;
    }}
</style>