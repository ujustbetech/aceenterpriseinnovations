<template>
    <div id="container" class="container-green ssection">
        <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="true">
            <div class="title-primary">
                <img src="../assets/title-icon-secondary.svg" alt class="icon-fluid-title" />
                <p>We Offer</p>

            </div>
            <div class="philo-text">
                <p>
                <table>
                    <tr>
                        <td>• A dynamic work environment that fosters growth and development</td>
                    </tr>
                    <tr>
                        <td>• Competitive salary and performance-based bonuses</td>
                    </tr>
                    <tr>
                        <td>• Opportunities for advancement and career growth</td>
                    </tr>
                    <tr>
                        <td>• A supportive and inclusive work culture</td>
                    </tr>
                </table>
                <br>
                If you are interested in pursuing a career with us, we invite you to browse the following career
                opportunities:
                </p>
                <div class="white-box"><br>
                    <p>Oops, unfortunately there are no current job opening. Please check back later.</p>
                </div>
                <p>
                    <br> <br>
                    Don’t see a position you like? Submit your resume and cover letter to our recruitment
                    team and they will review your application and reach out if they find a potential fit.
                    We look forward to hearing from you!
                    <br> <br> <br>
                    <span class="text-smaller">
                        We are an equal opportunity employer and value diversity at our company. We do not discriminate on
                        the basis of race, religion, color, national origin, gender, sexual orientation, age, marital
                        status, veteran status, or disability status
                    </span>
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
 
<style>
.white-box {
    background: white;
    height: 450px;
    padding: 0% 2%;
}

.white-box p {
    text-align: left;
}

.span-left {
    text-align: justify;
    color: red;
}

table,
th,
td {
    margin-left: 3%;
    text-align: left;
}

.text-smaller {
        font-size: 20px;
    }
@media screen and (max-width: 1024px) {
    .text-smaller {
        font-size: 15px;
    }
}

@media screen and (max-width: 768px) { 
    .text-smaller {
        font-size: 12px;
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