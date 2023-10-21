<template>
    <div id="portfolio" class="portfolio ssection">
        <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="true">
            <div class="title-primary">
                <img src="../assets/title-icon-secondary.svg" alt class="icon-fluid-title" />
                <p>Our Expertise</p>

            </div>
        </div>
        <div class="center-box ">
            <div class="row aei-text-small">

                <!-- Customized Software Solutions  -->
                <div class="portfolio-box-1" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                    <div class="exp-col">
                        <div class="icon">
                            <img src="../assets/home05cogs.svg" alt class="icon-fluid-card" />
                            <p>Customized Software Solutions </p>
                        </div>
                        <p>
                            Our team of expert developers and engineers are skilled in
                            developing software applications that are tailored to our clients&#39; existing business
                            processes,
                            and can be fully and easily integrated into existing management and accounting platforms
                            including complex tools like Oracle and SAP. We pride ourselves on our ability to design simple
                            and straightforward solutions to overcome the needless complexity of these applications while
                            ensuring your company&#39;s data is accurate, consistent, and reliable. Our customized solutions
                            are scalable, secure, and user-friendly, providing our clients with the tools they need to
                            succeed
                            in today&#39;s fast-paced business environment.
                        </p>
                    </div>
                </div>

                <!-- Scheduling Support   -->
                <div class="portfolio-box-1" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                    <div class="exp-col">
                        <div class="icon">
                            <img src="../assets/home05sched.svg" alt class="icon-fluid-card" />
                            <p>Scheduling Support </p>

                        </div>
                        <p>
                            We understand that scheduling can be complex and time-consuming,
                            which is why we offer support services to help our clients streamline their
                            scheduling
                            processes and improve efficiency. Our staff are experts in tools such as
                            Oracle Primavera P6 and Microsoft Project and can not only create and update schedules but
                            do so in a way that provides meaningful insights, including resource demand profiles, cost and
                            schedule performance, and other efficiency metrics important for any company&#39;s
                            success. <br> <br>
                            More importantly, our philosophy is to encourage companies to work smarter, not
                            harder. Our goal is to work closely with our clients to develop customized scheduling solutions

                            that not only meet their unique needs, but also reduce - or ideally, eliminate - the need for
                            expensive or redundant scheduling support labor.
                        </p>
                    </div>
                </div>

                <!-- Project Management  -->
                <div class="portfolio-box-1" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                    <div class="exp-col">
                        <div class="icon">
                            <img src="../assets/home05pm.svg" alt class="icon-fluid-card" />
                            <p>Project Management </p>

                        </div>
                        <p>Effective project management is essential to the success of any
                            business, and here at Ace we strive to ensure that every project we undertake, no matter how
                            small, gets completed on time, on budget, and to the satisfaction of our clients. As such, we
                            specialize in project management services that are designed to help our clients deliver their
                            projects as efficiently as possible and to the highest quality standards. We offer a team of
                            experienced project managers who are skilled in managing our clients' most complex projects, 
                            who are capable of supporting projects from inception to completion, and who can be seconded 
                            into your own organization as required.
                        </p>
                    </div>
                </div>

                <!-- Resource/Material Management   -->
                <div class="portfolio-box-1" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                    <div class="exp-col">
                        <div class="icon aei-text">
                            <img src="../assets/home05res.svg" alt class="icon-fluid-card" />
                            <p>Resource/Material Management</p>

                        </div>
                        <p>
                            Managing resources and materials can be a challenging
                            task. At Ace, we specialize in resource and material management services that are designed to
                            help our clients optimize their resource utilization, reduce waste, and improve their bottom
                            line.
                            These include consulting services, data integration solutions and the creation of complex
                            models including business processes models, information flows, material flows, and operations
                            focused financial models. Our team of experts work closely with our clients to develop
                            customized solutions that meet their unique needs while helping them achieve their business
                            objectives. Whether it's managing inventory, optimizing supply chains, or reducing waste our
                            expertise and experience make us the ideal partner for clients seeking resource or material
                            management support.
                        </p>
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
.row {
    display: block;
    margin-top: 5%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 80%;
    margin: 2% 10% 0% 10%;
    height: auto;
}

.portfolio-box-1 {
    box-sizing: border-box;
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 16px;
    margin-left: 2%;
    margin-right: 2%;
    line-height: 24px;
    margin-bottom: 50px;
    max-width: 46%;
    flex-basis: 46%;
    background: #DAE4DA;
    border-radius: 0 0 4px 4px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.5);
    position: relative;
    border-style: none;
    padding: 1% 2%;
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px 20px 10px;

}

.icon-fluid-card {
    max-width: 35%;
    max-height: 35%;
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

@media screen and (max-width: 1024px) {
    .portfolio-box-1 {
        max-width: 96%;
        flex-basis: 96%;
    }

    .exp-col p {
        font-size: 20px;
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