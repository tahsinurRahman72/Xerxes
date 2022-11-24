<template>
<div class="page-header min-vh-100 tourMessage" loading="lazy">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-7 d-flex justify-content-center flex-column flex-row">
          <h1 class="text-white mb-4">PDF-Guardian</h1>
          <p class="text-white opacity-8 lead pe-5 me-5">Protect Yourself from Malicious Threats </p>
        </div>
        <img src="https://media4.giphy.com/media/OUAu5C2eHKpCVBU2A7/giphy.gif?cid=ecf05e47odpdzq5n8mo1svaeofrzs0jgl8kljppg9p7qe0rw&rid=giphy.gif&ct=g" style="width: 600px; height: 500px; background-color:  #1d2024; float: left; margin-left: 0px">
      </div>
    </div>
  </div>
</template>
<style scoped>
.tourMessage{
  animation: tourMessage 1s;
  animation-direction: alternate;
}
@keyframes tourMessage {
  0%   {top: -100vw; opacity: 0%;}
  100%  {top: 0vw; opacity: 100%;}
}
</style>
