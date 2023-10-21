<template>
    <div id="container" class="container ssection">
        <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="true">
            <div class="philo-text">
                <p>If you are a problem solver with a passion for technical consulting, we hope you’ll be willing to join
                    our team. Our dynamic work environment is designed to help our team members achieve their full potential
                    and we offer a range of exciting opportunities in areas such as strategy, operations, finance, and
                    technology.
                    <br><br>
                <table>
                    <tr>
                        <td>We are looking for individuals who are:</td>
                    </tr>
                    <tr>
                        <td>• Passionate about consulting and delivering exceptional results for clients</td>
                    </tr>
                    <tr>
                        <td>• Creative and innovative problem solvers </td>
                    </tr>
                    <tr>
                        <td>• Excellent communicators with strong interpersonal skills</td>
                    </tr>
                    <tr>
                        <td>• Driven, self-motivated, and eager to take on new challenges</td>
                    </tr>
                </table>
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
.span-bold {
    font-weight: bold;
    color: #175935;

}

.philo-text {
    padding: 4% 0% 0% 0%;
}

table,
th,
td {
    text-align: left;
}</style>