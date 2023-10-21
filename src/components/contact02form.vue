<template>
    <div id="contact" class="container-green ssection">
        <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="true">
            <div class="title-primary">
                <img src="../assets/title-icon-primary.svg" alt class="icon-fluid-title" />
                <p>Contact Us</p>

            </div>
            <div class="philo-text">
                <p>Contact us today to discover how Ace EI can help your business harness the power of technology to drive
                    success.</p>
            </div>
        </div>

        <div class="center-box container">
            <div class="row-con">
                <form @submit.prevent="sendEmail">
                    <div class="row-contact">
                        <div class="col-logo">
                            <input type="text" id="name" name="name" placeholder="Full Name" v-model="name" required />
                        </div>
                    </div>

                    <div class="row-contact">
                        <div class="col-logo">
                            <input type="email" id="email" name="email" placeholder="Email Address" v-model="email"
                                required />
                        </div>
                    </div>

                    <div class="row-contact">
                        <div class="col-logo">
                            <textarea id="message" name="message" placeholder="Message" v-model="message"
                                required></textarea>
                        </div>
                    </div>
                    <div class="row-contact">
                        <input type="submit" value="SEND MESSAGE" />
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>
  
<script>
import emailjs from "emailjs-com";
export default {
    name: "Econtact",
    data() {
        return {
            name: "",
            email: "",
            message: "",
        };
    },
    methods: {
        sendEmail(e) {
            try {
                emailjs.sendForm(
                    "service_ns6o3h6",
                    "template_pcbsqwv",
                    e.target,
                    "user_QrwXBr6W1BoC1ahNPSXKb",
                    {
                        name: this.name,
                        email: this.email,
                        message: this.message,
                    }
                );
                alert(
                    "Thank you for contacting Ace-EI. We will get back to you shortly."
                );
            } catch (error) {
                console.log({ error });
            }
            // Reset form field
            this.name = "";
            this.email = "";
            this.message = "";
        },
    },
};
</script>
  
<style scoped>
.contact {
    background-color: #ece7dd;
    background-size: cover;
    display: block;
    width: 100%;
    height: auto;
    background-repeat: no-repeat;
    background-position: center;
}

.text {
    display: inline-block;
    width: 60%;
    margin-top: 2%;
    margin-left: 20%;
    margin-left: 20%;
    border-style: solid;
    border-color: black;
}

.contact h1 {
    font-family: Sitka Text;
    color: black;
    font-size: 20px;
}

.uvd-col .img {
    position: relative;
    vertical-align: middle;
    border-style: none;
}

.icons {
    box-sizing: border-box;
    display: block;
    flex-basis: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 16px;
    margin-left: 1%;
    margin-right: 1%;
    max-width: 23%;
    width: 43%;
    margin-bottom: 10px;
}

.row-con {
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
}

.row-contact {
    flex-basis: 100%;
    max-width: 100%;
}

.row {
    display: block;
    margin-top: 5%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 30%;
    height: auto;
    margin-right: 35%;
    margin-left: 35%;
}

.img-fluid {
    max-width: 100%;
    max-height: 100%;
}

input[type="text"],
input[type="email"],
textarea {
    background-color: white;
    padding: 12px 20px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    width: 70%;
    height: 70px;
    font-size: 16px;
    margin: 1% 15%;
    border: none;
    color: #2283b2;
}

textarea {
    height: 140px;
    resize: none;
}

input[type="text"]:focus,
textarea:focus {
    outline: none;
    border: 2px solid #2283b2;
}

input[type="submit"] {
    background-color: #175935;
    color: white;
    outline: none;
    border: none;
    padding: 15px 32px;
    font-size: 18px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    margin: 1% 15%;
}

input[type="submit"]:hover {
    background-color: #31BE7D;
}

@media screen and (max-width: 800px) {
    .row {
        width: 50%;
        margin-right: 25%;
        margin-left: 25%;
    }
}

@media screen and (max-width: 512px) {
    .row {
        width: 70%;
        margin-right: 15%;
        margin-left: 15%;
    }
}
</style>