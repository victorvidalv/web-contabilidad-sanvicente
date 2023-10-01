

<template>
    <div>
    
        <div class="max-w-[85rem] px-4  sm:px-6 lg:px-8 mx-auto" @click="mostrarContenido = !mostrarContenido">
          
    
        <span data-aos="fade" data-aos-duration="1000"
                            class="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 bg-blue-600 text-white"
                           >Ver mapa 
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-expand" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8ZM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2ZM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10Z"/>
    </svg>
                        </span>
        </div>
    
          <!--  -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" v-if="mostrarContenido">
        <svg width="100%" height="100%" viewBox="0 0 835 440" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g transform="matrix(1.00601,0,0,0.794702,-494.149,-65.9378)">
        <rect x="681.643" y="230.51" width="447.789" height="251.473" style="fill:white;stroke:black;stroke-width:0.37px;stroke-dasharray:0.37,0.37;"/>
    </g>
    <g transform="matrix(0.316357,0,0,0.79901,476.592,-67.4077)">
        <rect x="681.643" y="230.51" width="447.789" height="251.473" style="fill:white;stroke:black;stroke-width:0.55px;stroke-dasharray:0.55,0.55;"/>
    </g>
    <g transform="matrix(0.334684,0,0,0.790849,-227.611,-64.6228)">
        <rect x="681.643" y="230.51" width="447.789" height="251.473" style="fill:white;stroke:black;stroke-width:0.55px;stroke-dasharray:0.55,0.55;"/>
    </g>
    <g transform="matrix(1.00611,0,0,0.28564,-493.876,301.012)">
        <rect x="681.643" y="230.51" width="447.789" height="251.473" style="fill:white;stroke:black;stroke-width:0.45px;stroke-dasharray:0.45,0.45;"/>
    </g>
    <g transform="matrix(0.314974,0,0,0.287496,477.827,300.493)">
        <rect x="681.643" y="230.51" width="447.789" height="251.473" style="fill:white;stroke:black;stroke-width:1.11px;stroke-dasharray:1.11,1.11;"/>
    </g>
    <g transform="matrix(0.332733,0,0,0.280076,-226.281,302.592)">
        <rect x="681.643" y="230.51" width="447.789" height="251.473" style="fill:white;stroke:black;stroke-width:1.08px;stroke-dasharray:1.08,1.08;"/>
    </g>
    <g transform="matrix(1.00611,0,0,0.28564,-494.234,-65.5848)">
        <rect x="681.643" y="230.51" width="447.789" height="251.473" style="fill:white;stroke:black;stroke-width:0.45px;stroke-dasharray:0.45,0.45;"/>
    </g>
    <g transform="matrix(0.314974,0,0,0.287496,477.469,-66.104)">
        <rect x="681.643" y="230.51" width="447.789" height="251.473" style="fill:white;stroke:black;stroke-width:1.11px;stroke-dasharray:1.11,1.11;"/>
    </g>
    <g transform="matrix(0.332733,0,0,0.280076,-226.639,-64.0049)">
        <rect x="681.643" y="230.51" width="447.789" height="251.473" style="fill:white;stroke:black;stroke-width:1.08px;stroke-dasharray:1.08,1.08;"/>
    </g>
    <g transform="matrix(1,0,0,1,-570.538,-452.245)">
        <text x="910.064px" y="670.631px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">Plaza de armas</text>
        <text x="910.064px" y="687.155px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">San V<tspan x="953.361px 956.915px " y="687.155px 687.155px ">ic</tspan>ente <tspan x="1000.21px 1008.21px 1012.66px " y="687.155px 687.155px 687.155px ">T.T</tspan></text>
    </g>
    <g transform="matrix(1,0,0,1,-847.079,-441.49)">
        <text x="910.064px" y="670.631px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">1ra Notaria</text>
    </g>
    <g transform="matrix(1,0,0,1,-420.865,-285.642)">
        <text x="910.064px" y="670.631px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">Fonasa</text>
    </g>
    <g transform="matrix(1,0,0,1,-662.362,-283.162)">
        <text x="910.064px" y="670.631px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">El Portalon</text>
    </g>
    <g transform="matrix(1,0,0,1,-716.215,-262.422)">
        <text x="910.064px" y="670.631px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:9.333px;fill:rgb(255,123,0);">Nuestra Oﬁcina</text>
    </g>
    <g transform="matrix(1,0,0,1,-842.254,-267.611)">
        <text x="910.064px" y="670.631px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">Inspección</text>
        <text x="910.064px" y="687.155px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">del trabajo</text>
    </g>
    <g transform="matrix(1,0,0,1,-209.115,-257.553)">
        <text x="910.064px" y="670.631px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">Afp Provida</text>
    </g>
    <g transform="matrix(1,0,0,1,-209.488,-464.436)">
        <text x="914.509px" y="687.155px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">Ilustre</text>
        <text x="914.509px" y="703.678px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">Municipalidad</text>
    </g>
    <g transform="matrix(1,0,0,1,-521.403,-612.858)">
        <text x="910.064px" y="670.631px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">SII</text>
    </g>
    <g transform="matrix(1,0,0,1,-568.472,-323.875)">
        <text x="910.064px" y="670.631px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:13.333px;">German Riesco</text>
    </g>
    <g transform="matrix(1,0,0,1,-605.818,-571.855)">
        <text x="910.064px" y="670.631px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:13.333px;">Capitan <tspan x="958.99px 967.883px " y="670.631px 670.631px ">Ar</tspan>turo Prat Chacon</text>
    </g>
    <g transform="matrix(0.000678406,1,-1,0.000678406,835.772,-742.529)">
        <text x="910.064px" y="670.631px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:13.333px;">Carmen Gallegos</text>
    </g>
    <g transform="matrix(0.000678406,1,-1,0.000678406,1329.45,-730.404)">
        <text x="910.064px" y="670.631px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:13.333px;">T<tspan x="916.731px 924.146px " y="670.631px 670.631px ">ag</tspan>ua <tspan x="949.856px 956.522px 963.938px " y="670.631px 670.631px 670.631px ">Tag</tspan>ua</text>
    </g>
    <g transform="matrix(0.407123,0,0,0.446492,-115.702,59.0299)">
        <ellipse cx="757.13" cy="744.336" rx="19.594" ry="17.691" style="fill:rgb(254,138,0);"/>
    </g>
</svg>



      <!--  -->
    </div>
    <!--  -->
    
    
    
    
    
    
    
    </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          mostrarContenido: false,
        };
      },
    };
    </script>
    