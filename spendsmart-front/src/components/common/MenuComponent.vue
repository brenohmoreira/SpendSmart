<template>
  <aside class="menu">
    <img src="../../assets/img/default-user-photo.png" class="profile-photo">
    <p> Seja bem-vindo(a)! </p>
    <ul>
      <li class="selected" @click="$router.push('/')">
        <div style="gap: 3px;">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve"> <defs> </defs> <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(45.02412451361867 45.024124513618645) scale(1.83 1.83)"> <path d="M 35.813 54.013 H 4.514 C 2.025 54.013 0 51.987 0 49.498 V 4.514 C 0 2.025 2.025 0 4.514 0 h 31.299 c 2.489 0 4.514 2.025 4.514 4.514 v 44.984 C 40.328 51.987 38.303 54.013 35.813 54.013 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/> <path d="M 35.813 90 H 4.514 C 2.025 90 0 87.975 0 85.485 V 69.741 c 0 -2.489 2.025 -4.515 4.514 -4.515 h 31.299 c 2.489 0 4.514 2.025 4.514 4.515 v 15.744 C 40.328 87.975 38.303 90 35.813 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/> <path d="M 85.485 90 H 54.187 c -2.489 0 -4.515 -2.025 -4.515 -4.515 V 40.501 c 0 -2.489 2.025 -4.514 4.515 -4.514 h 31.299 c 2.489 0 4.515 2.025 4.515 4.514 v 44.984 C 90 87.975 87.975 90 85.485 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/> <path d="M 85.485 24.773 H 54.187 c -2.489 0 -4.515 -2.025 -4.515 -4.515 V 4.514 C 49.672 2.025 51.697 0 54.187 0 h 31.299 C 87.975 0 90 2.025 90 4.514 v 15.745 C 90 22.748 87.975 24.773 85.485 24.773 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/> </g> </svg>
          <span> Dashboard </span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M10 17l5-5-5-5v10z" fill="#000000"/>
        </svg>
      </li>
      <li @click="$router.push('/wallet')">
        <div>
          <svg style="width: 25px; height: auto; position: relative; top: -2px;" fill="#000000" height="500px" width="500px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"> <g> <g> <path d="M361.739,278.261c-27.664,0-50.087,22.423-50.087,50.087s22.423,50.087,50.087,50.087H512V278.261H361.739z M361.739,345.043c-9.22,0-16.696-7.475-16.696-16.696s7.475-16.696,16.696-16.696s16.696,7.475,16.696,16.696 S370.96,345.043,361.739,345.043z"/> </g> </g> <g> <g> <path d="M361.739,244.87h83.478v-50.087c0-27.619-22.468-50.087-50.087-50.087H16.696C7.479,144.696,0,152.174,0,161.391v333.913 C0,504.521,7.479,512,16.696,512H395.13c27.619,0,50.087-22.468,50.087-50.087v-50.087h-83.478 c-46.032,0-83.478-37.446-83.478-83.478C278.261,282.316,315.707,244.87,361.739,244.87z"/> </g> </g> <g> <g> <path d="M461.913,144.696h-0.158c10.529,13.973,16.854,31.282,16.854,50.087v50.087H512v-50.087 C512,167.164,489.532,144.696,461.913,144.696z"/> </g> </g> <g> <g> <path d="M478.609,411.826v50.087c0,18.805-6.323,36.114-16.854,50.087h0.158C489.532,512,512,489.532,512,461.913v-50.087H478.609z"/> </g> </g> <g> <g> <path d="M273.369,4.892c-6.521-6.521-17.087-6.521-23.609,0l-14.674,14.674l91.74,91.738h52.956L273.369,4.892z"/> </g> </g> <g> <g> <path d="M173.195,4.892c-6.521-6.522-17.086-6.522-23.608,0L43.174,111.304h236.435L173.195,4.892z"/> </g> </g> </svg>          
          <span style="margin-left: 10px;"> Carteira </span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M10 17l5-5-5-5v10z" fill="#000000"/>
        </svg>
      </li>
      <li @click="$router.push('/spents')">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
          <span style="margin-left: 3px;"> Gastos </span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M10 17l5-5-5-5v10z" fill="#000000"/>
        </svg>
      </li>
    </ul>
  </aside>
</template>

<script>
</script>

<style scoped>
  .menu {
    padding-top: 40px;
  }

  .menu p {
    text-align: center;
    margin-bottom: 20px;
  }

  .menu svg {
    width: 32px;
    height: auto;
  }

  .profile-photo {
    display: block;
    margin: 0 auto 20px auto;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    width: 100%;
    padding: 5px;
    cursor: pointer;
    transition: .3s;
  }

  li:hover {
    background-color: rgb(235, 235, 235);
  }
  
  li div {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .selected {
    background-color: #5678dd;
    color: white;
  }

  .selected:hover {
    background-color: #4466cc;
  }

  .selected svg path {
    fill: white !important;
  }
</style>