<template>

    <div class="loader"></div>

</template>

<style>
.loader {
  width: 80px;
  height: 40px;
  background: #83def1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}

.loader:before {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  height: 20px;
  width: 30px;
  background: 
    radial-gradient(farthest-side,#000 50%,#fff 52% 80%,#0000) 78% 22%/5px 5px, 
    radial-gradient(farthest-side, #fb4f05 92%,#0000) right/80% 100%, 
    radial-gradient(farthest-side at left,#fb4f05 92%,#0000) left/35% 80%;
  background-repeat: no-repeat;
  clip-path: polygon(0 0,100% 0,100% 40%,81% 50%,100% 60%,100% 100%,0 100%,20% 50%);
  animation: l15 1.5s infinite;
}

@keyframes l15 {
  0%   {transform: translate(-100%)}
  40%  {transform: translate(15px)}
  80%,
  100% {transform: translate(100px)}
}
</style>