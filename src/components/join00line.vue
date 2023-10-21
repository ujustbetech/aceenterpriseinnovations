<template>
    <div class="first">
      <div class="center-box">
        <div class="top"></div>
        <div class="bot"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AAspace",
    props: {
      msg: String,
    },
  };
  </script>
  
  <style scoped>
  .top {
    height: 25%;
    width: 100%;
    background-color: #fbfaf8;
    margin-top: -5px;
    position: absolute;
    -webkit-clip-path: polygon(0 0, 100% 0, 150% 0%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 150% 0%, 0 100%);
  }
  .bot {
    height: 25%;
    width: 100%;
    bottom: -5px;
    background-color: #D0D9CD;
    position: absolute;
    -webkit-clip-path: polygon(150% 0, 100% 100%, 0 100%, 0 80%);
    clip-path: polygon(150% 0, 100% 100%, 0 100%, 0 80%);
  }
  .center-box {
    height: 350px;
    background-image: url("../assets/philosophy-line.svg");
    background-position: center center;
    background-size: cover;
    position: relative;
  }
  .box {
    position: relative;
    height: 50vh;
    width: 100%;
    background-color: #fbfaf8;
  }
  @media (min-width: 1024px) {
    .center-box {
      background-attachment: fixed;
    }
  }
  </style>