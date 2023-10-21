/********************************************************
*	      Project name: WBS_Creator					              *
*	      Project by: Nesabyte						                *
*	      Project for: McLean Innovations                 * 
*	      DATE: Dec 2022										              *
********************************************************/
<!--template>
  <div id="app">
    <nav>
      <router-link to="/projectinfo">Project Info</router-link> |
      <router-link to="/">Resource Setup</router-link> |
      <router-link to="/wbstable">WBS Table</router-link>
    </nav>
    <router-view />
  </div>
</template-->

<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style="opacity: 0.8;">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <router-link class="navbar-brand" to="/">
        <a class="navbar-brand" href="#">
          <img src="./assets/logo-aie.svg" alt="Logo" width="150" height="50" class="d-inline-block align-text-top me-2">
        </a>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/philosophy">Our Philosophy</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/joinus">Join Our Team</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contactus">Contact Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/wbscreationtool">WBS Creation Tool</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
    <!--FooterView /-->
  </div>
</template>



<style>
.wbs_nav {
  padding-top: 100px;
}

.icon-wbs-logo {
  max-width: 85%;
  max-height: 75%;
  padding: 5%;
  /*border: pink solid;*/
}

.hot-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /*border: solid green 1px;*/
}

.button-row {
  margin: 5px 0px 30px 0px;
}

.button-margin {
  margin: 0 6px;
}

.setup_view {
  /*border: solid red 1px;*/
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.handsontable .WBS_sub_css {
  background: #FFE699;
}

.handsontable .WBS_title_css {
  background-color: #005730;
  font-weight: bolder;
  color: white;
}

.front {
  width: 100%;
  height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;
  /*border: solid red;
  overflow-x: scroll;*/
}

.tests {
  width: 100%;
  height: 70vh;
  overflow: auto;
  white-space: nowrap;
  /*border: solid yellow;*/
}

.btn_WBS {
  position: block;
  margin: auto;
  width: 50%;
  padding-top: 15px;
  padding-bottom: 15px;
  bottom: 24%;
  /*border: solid blue;*/

}

body .handsontable .incomplete_cell {
  background: orange
}

body .handsontable .complete_cell {
  background: rgb(155, 201, 165)
}

table tr td:nth-child(3) {
  text-align: left;
}

.handsontable tr:first-child {
  background-color: red;
}

body .handsontable .firstrow {
  background: black;
}

.icon2 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px 0px 10px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 10px 20px 10px;
}

.icon-fluid {
  max-width: 85%;
  max-height: 85%;
  min-width: 80%;
}

.aei-title {
  margin: 0% 10% 5% 10%;
}

.aei-title p {
  font-family: Corbel, FangSong, Euphemia, Sitka Text;
  color: #373F37;
  font-size: 20px;
  text-align: center;
  line-height: normal;

}



.aei-text p {
  font-family: Corbel, FangSong, Euphemia, Sitka Text;
  color: #373F37;
  font-size: 25px;
  text-align: center;
  line-height: normal;
}

.aei-text-small p {
  font-family: Corbel, FangSong, Euphemia, Sitka Text;
  color: #373F37;
  font-size: 20px;
  text-align: center;
  line-height: normal;
}

.aei-text-smaller p {
  font-family: Corbel, FangSong, Euphemia, Sitka Text;
  color: #373F37;
  font-size: 15px;
  text-align: center;
  line-height: normal;
}

.price-smaller {
  font-family: Corbel, FangSong, Euphemia, Sitka Text;
  color: #373F37;
  font-size: 20px;
  text-align: center;
  line-height: normal;
  border: transparent solid;

}

.span-bold {
  font-weight: bold;
  color: #175935;
}

.navbar {
  background-color: rgba(255, 255, 255, 0.3);
}

.navbar-nav .nav-item {
  margin-right: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0%;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.title-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3% 0% 0% 0%;
}

.title-primary p {
  display: inline;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 3em;
  margin: 1%;
  white-space: nowrap;
  text-align: center;
  color: #175935;
}

.icon-fluid-title {
  max-width: 5%;
  max-height: 15%;
  margin-left: 5%;
}

.container-green {
  background-color: #D0D9CD;
  border: transparent solid;

}

.button {
  background-color: #31BE7D;
  /* Green */
  font-family: Corbel, FangSong, Euphemia, Sitka Text;

  border: none;
  color: transparent;
  padding: 28px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 70px;
  margin: 40px 2px;
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

.portfolio-box-1 {
  box-sizing: border-box;
  display: block;
  flex-basis: 33.3333%;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 16px;
  margin-left: 2%;
  margin-right: 2%;
  line-height: 24px;
  max-width: 29.3333%;
  width: 240px;
  margin-bottom: 50px;
}

.front-box {
  display: block;
  margin-top: 0%;
  margin-bottom: 0%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  /*border: #42b983 solid;*/
}

.front-box-50 {
  box-sizing: border-box;
  display: block;
  max-width: 55%;
  flex-basis: 55%;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 16px;
  margin: 0% 2%;
  line-height: 24px;
  padding-top: 10%;
}

.front-box-50 p {
  font-size: 4.5em;
  color: #42b983;
  font-family: Oswald, Corbel, FangSong, Euphemia, Sitka Text;
}

.front-box-40 {
  box-sizing: border-box;
  display: block;
  max-width: 32%;
  flex-basis: 32%;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 16px;
  margin-left: 2%;
  margin-right: 2%;
  line-height: 24px;
  width: 240px;
  border: violet solid;
  /**/
  float: right;

}

.philo-text {
  margin: 5% 10% 5% 10%;
}

.philo-text p {
  font-family: Corbel, FangSong, Euphemia, Sitka Text;
  color: #373F37;
  font-size: 1.5em;
  text-align: center;
  line-height: normal;
}

@media screen and (max-width: 1024px) {
  /*************  front ************/

  .front-box-50 {
    padding: 25% 0%;
    max-width: 90%;
    flex-basis: 90%;
    text-align: center;
  }

  .front-box-50 p {
    font-size: 4em;
  }

  .icon {
    margin: 10px 70px 20px 70px;
  }

  /*************  philo ************/

  .philo-text p {
    font-size: 1.3em;
  }

  .philo-text {
    padding-top: -20%;
    padding: 0px;
  }

}

@media screen and (max-width: 768px) {
  .front-box-50 {
    padding: 35% 0%;
  }

  .front-box-50 p {
    font-size: 3em;
  }

  /*************  philo ************/

  .philo-text p {
    font-size: 1.1em;
  }

  .title-primary p {
    font-size: 2em;
  }
}

@media screen and (max-width: 650px) {

  .front-box-50 {
    padding: 35% 0%;
  }

  .front-box-50 p {
    font-size: 2em;
  }

  /*************  philo ************/
  .philo-text p {
    font-size: 1.0em;
  }

  .title-primary p {
    font-size: 1.3em;
  }
}

@media screen and (max-width: 400px) {
  .front-box-50 {
    padding-top: 25% 0%;
  }

  /*************  philo ************/
  .philo-text p {
    font-size: .8em;
  }

  .title-primary p {
    font-size: 1em;
  }
}
</style>