export default function MonedaGirando(props){
    const colorCirculoFuera = '#FFED00';
    const colorCirculoDentro = '#D4CB00';
    const colorBordes = '#1D1D1B';
    const colorPuntasEstrella = '#000000';
    const colorCentroSol = '#D4E22A';
    const colorLadoMonedas = '#FFB100';
    const colorInteriorPuntasEstrellas = '#EEFF5A';
    const strokeMiterLimit = '10';
    const strokeDashArraySt4 = '20.7332,3.3173';
    const strokeDashArraySt8 = '19.8976,3.1836';
    const strokeDashArraySt9 = '18.5175,2.9628';
    const strokeDashArraySt11 = '14.768,2.3629';
    const strokeDashArraySt12 = '13.5484,2.1678';
    const strokeDashArraySt13 = '15.5061,2.481';

    return(
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 185.3 2703.3"
        width={props.tamanio}
        className={props.className}>
{/* <style type="text/css">
        .st0{fill:#FFED00;}
        .st1{fill:#1D1D1B;}
        .st2{fill:#D4CB00;}
        .st3{fill:none;stroke:#000000;stroke-miterlimit:10;}
        .st4{fill:none;stroke:#000000;stroke-miterlimit:10;stroke-dasharray:20.7332,3.3173;}
        .st5{fill:#D4E22A;}
        .st6{fill:#FFB100;}
        .st7{fill:#FFB100;stroke:#1D1D1B;stroke-miterlimit:10;}
        .st8{fill:none;stroke:#000000;stroke-miterlimit:10;stroke-dasharray:19.8976,3.1836;}
        .st9{fill:none;stroke:#000000;stroke-miterlimit:10;stroke-dasharray:18.5175,2.9628;}
        .st10{fill:#EEFF5A;}
        .st11{fill:none;stroke:#000000;stroke-miterlimit:10;stroke-dasharray:14.768,2.3629;}
        .st12{fill:none;stroke:#000000;stroke-miterlimit:10;stroke-dasharray:13.5484,2.1678;}
        .st13{fill:none;stroke:#000000;stroke-miterlimit:10;stroke-dasharray:15.5061,2.481;}
    </style> */}
            <g id="Moneda9">
                
                <ellipse transform="matrix(0.9871 -0.1602 0.1602 0.9871 -416.9334 48.6064)" fill={colorCirculoFuera} className="st0" cx="93" cy="2610.4" rx="90.9" ry="90.9"/>
                <path fill={colorBordes} className="st1" d="M93,2520c49.8,0,90.4,40.5,90.4,90.4s-40.5,90.4-90.4,90.4s-90.4-40.5-90.4-90.4S43.2,2520,93,2520 M93,2519
                    c-50.5,0-91.4,40.9-91.4,91.4c0,50.5,40.9,91.4,91.4,91.4s91.4-40.9,91.4-91.4C184.4,2559.9,143.5,2519,93,2519L93,2519z"/>
            
                
                <ellipse transform="matrix(0.9871 -0.1602 0.1602 0.9871 -416.9326 48.6063)" fill={colorCirculoDentro} className="st2" cx="93" cy="2610.4" rx="71.8" ry="71.8"/>
                <path fill={colorBordes} className="st1" d="M93,2539.6c39,0,70.8,31.8,70.8,70.8s-31.8,70.8-70.8,70.8s-70.8-31.8-70.8-70.8S54,2539.6,93,2539.6
                    M93,2537.6c-40.2,0-72.8,32.6-72.8,72.8s32.6,72.8,72.8,72.8s72.8-32.6,72.8-72.8S133.2,2537.6,93,2537.6L93,2537.6z"/>
            
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="92.1,2558.4 93,2545.9 94,2558.4 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="94.2" y1="2561.7" x2="95.9" y2="2584"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="96.1,2585.7 97,2598.1 105.1,2588.6 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="107.3" y1="2586.1" x2="121.8" y2="2569"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="122.8,2567.7 130.9,2558.2 124.4,2568.9 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="122.6" y1="2571.7" x2="110.9" y2="2590.8"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="110,2592.2 103.5,2602.8 115.6,2599.9 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="118.8" y1="2599.1" x2="140.6" y2="2593.8"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="142.2,2593.4 154.3,2590.5 142.8,2595.2 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="139.7" y1="2596.5" x2="119" y2="2605"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="117.5,2605.6 105.9,2610.4 117.5,2615.1 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="120.5" y1="2616.4" x2="141.3" y2="2624.9"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="142.8,2625.6 154.3,2630.3 142.2,2627.4 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="139" y1="2626.6" x2="117.2" y2="2621.3"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="115.6,2620.9 103.5,2618 110,2628.6 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="111.8" y1="2631.4" x2="123.5" y2="2650.5"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="124.4,2651.9 130.9,2662.6 122.8,2653 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="120.7" y1="2650.5" x2="106.2" y2="2633.4"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="105.1,2632.2 97,2622.7 96.1,2635.1 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="95.8" y1="2638.4" x2="94.1" y2="2660.8"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="94,2662.4 93,2674.9 92.1,2662.4 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="91.8" y1="2659.1" x2="90.1" y2="2636.8"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="90,2635.1 89,2622.7 80.9,2632.2 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="78.8" y1="2634.7" x2="64.3" y2="2651.8"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="63.2,2653 55.1,2662.6 61.7,2651.9 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="63.4" y1="2649.1" x2="75.2" y2="2630"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="76,2628.6 82.6,2618 70.4,2620.9 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="67.2" y1="2621.7" x2="45.5" y2="2627"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="43.8,2627.4 31.7,2630.3 43.3,2625.6 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="46.3" y1="2624.3" x2="67" y2="2615.8"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="68.6,2615.1 80.1,2610.4 68.6,2605.6 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="65.5" y1="2604.4" x2="44.8" y2="2595.8"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="43.3,2595.2 31.7,2590.5 43.8,2593.4 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="47.1" y1="2594.2" x2="68.8" y2="2599.5"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="70.4,2599.9 82.6,2602.8 76,2592.2 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="74.3" y1="2589.3" x2="62.5" y2="2570.3"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="61.7,2568.9 55.1,2558.2 63.2,2567.7 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="65.4" y1="2570.3" x2="79.9" y2="2587.3"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="80.9,2588.6 89,2598.1 90,2585.7 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="90.2" y1="2582.4" x2="91.9" y2="2560"/>
                
                    <path fill={colorCentroSol} className="st5" d="M93,2647.7c-20.6,0-37.3-16.8-37.3-37.3S72.4,2573,93,2573s37.3,16.8,37.3,37.3S113.6,2647.7,93,2647.7z"/>
                
                    <path fill={colorBordes} className="st1" d="M93,2574c20,0,36.3,16.3,36.3,36.3s-16.3,36.3-36.3,36.3s-36.3-16.3-36.3-36.3S73,2574,93,2574 M93,2572
                        c-21.2,0-38.3,17.2-38.3,38.3s17.2,38.3,38.3,38.3s38.3-17.2,38.3-38.3S114.2,2572,93,2572L93,2572z"/>
    </g>


    <g id="Moneda8">
            <path fill={colorLadoMonedas} className="st6" d="M3.6,2275.3c-1.3-6.5-2.3-18.7,4.2-30.6c0.2-0.5,0.5-0.9,0.8-1.3c3.2-5.3,7.8-9.8,13.5-13
                    c15.6-8.9,40.7-19.4,72.2-19.4c2.2,0,4.4,0.1,6.6,0.2c27.6,1.3,50.2,9.4,61.2,15.9c9.3,5.5,15.3,14.3,17.8,20.7
                    c0.1,0.3,0.2,0.5,0.3,0.8c0.1,0.2,0.2,0.4,0.3,0.7c4.5,11,2.9,20.7,2.1,25.3l-0.1,0.5c-30,0-60.2,0.1-89.4,0.2
                    C63.8,2275.2,33.6,2275.3,3.6,2275.3z"/>
            <path fill={colorBordes} className="st1" d="M94.3,2211.4c2.2,0,4.4,0.1,6.5,0.2c27.5,1.3,50.1,9.3,61,15.8c9.2,5.5,15.1,14.1,17.6,20.4
                    c0.1,0.3,0.2,0.6,0.4,0.8c0.1,0.2,0.2,0.4,0.3,0.6c4.5,10.8,2.8,20.4,2,25.1c0,0,0,0.1,0,0.1c-29.9,0-59.9,0.1-89,0.2
                    c-29.1,0.1-59.2,0.2-89,0.2c-1.2-6.5-2.1-18.3,4.2-29.9c0.2-0.4,0.5-0.9,0.7-1.3c3.1-5.2,7.7-9.7,13.3-12.8
                    C37.8,2221.9,62.9,2211.4,94.3,2211.4L94.3,2211.4 M94.3,2210.4c-33.3,0-59,11.8-72.5,19.5c-5.5,3.2-10.3,7.6-13.7,13.2
                    c-0.3,0.4-0.5,0.9-0.8,1.3c-7.4,13.4-5.1,27.1-4.2,31.3c60.3,0,119.4-0.3,179.7-0.3c0.7-4.3,2.9-14.7-1.9-26.5
                    c-0.2-0.5-0.4-1-0.6-1.4c-2.6-6.5-8.6-15.4-18-20.9c-12.7-7.6-35.6-14.8-61.5-16C98.6,2210.4,96.4,2210.4,94.3,2210.4
                    L94.3,2210.4z"/>
            <line fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" x1="93.2" y1="2273.6" x2="93.2" y2="2211.2"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M110.4,2273.6c0.2-8.6,0.2-18,0.2-28c0-10,0.2-24.7,0-33.3"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M124.7,2273.6c0.1-9,0.2-18.4,0.2-28.3c0-9.6-0.1-22-0.2-30.8"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M138.9,2273.6c0.1-8.5,0.2-17.5,0.2-27c0-10.2-0.1-19.5-0.2-28.6"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M153.1,2273.6c0.1-8.5,0.2-17.5,0.2-26.9c0-8.2-0.1-16.2-0.2-23.6"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M167.1,2273.6c0.2-6.2,0.3-13.3,0.3-21.3c0-8.2,0-15.6-0.2-21.9"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M178.3,2273.6c0.4-3.3,0.7-7.7,0.7-12.8c0-6.1,0.1-11.8-0.3-15.5"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M75.7,2212.2c-0.2,8.6,0,25.2,0,35.3c0,10,0.1,19.3,0.2,27.9"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M61.5,2214.4c-0.1,9,0,23.5,0,33.4c0,9.6,0.1,18.9,0.2,27.6"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M47.3,2218.7c-0.1,8.5-0.1,18.3-0.1,27.7c0,10.2,0.1,19.9,0.2,29"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M33.1,2224.7c-0.1,9.7-0.1,14.7-0.1,25.5c0,9.4,0.1,14.9,0.2,23.4"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M19.1,2232.1c-0.2,8.3-0.2,5.1-0.2,15.7c0,10.9,0.2,17.3,0.4,25.8"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M8.3,2244c-0.4,3.2-0.9,10-1,15c0,5.9,0.2,10.9,0.6,14.5"/>

            <ellipse fill={colorCirculoFuera} className="st0" cx="93.2" cy="2269.5" rx="90.9" ry="45.2"/>
            <path fill={colorBordes} className="st1" d="M93.2,2224.9c49.8,0,90.4,20,90.4,44.7s-40.5,44.7-90.4,44.7s-90.4-20-90.4-44.7S43.4,2224.9,93.2,2224.9
                    M93.2,2223.9c-50.5,0-91.4,20.5-91.4,45.7c0,25.2,40.9,45.7,91.4,45.7s91.4-20.5,91.4-45.7
                    C184.6,2244.3,143.7,2223.9,93.2,2223.9L93.2,2223.9z"/>

            <ellipse fill={colorCirculoDentro} className="st2" cx="93.2" cy="2269.5" rx="71.8" ry="35.4"/>
            <path fill={colorBordes} className="st1" d="M93.2,2235.2c19.1,0,37.1,3.7,50.6,10.4c13,6.5,20.2,15,20.2,23.9c0,8.9-7.2,17.4-20.2,23.9
                    c-13.5,6.7-31.4,10.4-50.6,10.4s-37.1-3.7-50.6-10.4c-13-6.5-20.2-15-20.2-23.9c0-8.9,7.2-17.4,20.2-23.9
                    C56.1,2238.9,74.1,2235.2,93.2,2235.2 M93.2,2233.2c-40.2,0-72.8,16.3-72.8,36.4c0,20.1,32.6,36.4,72.8,36.4s72.8-16.3,72.8-36.4
                    C166,2249.4,133.4,2233.2,93.2,2233.2L93.2,2233.2z"/>

                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="91.3,2249.7 93.2,2237.3 95.1,2249.7 				"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="95.3,2251.1 97.2,2263.4 108,2257.1 				"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="120.3,2249.8 131.1,2243.5 121.4,2251.3 				"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="113.3,2257.9 103.6,2265.8 116,2264.3 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt8} className="st8" x1="119.2" y1="2263.9" x2="140.5" y2="2261.3"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="142.1,2261.1 154.5,2259.6 142.3,2262.1 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt9} className="st9" x1="139.4" y1="2262.7" x2="119.8" y2="2266.7"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="118.3,2267 106.1,2269.5 118.3,2272.1 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt9} className="st9" x1="121.2" y1="2272.7" x2="140.8" y2="2276.7"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="142.3,2277 154.5,2279.5 142.1,2278 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt8} className="st8" x1="138.9" y1="2277.6" x2="117.6" y2="2275"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="116,2274.8 103.6,2273.3 113.3,2281.2 				"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="121.4,2287.8 131.1,2295.6 120.3,2289.3 				"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="108,2282 97.2,2275.7 95.3,2288 				"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="95.1,2289.4 93.2,2301.8 91.3,2289.4 				"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="91.1,2288 89.2,2275.7 78.4,2282 				"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="66.1,2289.3 55.3,2295.6 65,2287.8 				"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="73.1,2281.2 82.8,2273.3 70.3,2274.8 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt8} className="st8" x1="67.2" y1="2275.2" x2="45.9" y2="2277.8"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="44.3,2278 31.9,2279.5 44.1,2277 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt9} className="st9" x1="47" y1="2276.4" x2="66.6" y2="2272.4"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="68.1,2272.1 80.3,2269.5 68.1,2267 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt9} className="st9" x1="65.2" y1="2266.4" x2="45.6" y2="2262.4"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="44.1,2262.1 31.9,2259.6 44.3,2261.1 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt8} className="st8" x1="47.4" y1="2261.5" x2="68.8" y2="2264.1"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="70.3,2264.3 82.8,2265.8 73.1,2257.9 				"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="65,2251.3 55.3,2243.5 66.1,2249.8 				"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="78.4,2257.1 89.2,2263.4 91.1,2251.1 				"/>

                    <ellipse fill={colorCentroSol} className="st5" cx="93.2" cy="2269.5" rx="37.3" ry="18.2"/>
                
                    <path fill={colorBordes} className="st1" d="M93.2,2252.4c19.7,0,36.3,7.9,36.3,17.2c0,9.3-16.6,17.2-36.3,17.2s-36.3-7.9-36.3-17.2
                        C56.8,2260.2,73.5,2252.4,93.2,2252.4 M93.2,2250.4c-21.2,0-38.3,8.6-38.3,19.2c0,10.6,17.2,19.2,38.3,19.2s38.3-8.6,38.3-19.2
                        C131.5,2259,114.4,2250.4,93.2,2250.4L93.2,2250.4z"/>
                        
    </g>


    <g id="Moneda7">

                <path fill={colorCirculoFuera} className="st0" d="M92.5,1980.6c-20.4,0-42.9-0.7-60.1-1.7c-29.8-1.9-30.8-4.1-30.8-4.4c0-1.2-0.1-3.2,10-5.5
                    c8.7-2,23.5-2.4,42.9-2.4c4.1,0,8.4,0,12.7,0c4.4,0,8.9,0,13.3,0c4.6,0,8.6,0,12.2-0.1l3,0c7.7-0.1,17.2-0.2,26.8-0.2
                    c34.2,0,53,1.4,57.5,4.4c3.3,2.2,3.3,2.6,3.3,3.5l0,0.1c0,0.3-1,2.6-30.3,4.4c-16.9,1.1-39.2,1.7-59.7,1.7H92.5z"/>
                <path fill={colorBordes} className="st1" d="M122.6,1967c33.7,0,52.9,1.5,57.2,4.3c3.1,2.1,3.1,2.3,3.1,3.1c-0.5,0.5-4.3,2.6-31.5,4.2
                    c-16.6,1-38.3,1.6-58.1,1.6l-0.8,0c-19.7,0-41.5-0.6-58.4-1.6c-27.4-1.6-31.4-3.6-31.9-4.1c0-1,0.4-2.7,9.6-4.8
                    c8.7-1.9,23.4-2.3,42.8-2.3c4.1,0,8.4,0,12.7,0c4.4,0,8.9,0,13.3,0c4.6,0,8.6,0,12.2-0.1l3,0C103.5,1967.1,113,1967,122.6,1967
                    M122.6,1966c-10.8,0-21.4,0.1-29.8,0.2c-4,0-8.1,0.1-12.2,0.1c-8.8,0-17.6-0.1-26-0.1c-18,0-33.9,0.3-43,2.4
                    c-9.6,2.2-10.5,4.1-10.4,6c0.1,4.2,52.7,6.6,91.4,6.6c0.3,0,0.5,0,0.8,0c38.7,0,90.4-2.3,90.5-6.6c0.1-1.2,0.2-1.6-3.5-4.1
                    C174.8,1966.7,147.9,1966,122.6,1966L122.6,1966z"/>
                    
                <path fill={colorCirculoFuera} className="st0" d="M62.4,1992.7c-34.3,0-53.1-1.4-57.5-4.4c-3.3-2.2-3.3-2.6-3.3-3.5l0-0.1c0-0.3,1-2.6,30.3-4.4
                    c16.9-1.1,39.2-1.7,59.7-1.7h0.8c20.4,0,42.9,0.7,60.1,1.7c29.8,1.9,30.8,4.1,30.8,4.4c0,1.2,0.1,3.2-10,5.5
                    c-8.7,2-23.5,2.4-42.9,2.4c-4.1,0-8.4,0-12.7,0c-4.4,0-8.9,0-13.3,0c-4.6,0-8.6,0-12.2,0.1l-3,0
                    C81.5,1992.6,72,1992.7,62.4,1992.7z"/>
                <path fill={colorBordes} className="st1" d="M91.7,1978.1v1l0.8,0c19.7,0,41.5,0.6,58.4,1.6c27.4,1.6,31.4,3.6,31.9,4.1c0,1-0.4,2.7-9.6,4.8
                    c-8.7,1.9-23.4,2.3-42.8,2.3c-4.1,0-8.4,0-12.7,0c-4.4,0-8.9,0-13.3,0c-4.6,0-8.6,0-12.2,0.1l-3,0c-7.7,0.1-17.2,0.2-26.8,0.2
                    c-33.7,0-52.9-1.5-57.2-4.3c-3.1-2.1-3.1-2.3-3.1-3.1c0.5-0.5,4.3-2.6,31.5-4.2c16.6-1,38.3-1.6,58.1-1.6V1978.1 M91.7,1978.1
                    c-38.7,0-90.4,2.3-90.5,6.6c-0.1,1.2-0.2,1.6,3.5,4.1c5.6,3.7,32.5,4.5,57.7,4.5c10.8,0,21.4-0.1,29.8-0.2c4,0,8.1-0.1,12.2-0.1
                    c8.8,0,17.6,0.1,26,0.1c18,0,33.9-0.3,43-2.4c9.6-2.2,10.5-4.1,10.4-6c-0.1-4.2-52.7-6.6-91.4-6.6
                    C92.2,1978.1,92,1978.1,91.7,1978.1L91.7,1978.1z"/>
                    
                <path fill={colorLadoMonedas} className="st6" d="M1.5,1985.2c-0.5-1.9-0.8-3.8-0.8-5.7c0-2,0.3-4,0.8-6h182c0.9,2.2,1.3,4.5,1.1,6.8
                    c-0.1,1.7-0.5,3.3-1.1,4.9H1.5z"/>
                <path fill={colorBordes} className="st1" d="M183.2,1973.9c0.8,2,1.1,4.2,1,6.3c-0.1,1.5-0.4,3-1,4.4H1.9c-0.4-1.7-0.7-3.5-0.7-5.2
                    c0-1.9,0.2-3.7,0.7-5.5H183.2 M183.9,1972.9H1.1c-0.5,1.6-0.9,3.8-0.9,6.5c0,2.6,0.5,4.7,0.9,6.2c60.9,0,121.8,0,182.8,0
                    c0.5-1.2,1.1-3.1,1.3-5.4C185.3,1976.9,184.5,1974.3,183.9,1972.9L183.9,1972.9z"/>
                    
            <line fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" x1="93" y1="1985.2" x2="93" y2="1973.6"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M110.3,1985.2c0.2-1.8,0.2-3.7,0.2-5.8c0-2.1-0.1-4-0.2-5.8"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M124.6,1985.2c0.1-1.9,0.2-3.8,0.2-5.9c0-2-0.1-3.9-0.2-5.7"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M138.8,1985.2c0.1-1.8,0.2-3.6,0.2-5.6c0-2.1-0.1-4.1-0.2-6"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M153,1985.2c0.1-2,0.2-4.1,0.2-6.4c0-1.9-0.1-3.8-0.2-5.6"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M166.9,1985.2c0.2-1.7,0.4-3.7,0.4-5.9c0-2.3-0.2-4.3-0.4-6.1"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M178.1,1985.2c0.4-1.3,0.7-3.1,0.7-5.2c0-2.5-0.3-4.9-0.7-6.4"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M75.8,1973.6c-0.2,1.8-0.2,4.1-0.2,6.2c0,2.1,0.1,4,0.2,5.8"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M61.5,1973.6c-0.1,1.9-0.2,4.2-0.2,6.3c0,2,0.1,3.9,0.2,5.7"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M47.2,1973.6c-0.1,1.8-0.1,4-0.1,6c0,2.1,0.1,4.1,0.2,6"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M33.1,1973.6c-0.1,2-0.2,4.5-0.2,6.8c0,1.9,0.1,3.1,0.2,4.8"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M19.2,1973.6c-0.2,1.7-0.4,4.1-0.4,6.3c0,2.3,0.2,3.6,0.4,5.3"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M8.2,1972.9c-0.4,1.3-0.9,4.2-1,6.2c0,2.5,0.2,4.5,0.6,6"/>
    </g>

            
    <g id="Moneda6">
        
                <path fill={colorLadoMonedas} className="st6" d="M91.7,1757.3c-2.2,0-4.4-0.1-6.6-0.2c-27.6-1.3-50.2-9.4-61.2-15.9c-9.3-5.5-15.3-14.3-17.8-20.7
                        c-0.1-0.3-0.2-0.5-0.3-0.8c-0.1-0.2-0.2-0.4-0.3-0.6c-4.5-11-2.9-20.7-2.1-25.3l0.1-0.5c30,0,60.2-0.1,89.4-0.2
                        c29.2-0.1,59.4-0.2,89.4-0.2c1.3,6.5,2.3,18.7-4.2,30.6c-0.2,0.5-0.5,0.9-0.8,1.3c-3.2,5.3-7.8,9.8-13.5,13
                        C148.4,1746.7,123.2,1757.3,91.7,1757.3z"/>
                <path fill={colorBordes} className="st1" d="M182,1693.4c1.2,6.5,2.1,18.3-4.2,29.9c-0.2,0.4-0.5,0.9-0.7,1.3c-3.1,5.2-7.7,9.7-13.3,12.8
                        c-15.5,8.8-40.6,19.4-72,19.4c-2.2,0-4.4-0.1-6.5-0.2c-27.5-1.3-50.1-9.3-61-15.8c-9.2-5.5-15.1-14.1-17.6-20.4
                        c-0.1-0.3-0.2-0.6-0.4-0.8c-0.1-0.2-0.2-0.4-0.3-0.6c-4.5-10.8-2.8-20.4-2-25.1c0,0,0-0.1,0-0.1c29.9,0,59.9-0.1,89-0.2
                        C122.1,1693.5,152.1,1693.4,182,1693.4 M182.8,1692.4c-60.3,0-119.4,0.3-179.7,0.3c-0.7,4.3-2.9,14.7,1.9,26.5
                        c0.2,0.5,0.4,1,0.6,1.4c2.6,6.5,8.6,15.4,18,20.9c12.7,7.6,35.6,14.8,61.5,16c2.2,0.1,4.4,0.2,6.6,0.2c33.3,0,59-11.8,72.5-19.5
                        c5.5-3.2,10.3-7.6,13.7-13.2c0.3-0.4,0.5-0.9,0.8-1.3C186,1710.4,183.7,1696.6,182.8,1692.4L182.8,1692.4z"/>
                
                <line fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" x1="92.8" y1="1694.6" x2="92.8" y2="1757"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M75.6,1694.6c-0.2,8.6-0.2,18-0.2,28c0,10-0.2,24.7,0,33.3"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M61.3,1694.6c-0.1,9-0.2,18.4-0.2,28.3c0,9.6,0.1,22,0.2,30.8"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M47.1,1694.6c-0.1,8.5-0.2,17.5-0.2,27c0,10.2,0.1,19.5,0.2,28.6"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M32.9,1694.6c-0.1,8.5-0.2,17.5-0.2,26.9c0,8.2,0.1,16.2,0.2,23.6"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M18.9,1694.6c-0.2,6.2-0.3,13.3-0.3,21.3c0,8.2,0,15.6,0.2,21.9"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M7.7,1694.6c-0.4,3.3-0.7,7.7-0.7,12.8c0,6.1-0.1,11.8,0.3,15.5"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M110.3,1756c0.2-8.6,0-25.2,0-35.3c0-10-0.1-19.3-0.2-27.9"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M124.6,1753.8c0.1-9,0-23.5,0-33.4c0-9.6-0.1-18.9-0.2-27.6"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M138.7,1749.5c0.1-8.5,0.1-18.3,0.1-27.7c0-10.2-0.1-19.9-0.2-29"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M152.9,1743.5c0.1-9.7,0.1-14.7,0.1-25.5c0-9.4-0.1-14.9-0.2-23.4"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M166.9,1736.1c0.2-8.3,0.2-5.1,0.2-15.7c0-10.9-0.2-17.3-0.4-25.8"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M177.7,1724.2c0.4-3.2,0.9-10,1-15c0-5.9-0.2-10.9-0.6-14.5"/>
                
                <path fill={colorCirculoFuera} className="st0" d="M93,1744.8c-50.1,0-90.9-19.7-90.9-44c0-24.3,40.8-44,90.9-44c50.1,0,90.9,19.7,90.9,44
                        C183.9,1725.1,143.1,1744.8,93,1744.8z"/>
                <path fill={colorBordes} className="st1" d="M93,1657.3c49.8,0,90.4,19.5,90.4,43.5c0,24-40.5,43.5-90.4,43.5s-90.4-19.5-90.4-43.5
                        C2.7,1676.8,43.2,1657.3,93,1657.3 M93,1656.3c-50.5,0-91.4,19.9-91.4,44.5c0,24.6,40.9,44.5,91.4,44.5s91.4-19.9,91.4-44.5
                        C184.4,1676.3,143.5,1656.3,93,1656.3L93,1656.3z"/>
                        
                <path fill={colorCirculoDentro} className="st2" d="M93,1735.3c-39.6,0-71.8-15.5-71.8-34.5c0-19,32.2-34.5,71.8-34.5c39.6,0,71.8,15.5,71.8,34.5
                        C164.8,1719.8,132.6,1735.3,93,1735.3z"/>
                <path fill={colorBordes} className="st1" d="M93,1667.4c19.1,0,37.1,3.6,50.6,10.2c13,6.3,20.2,14.6,20.2,23.3s-7.2,16.9-20.2,23.3
                        c-13.5,6.6-31.4,10.2-50.6,10.2s-37.1-3.6-50.6-10.2c-13-6.3-20.2-14.6-20.2-23.3s7.2-16.9,20.2-23.3
                        C55.9,1671,73.9,1667.4,93,1667.4 M93,1665.4c-40.2,0-72.8,15.9-72.8,35.5c0,19.6,32.6,35.5,72.8,35.5s72.8-15.9,72.8-35.5
                        C165.8,1681.2,133.2,1665.4,93,1665.4L93,1665.4z"/>
                        
                <polygon fill={colorInteriorPuntasEstrellas} className="st10" points="91.9,1669.6 95.3,1691.6 124.8,1674.8 100.9,1693.6 145.1,1688.4 103.1,1696.8 145.1,1705.3 
                        100.9,1700 124.8,1718.9 95.3,1702 91.9,1724.1 88.4,1702 59,1718.9 82.8,1700 38.6,1705.3 80.7,1696.8 38.6,1688.4 
                        82.8,1693.6 59,1674.8 88.4,1691.6 				"/>
                        
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="77.6,1685.4 88.4,1691.6 91.9,1669.6 95.3,1691.6 106.2,1685.4 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="113.9,1681 124.8,1674.8 115,1682.5 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="110.7,1685.9 100.9,1693.6 113.3,1692.2 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt11} className="st11" x1="115.7" y1="1691.9" x2="131.5" y2="1690"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="132.7,1689.9 145.1,1688.4 132.9,1690.9 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt12} className="st12" x1="130.7" y1="1691.3" x2="116.4" y2="1694.2"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="115.3,1694.4 103.1,1696.8 115.3,1699.3 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt12} className="st12" x1="117.5" y1="1699.7" x2="131.8" y2="1702.6"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="132.9,1702.8 145.1,1705.3 132.7,1703.8 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt11} className="st11" x1="130.4" y1="1703.5" x2="114.5" y2="1701.6"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="113.3,1701.5 100.9,1700 110.7,1707.8 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="115,1711.1 124.8,1718.9 113.9,1712.7 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="106.2,1708.2 95.3,1702 91.9,1724.1 88.4,1702 77.6,1708.2 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="69.8,1712.7 59,1718.9 68.8,1711.1 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="73,1707.8 82.8,1700 70.4,1701.5 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt11} className="st11" x1="68.1" y1="1701.8" x2="52.2" y2="1703.7"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="51,1703.8 38.6,1705.3 50.9,1702.8 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt12} className="st12" x1="53" y1="1702.4" x2="67.4" y2="1699.5"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="68.4,1699.3 80.7,1696.8 68.4,1694.4 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt12} className="st12" x1="66.3" y1="1693.9" x2="51.9" y2="1691.1"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="50.9,1690.9 38.6,1688.4 51,1689.9 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt11} className="st11" x1="53.4" y1="1690.1" x2="69.2" y2="1692"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="70.4,1692.2 82.8,1693.6 73,1685.9 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="68.8,1682.5 59,1674.8 69.8,1681 					"/>
                        
                <path fill={colorCirculoDentro} className="st2" d="M92,1735.3c-3.9,0-7.8-0.1-11.8-0.3c2.8-7.8,2.8-16.4-0.1-25.5h23.5c-3.5,10-3.6,18.3-0.2,25.5
                        C99.7,1735.2,95.8,1735.3,92,1735.3z"/>
                <path fill={colorBordes} className="st1" d="M102.3,1710.5c-3,9-3.1,16.8-0.3,23.6c-3.3,0.1-6.7,0.2-10,0.2c-3.4,0-6.9-0.1-10.4-0.2
                        c2.3-7.3,2.3-15.2-0.1-23.6H102.3 M105.1,1708.5H78.8c3.2,9.6,3.5,18.7,0,27.5c4.4,0.2,8.8,0.3,13.2,0.3c4.4,0,8.8-0.1,13.1-0.3
                        C100.6,1727.7,101.3,1718.4,105.1,1708.5L105.1,1708.5z"/>
                        
                <path fill={colorCirculoDentro} className="st2" d="M91.9,1713.6c-12.8,0-23.3-5.6-23.3-12.5s10.4-12.5,23.3-12.5c12.8,0,23.3,5.6,23.3,12.5
                        S104.8,1713.6,91.9,1713.6z"/>
                <path fill={colorBordes} className="st1" d="M91.9,1689.6c12.1,0,22.3,5.3,22.3,11.5s-10.2,11.5-22.3,11.5s-22.3-5.3-22.3-11.5S79.9,1689.6,91.9,1689.6
                        M91.9,1687.6c-13.4,0-24.3,6-24.3,13.5s10.9,13.5,24.3,13.5c13.4,0,24.3-6,24.3-13.5S105.3,1687.6,91.9,1687.6L91.9,1687.6z"/>
                
                <path fill={colorCentroSol} className="st5" d="M71.1,1702.3c-0.8,0-1.4-0.2-1.8-0.5c-0.4-0.3-0.5-1-0.5-1.9c0-6.5,10-16.6,23.2-16.6
                        c13.4,0,23.1,9.5,23.1,15.9c0,1.9-0.6,2.5-2.6,2.5c-1.6,0-3.9-0.5-6.5-1c-3.9-0.8-8.7-1.8-13.9-1.8c-5.4,0-10.4,1.2-14.4,2.1
                        C74.9,1701.8,72.6,1702.3,71.1,1702.3z"/>
                <path fill={colorBordes} className="st1" d="M91.9,1684.5c12.8,0,22.1,8.9,22.1,14.9c0,1.2-0.1,1.5-1.6,1.5c-1.5,0-3.8-0.5-6.3-1
                        c-3.9-0.8-8.8-1.8-14.1-1.8c-5.5,0-10.6,1.2-14.6,2.2c-2.6,0.6-4.8,1.1-6.2,1.1c-1.1,0-1.3-0.1-1.3-1.3
                        C69.8,1693.9,79.3,1684.5,91.9,1684.5 M91.9,1682.5c-13.4,0-24.2,10.1-24.2,17.6c0,2.5,1.2,3.3,3.3,3.3c4.2,0,11.9-3.3,20.9-3.3
                        c8.7,0,16.2,2.9,20.4,2.9c2.3,0,3.6-0.9,3.6-3.5C116,1691.9,105.3,1682.5,91.9,1682.5L91.9,1682.5z"/>
                
    </g>


    <g id="Moneda5">
                
                <ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 -1173.4769 908.4007)" fill={colorCirculoFuera} className="st0" cx="93" cy="1332.3" rx="90.9" ry="90.9"/>
                <path fill={colorBordes} className="st1" d="M93,1242c49.8,0,90.4,40.5,90.4,90.4s-40.5,90.4-90.4,90.4s-90.4-40.5-90.4-90.4S43.2,1242,93,1242 M93,1241
                    c-50.5,0-91.4,40.9-91.4,91.4c0,50.5,40.9,91.4,91.4,91.4s91.4-40.9,91.4-91.4C184.4,1281.9,143.5,1241,93,1241L93,1241z"/>
            
                
                <ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 -1173.4768 908.4004)" fill={colorCirculoDentro} className="st2" cx="93" cy="1332.3" rx="71.8" ry="71.8"/>
                <path fill={colorBordes} className="st1" d="M93,1261.5c39,0,70.8,31.8,70.8,70.8s-31.8,70.8-70.8,70.8s-70.8-31.8-70.8-70.8S54,1261.5,93,1261.5
                    M93,1259.5c-40.2,0-72.8,32.6-72.8,72.8c0,40.2,32.6,72.8,72.8,72.8s72.8-32.6,72.8-72.8C165.8,1292.1,133.2,1259.5,93,1259.5
                    L93,1259.5z"/>

                <polygon fill={colorInteriorPuntasEstrellas} className="st10" points="91.9,1268.1 95.3,1313.5 124.8,1278.8 100.9,1317.5 145.1,1306.8 103.1,1324.1 145.1,1341.4 
                    100.9,1330.7 124.8,1369.4 95.3,1334.8 91.9,1380.1 88.4,1334.8 59,1369.4 82.8,1330.7 38.6,1341.4 80.7,1324.1 38.6,1306.8 
                    82.8,1317.5 59,1278.8 88.4,1313.5 			"/>
                    
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="90.9,1280.6 91.9,1268.1 92.8,1280.6 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="93" y1="1283.1" x2="94.3" y2="1299.8"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="94.4,1301 95.3,1313.5 103.4,1303.9 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="105" y1="1302" x2="115.9" y2="1289.3"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="116.7,1288.3 124.8,1278.8 118.2,1289.5 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="116.9" y1="1291.6" x2="108.1" y2="1305.8"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="107.5,1306.9 100.9,1317.5 113.1,1314.6 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="115.5" y1="1314" x2="131.8" y2="1310.1"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="133,1309.8 145.1,1306.8 133.6,1311.6 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="131.3" y1="1312.5" x2="115.8" y2="1318.9"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="114.6,1319.4 103.1,1324.1 114.6,1328.9 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="116.9" y1="1329.8" x2="132.4" y2="1336.2"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="133.6,1336.7 145.1,1341.4 133,1338.5 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="130.6" y1="1337.9" x2="114.3" y2="1333.9"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="113.1,1333.6 100.9,1330.7 107.5,1341.3 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="108.8" y1="1343.4" x2="117.6" y2="1357.7"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="118.2,1358.8 124.8,1369.4 116.7,1359.9 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="115.1" y1="1358" x2="104.2" y2="1345.2"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="103.4,1344.3 95.3,1334.8 94.4,1347.2 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="94.2" y1="1349.7" x2="92.9" y2="1366.4"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="92.8,1367.6 91.9,1380.1 90.9,1367.6 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="90.7" y1="1365.2" x2="89.5" y2="1348.5"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="89.4,1347.2 88.4,1334.8 80.3,1344.3 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="78.7" y1="1346.2" x2="67.9" y2="1358.9"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="67.1,1359.9 59,1369.4 65.5,1358.8 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="66.8" y1="1356.7" x2="75.6" y2="1342.4"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="76.3,1341.3 82.8,1330.7 70.7,1333.6 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="68.3" y1="1334.2" x2="52" y2="1338.2"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="50.8,1338.5 38.6,1341.4 50.2,1336.7 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="52.5" y1="1335.7" x2="68" y2="1329.3"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="69.1,1328.9 80.7,1324.1 69.1,1319.4 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="66.8" y1="1318.4" x2="51.3" y2="1312"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="50.2,1311.6 38.6,1306.8 50.8,1309.8 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="53.2" y1="1310.3" x2="69.5" y2="1314.3"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="70.7,1314.6 82.8,1317.5 76.3,1306.9 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="75" y1="1304.8" x2="66.2" y2="1290.5"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="65.5,1289.5 59,1278.8 67.1,1288.3 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="68.7" y1="1290.2" x2="79.5" y2="1303"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="80.3,1303.9 88.4,1313.5 89.4,1301 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt13} className="st13" x1="89.6" y1="1298.5" x2="90.8" y2="1281.8"/>
                    
                <path fill={colorCirculoDentro} className="st2" d="M92,1404.1c-4,0-8-0.2-12-0.6c3.1-16.7,3.1-34.6,0-54.5h24c-3.9,21.5-3.9,39.4-0.1,54.5
                    C99.9,1403.9,95.9,1404.1,92,1404.1z"/>
                <path fill={colorBordes} className="st1" d="M102.7,1350c-3.6,20.6-3.6,37.9-0.1,52.6c-3.5,0.3-7.1,0.4-10.6,0.4c-3.6,0-7.2-0.2-10.8-0.5
                    c2.9-16.2,2.9-33.5,0-52.6H102.7 M105.1,1348H78.8c3.2,19.6,3.5,38.5,0,56.4c4.4,0.4,8.8,0.7,13.2,0.7c4.4,0,8.8-0.2,13.1-0.7
                    C100.6,1387.5,101.3,1368.4,105.1,1348L105.1,1348z"/>
                    
                <path fill={colorCirculoDentro} className="st2" d="M91.9,1359.7c-12.8,0-23.3-12-23.3-26.7s10.4-26.7,23.3-26.7c12.8,0,23.3,12,23.3,26.7
                    S104.8,1359.7,91.9,1359.7z"/>
                <path fill={colorBordes} className="st1" d="M91.9,1307.3c12.3,0,22.3,11.5,22.3,25.7s-10,25.7-22.3,25.7s-22.3-11.5-22.3-25.7S79.7,1307.3,91.9,1307.3
                    M91.9,1305.3c-13.4,0-24.3,12.4-24.3,27.7c0,15.3,10.9,27.7,24.3,27.7c13.4,0,24.3-12.4,24.3-27.7
                    C116.2,1317.7,105.3,1305.3,91.9,1305.3L91.9,1305.3z"/>
                    
                <path fill={colorCentroSol} className="st5" d="M71.1,1336.4c-0.7,0-1.2-0.3-1.5-1c-0.5-0.9-0.7-2.6-0.7-4.8c0-15.5,10.9-35.1,23.2-35.1
                    c12.4,0,23.1,18.6,23.1,33.8c0,6.2-1.8,6.2-2.6,6.2c-1.5,0-3.8-1-6.3-2.1c-3.9-1.7-8.8-3.8-14.1-3.8c-5.5,0-10.6,2.5-14.6,4.4
                    C74.7,1335.4,72.5,1336.4,71.1,1336.4C71.1,1336.4,71.1,1336.4,71.1,1336.4z"/>
                <path fill={colorBordes} className="st1" d="M91.9,1296.6c11.9,0,22.1,18,22.1,32.8c0,5.2-1.2,5.2-1.6,5.2c-1.3,0-3.6-1-5.9-2c-4-1.7-9-3.9-14.5-3.9
                    c-5.8,0-10.9,2.5-15.1,4.5c-2.4,1.2-4.6,2.3-5.8,2.3c-0.3,0-0.5,0-0.7-0.4c-0.3-0.5-0.6-1.7-0.6-4.4
                    C69.8,1315.6,80.2,1296.6,91.9,1296.6 M91.9,1294.6c-13.4,0-24.2,20.8-24.2,36.1c0,5.1,1.2,6.8,3.3,6.8c4.2,0,11.9-6.8,20.9-6.8
                    c8.7,0,16.2,5.9,20.4,5.9c2.3,0,3.6-1.7,3.6-7.2C116,1314,105.3,1294.6,91.9,1294.6L91.9,1294.6z"/>
                    
    </g>


    <g id="Moneda4">
        
                <path fill={colorLadoMonedas} className="st6" d="M3.4,970.7c-1.3-6.5-2.3-18.7,4.2-30.6c0.2-0.5,0.5-0.9,0.8-1.3c3.2-5.3,7.8-9.8,13.5-13
                        c15.6-8.9,40.7-19.4,72.2-19.4c2.2,0,4.4,0.1,6.6,0.2c27.6,1.3,50.2,9.4,61.2,15.9c9.3,5.5,15.3,14.3,17.8,20.7
                        c0.1,0.3,0.2,0.5,0.3,0.8c0.1,0.2,0.2,0.4,0.3,0.7c4.5,11,2.9,20.7,2.1,25.3l-0.1,0.5c-30,0-60.2,0.1-89.4,0.2
                        C63.7,970.6,33.4,970.7,3.4,970.7z"/>
                <path fill={colorBordes} className="st1" d="M94.1,906.8c2.2,0,4.4,0.1,6.5,0.2c27.5,1.3,50.1,9.3,61,15.8c9.2,5.5,15.1,14.1,17.6,20.4
                        c0.1,0.3,0.2,0.6,0.4,0.8c0.1,0.2,0.2,0.4,0.3,0.6c4.5,10.8,2.8,20.4,2,25.1c0,0,0,0.1,0,0.1c-29.9,0-59.9,0.1-89,0.2
                        c-29.1,0.1-59.2,0.2-89,0.2c-1.2-6.5-2.1-18.3,4.2-29.9c0.2-0.4,0.5-0.9,0.7-1.3c3.1-5.2,7.7-9.7,13.3-12.8
                        C37.6,917.3,62.7,906.8,94.1,906.8L94.1,906.8 M94.1,905.8c-33.3,0-59,11.8-72.5,19.5c-5.5,3.2-10.3,7.6-13.7,13.2
                        c-0.3,0.4-0.5,0.9-0.8,1.3c-7.4,13.4-5.1,27.1-4.2,31.3c60.3,0,119.4-0.3,179.7-0.3c0.7-4.3,2.9-14.7-1.9-26.5
                        c-0.2-0.5-0.4-1-0.6-1.4c-2.6-6.5-8.6-15.4-18-20.9c-12.7-7.6-35.6-14.8-61.5-16C98.5,905.8,96.3,905.8,94.1,905.8L94.1,905.8z"
                        />
                        
                <line fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" x1="93" y1="969" x2="93" y2="906.6"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M110.3,969c0.2-8.6,0.2-18,0.2-28c0-10,0.2-24.7,0-33.3"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M124.6,969c0.1-9,0.2-18.4,0.2-28.3c0-9.6-0.1-22-0.2-30.8"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M138.8,969c0.1-8.5,0.2-17.5,0.2-27c0-10.2-0.1-19.5-0.2-28.6"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M153,969c0.1-8.5,0.2-17.5,0.2-26.9c0-8.2-0.1-16.2-0.2-23.6"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M166.9,969c0.2-6.2,0.3-13.3,0.3-21.3c0-8.2,0-15.6-0.2-21.9"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M178.1,969c0.4-3.3,0.7-7.7,0.7-12.8c0-6.1,0.1-11.8-0.3-15.5"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M75.5,907.6c-0.2,8.6,0,25.2,0,35.3c0,10,0.1,19.3,0.2,27.9"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M61.3,909.8c-0.1,9,0,23.5,0,33.4c0,9.6,0.1,18.9,0.2,27.6"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M47.2,914.1c-0.1,8.5-0.1,18.3-0.1,27.7c0,10.2,0.1,19.9,0.2,29"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M33,920.1c-0.1,9.7-0.1,14.7-0.1,25.5c0,9.4,0.1,14.9,0.2,23.4"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M18.9,927.5c-0.2,8.3-0.2,5.1-0.2,15.7c0,10.9,0.2,17.3,0.4,25.8"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M8.2,939.4c-0.4,3.2-0.9,10-1,15c0,5.9,0.2,10.9,0.6,14.5"/>
                
                <path fill={colorCirculoFuera} className="st0" d="M93,1007.5c-50.1,0-90.9-19.7-90.9-44c0-24.3,40.8-44,90.9-44c50.1,0,90.9,19.7,90.9,44
                        C183.9,987.8,143.1,1007.5,93,1007.5z"/>
                <path fill={colorBordes} className="st1" d="M93,920c49.8,0,90.4,19.5,90.4,43.5S142.8,1007,93,1007S2.7,987.5,2.7,963.5S43.2,920,93,920 M93,919
                        c-50.5,0-91.4,19.9-91.4,44.5S42.6,1008,93,1008s91.4-19.9,91.4-44.5S143.5,919,93,919L93,919z"/>
                        
                <ellipse fill={colorCirculoDentro} className="st2" cx="93" cy="963.5" rx="71.8" ry="34.5"/>
                <path fill={colorBordes} className="st1" d="M93,930.1c19.1,0,37.1,3.6,50.6,10.2c13,6.3,20.2,14.6,20.2,23.3s-7.2,16.9-20.2,23.3
                        C130.1,993.3,112.2,997,93,997s-37.1-3.6-50.6-10.2c-13-6.3-20.2-14.6-20.2-23.3s7.2-16.9,20.2-23.3
                        C55.9,933.7,73.9,930.1,93,930.1 M93,928.1c-40.2,0-72.8,15.9-72.8,35.5S52.8,999,93,999s72.8-15.9,72.8-35.5
                        S133.2,928.1,93,928.1L93,928.1z"/>
                        
                <polygon fill={colorInteriorPuntasEstrellas} className="st10" points="91.9,932.2 95.3,954.3 124.8,937.5 100.9,956.3 145.1,951.1 103.1,959.5 145.1,967.9 100.9,962.7 
                        124.8,981.6 95.3,964.7 91.9,986.8 88.4,964.7 59,981.6 82.8,962.7 38.6,967.9 80.7,959.5 38.6,951.1 82.8,956.3 59,937.5 
                        88.4,954.3 				"/>
                        
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="77.6,948.1 88.4,954.3 91.9,932.2 95.3,954.3 106.2,948.1 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="113.9,943.7 124.8,937.5 115,945.2 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="110.7,948.6 100.9,956.3 113.3,954.8 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt11} className="st11" x1="115.7" y1="954.6" x2="131.5" y2="952.7"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="132.7,952.6 145.1,951.1 132.9,953.5 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt12} className="st12" x1="130.7" y1="954" x2="116.4" y2="956.8"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="115.3,957.1 103.1,959.5 115.3,962 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt12} className="st12" x1="117.5" y1="962.4" x2="131.8" y2="965.3"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="132.9,965.5 145.1,967.9 132.7,966.5 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt11} className="st11" x1="130.4" y1="966.2" x2="114.5" y2="964.3"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="113.3,964.2 100.9,962.7 110.7,970.5 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="115,973.8 124.8,981.6 113.9,975.4 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="106.2,970.9 95.3,964.7 91.9,986.8 88.4,964.7 77.6,970.9 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="69.8,975.4 59,981.6 68.8,973.8 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="73,970.5 82.8,962.7 70.4,964.2 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt11} className="st11" x1="68.1" y1="964.5" x2="52.2" y2="966.3"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="51,966.5 38.6,967.9 50.9,965.5 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt12} className="st12" x1="53" y1="965.1" x2="67.4" y2="962.2"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="68.4,962 80.7,959.5 68.4,957.1 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt12} className="st12" x1="66.3" y1="956.6" x2="51.9" y2="953.8"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="50.9,953.5 38.6,951.1 51,952.6 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt11} className="st11" x1="53.4" y1="952.8" x2="69.2" y2="954.7"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="70.4,954.8 82.8,956.3 73,948.6 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="68.8,945.2 59,937.5 69.8,943.7 					"/>
                        
                    <path fill={colorCirculoDentro} className="st2" d="M92,998c-3.9,0-7.8-0.1-11.8-0.3c2.8-7.8,2.8-16.4-0.1-25.5h23.5c-3.5,10-3.6,18.3-0.2,25.5
                        C99.7,997.9,95.8,998,92,998z"/>
                    <path fill={colorBordes} className="st1" d="M102.3,973.2c-3,9-3.1,16.8-0.3,23.6c-3.3,0.1-6.7,0.2-10,0.2c-3.4,0-6.9-0.1-10.4-0.2
                        c2.3-7.3,2.3-15.2-0.1-23.6H102.3 M105.1,971.2H78.8c3.2,9.6,3.5,18.7,0,27.5c4.4,0.2,8.8,0.3,13.2,0.3c4.4,0,8.8-0.1,13.1-0.3
                        C100.6,990.4,101.3,981.1,105.1,971.2L105.1,971.2z"/>
                        
                    <path fill={colorCirculoDentro} className="st2" d="M91.9,976.3c-12.8,0-23.3-5.6-23.3-12.5s10.4-12.5,23.3-12.5c12.8,0,23.3,5.6,23.3,12.5
                        S104.8,976.3,91.9,976.3z"/>
                    <path fill={colorBordes} className="st1" d="M91.9,952.3c12.1,0,22.3,5.3,22.3,11.5s-10.2,11.5-22.3,11.5s-22.3-5.3-22.3-11.5S79.9,952.3,91.9,952.3
                        M91.9,950.3c-13.4,0-24.3,6-24.3,13.5s10.9,13.5,24.3,13.5c13.4,0,24.3-6,24.3-13.5S105.3,950.3,91.9,950.3L91.9,950.3z"/>
                
                    <path fill={colorCentroSol} className="st5" d="M71.1,965c-0.8,0-1.4-0.1-1.8-0.5c-0.4-0.3-0.5-1-0.5-1.9c0-6.5,10-16.6,23.2-16.6
                        c13.4,0,23.1,9.5,23.1,15.9c0,1.9-0.6,2.5-2.6,2.5c-1.6,0-3.9-0.5-6.5-1c-3.9-0.8-8.7-1.8-13.9-1.8c-5.4,0-10.4,1.2-14.4,2.1
                        C74.9,964.5,72.6,965,71.1,965z"/>
                    <path fill={colorBordes} className="st1" d="M91.9,947.1c12.8,0,22.1,8.9,22.1,14.9c0,1.2-0.1,1.5-1.6,1.5c-1.5,0-3.8-0.5-6.3-1
                        c-3.9-0.8-8.8-1.8-14.1-1.8c-5.5,0-10.6,1.2-14.6,2.2c-2.6,0.6-4.8,1.1-6.2,1.1c-1.1,0-1.3-0.1-1.3-1.3
                        C69.8,956.6,79.3,947.1,91.9,947.1 M91.9,945.1c-13.4,0-24.2,10.1-24.2,17.6c0,2.5,1.2,3.3,3.3,3.3c4.2,0,11.9-3.3,20.9-3.3
                        c8.7,0,16.2,2.9,20.4,2.9c2.3,0,3.6-0.9,3.6-3.5C116,954.6,105.3,945.1,91.9,945.1L91.9,945.1z"/>
                
    </g>


    <g id="Moneda3">
        
                <path fill={colorCirculoFuera} className="st0" d="M63.1,694.7c-34.3,0-53-1.4-57.5-4.4c-3.3-2.2-3.3-2.6-3.3-3.5l0-0.1c0-0.3,1-2.6,30.3-4.4
                    c16.9-1.1,39.2-1.7,59.7-1.7h0.8c20.4,0,42.9,0.7,60.1,1.7c29.8,1.9,30.8,4.1,30.8,4.4c0,1.2,0.1,3.2-10,5.5
                    c-8.7,2-23.5,2.4-42.9,2.4c-4.1,0-8.4,0-12.7,0c-4.4,0-8.9,0-13.3,0c-4.6,0-8.6,0-12.2,0.1l-3,0
                    C82.2,694.6,72.7,694.7,63.1,694.7z"/>
                <path fill={colorBordes} className="st1" d="M92.4,680v1l0.8,0c19.7,0,41.5,0.6,58.4,1.6c27.4,1.6,31.4,3.6,31.9,4.1c0,1-0.4,2.7-9.6,4.8
                    c-8.7,1.9-23.4,2.3-42.8,2.3c-4.1,0-8.4,0-12.7,0c-4.4,0-8.9,0-13.3,0c-4.6,0-8.6,0-12.2,0.1l-3,0c-7.7,0.1-17.2,0.2-26.8,0.2
                    c-33.7,0-52.9-1.5-57.2-4.3c-3.1-2.1-3.1-2.3-3.1-3.1c0.5-0.5,4.3-2.6,31.5-4.2c16.6-1,38.3-1.6,58.1-1.6V680 M92.4,680
                    c-38.7,0-90.4,2.3-90.5,6.6c-0.1,1.2-0.2,1.6,3.5,4.1c5.6,3.7,32.5,4.5,57.7,4.5c10.8,0,21.4-0.1,29.8-0.2c4,0,8.1-0.1,12.2-0.1
                    c8.8,0,17.6,0.1,26,0.1c18,0,33.9-0.3,43-2.4c9.6-2.2,10.5-4.1,10.4-6c-0.1-4.2-52.7-6.6-91.4-6.6C92.9,680,92.6,680,92.4,680
                    L92.4,680z"/>
                    
                <path fill={colorCirculoFuera} className="st0" d="M93.2,682.5c-20.4,0-42.9-0.7-60.1-1.7c-29.8-1.9-30.8-4.1-30.8-4.4c0-1.2-0.1-3.2,10-5.5
                    c8.7-2,23.5-2.4,42.9-2.4c4.1,0,8.4,0,12.7,0c4.4,0,8.9,0,13.3,0c4.6,0,8.6,0,12.2-0.1l3,0c7.7-0.1,17.2-0.2,26.8-0.2
                    c34.3,0,53.1,1.4,57.5,4.4c3.3,2.2,3.3,2.6,3.3,3.5l0,0.1c0,0.3-1,2.6-30.3,4.4c-16.9,1.1-39.2,1.7-59.7,1.7H93.2z"/>
                <path fill={colorBordes} className="st1" d="M123.3,668.9c33.7,0,52.9,1.5,57.2,4.3c3.1,2.1,3.1,2.3,3.1,3.1c-0.5,0.5-4.3,2.6-31.5,4.2
                    c-16.6,1-38.3,1.6-58.1,1.6l-0.8,0c-19.7,0-41.5-0.6-58.4-1.6c-27.4-1.6-31.4-3.6-31.9-4.1c0-1,0.4-2.7,9.6-4.8
                    c8.7-1.9,23.4-2.3,42.8-2.3c4.1,0,8.4,0,12.7,0c4.4,0,8.9,0,13.3,0c4.6,0,8.6,0,12.2-0.1l3,0C104.2,669,113.7,668.9,123.3,668.9
                    M123.3,667.9c-10.8,0-21.4,0.1-29.8,0.2c-4,0-8.1,0.1-12.2,0.1c-8.8,0-17.6-0.1-26-0.1c-18,0-33.9,0.3-43,2.4
                    c-9.6,2.2-10.5,4.1-10.4,6c0.1,4.2,52.7,6.6,91.4,6.6c0.3,0,0.5,0,0.8,0c38.7,0,90.4-2.3,90.5-6.6c0.1-1.2,0.2-1.6-3.5-4.1
                    C175.5,668.6,148.6,667.9,123.3,667.9L123.3,667.9z"/>
                    
                <path fill={colorLadoMonedas} className="st6" d="M2.2,687.7c-0.9-2.2-1.3-4.5-1.1-6.8c0.1-1.7,0.5-3.3,1.1-4.9h182c0.5,1.9,0.8,3.8,0.8,5.7c0,2-0.3,4-0.8,6
                    H2.2z"/>
                <path fill={colorBordes} className="st1" d="M183.8,676.5c0.4,1.7,0.7,3.5,0.7,5.2c0,1.9-0.2,3.7-0.7,5.5H2.5c-0.8-2-1.1-4.2-1-6.3c0.1-1.5,0.4-3,1-4.4
                    H183.8 M184.6,675.5c-60.9,0-121.8,0-182.8,0c-0.5,1.2-1.1,3.1-1.3,5.4c-0.2,3.3,0.7,6,1.3,7.4h182.8c0.5-1.6,0.9-3.8,0.9-6.5
                    C185.5,679.1,185,677,184.6,675.5L184.6,675.5z"/>
            
            <line fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" x1="92.7" y1="675.9" x2="92.7" y2="687.5"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M75.4,675.9c-0.2,1.8-0.2,3.7-0.2,5.8c0,2.1,0.1,4,0.2,5.8"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M61.1,675.9c-0.1,1.9-0.2,3.8-0.2,5.9c0,2,0.1,3.9,0.2,5.7"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M46.9,675.9c-0.1,1.8-0.2,3.6-0.2,5.6c0,2.1,0.1,4.1,0.2,6"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M32.7,675.9c-0.1,2-0.2,4.1-0.2,6.4c0,1.9,0.1,3.8,0.2,5.6"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M18.8,675.9c-0.2,1.7-0.4,3.7-0.4,5.9c0,2.3,0.2,4.3,0.4,6.1"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M7.6,675.9c-0.4,1.3-0.7,3.1-0.7,5.2c0,2.5,0.3,4.9,0.7,6.4"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M109.9,687.5c0.2-1.8,0.2-4.1,0.2-6.2c0-2.1-0.1-4-0.2-5.8"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M124.2,687.5c0.1-1.9,0.2-4.2,0.2-6.3c0-2-0.1-3.9-0.2-5.7"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M138.5,687.5c0.1-1.8,0.1-4,0.1-6c0-2.1-0.1-4.1-0.2-6"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M152.6,687.5c0.1-2,0.2-4.5,0.2-6.8c0-1.9-0.1-3.1-0.2-4.8"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M166.5,687.5c0.2-1.7,0.4-4.1,0.4-6.3c0-2.3-0.2-3.6-0.4-5.3"/>
            <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M177.5,688.2c0.4-1.3,0.9-4.2,1-6.2c0-2.5-0.2-4.5-0.6-6"/>
        
    </g>


    <g id="Moneda2">
        
                <path fill={colorLadoMonedas} className="st6" d="M91.9,467.2c-2.2,0-4.4-0.1-6.6-0.2c-27.6-1.3-50.2-9.4-61.2-15.9c-9.3-5.5-15.3-14.3-17.8-20.7
                        c-0.1-0.3-0.2-0.5-0.3-0.8c-0.1-0.2-0.2-0.4-0.3-0.6c-4.5-11-2.9-20.7-2.1-25.3l0.1-0.5c30,0,60.2-0.1,89.4-0.2
                        c29.2-0.1,59.4-0.2,89.4-0.2c1.3,6.5,2.3,18.7-4.2,30.6c-0.2,0.5-0.5,0.9-0.8,1.3c-3.2,5.3-7.8,9.8-13.5,13
                        C148.6,456.6,123.4,467.2,91.9,467.2z"/>
                <path fill={colorBordes} className="st1" d="M182.2,403.3c1.2,6.5,2.1,18.3-4.2,29.9c-0.2,0.4-0.5,0.9-0.7,1.3c-3.1,5.2-7.7,9.7-13.3,12.8
                        c-15.5,8.8-40.6,19.4-72,19.4c-2.2,0-4.4-0.1-6.5-0.2c-27.5-1.3-50.1-9.3-61-15.8c-9.2-5.5-15.1-14.1-17.6-20.4
                        c-0.1-0.3-0.2-0.6-0.4-0.8c-0.1-0.2-0.2-0.4-0.3-0.6c-4.5-10.8-2.8-20.4-2-25.1c0,0,0-0.1,0-0.1c29.9,0,59.9-0.1,89-0.2
                        C122.2,403.4,152.3,403.3,182.2,403.3 M183,402.3c-60.3,0-119.4,0.3-179.7,0.3c-0.7,4.3-2.9,14.7,1.9,26.5
                        c0.2,0.5,0.4,1,0.6,1.4c2.6,6.5,8.6,15.4,18,20.9c12.7,7.6,35.6,14.8,61.5,16c2.2,0.1,4.4,0.2,6.6,0.2c33.3,0,59-11.8,72.5-19.5
                        c5.5-3.2,10.3-7.6,13.7-13.2c0.3-0.4,0.5-0.9,0.8-1.3C186.2,420.3,183.9,406.5,183,402.3L183,402.3z"/>
                
                <line fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" x1="93" y1="404.5" x2="93" y2="466.9"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M75.7,404.5c-0.2,8.6-0.2,18-0.2,28c0,10-0.2,24.7,0,33.3"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M61.4,404.5c-0.1,9-0.2,18.4-0.2,28.3c0,9.6,0.1,22,0.2,30.8"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M47.3,404.5c-0.1,8.5-0.2,17.5-0.2,27c0,10.2,0.1,19.5,0.2,28.6"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M33,404.5c-0.1,8.5-0.2,17.5-0.2,26.9c0,8.2,0.1,16.2,0.2,23.6"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M19.1,404.5c-0.2,6.2-0.3,13.3-0.3,21.3c0,8.2,0,15.6,0.2,21.9"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M7.9,404.5c-0.4,3.3-0.7,7.7-0.7,12.8c0,6.1-0.1,11.8,0.3,15.5"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M110.5,465.9c0.2-8.6,0-25.2,0-35.3c0-10-0.1-19.3-0.2-27.9"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M124.7,463.7c0.1-9,0-23.5,0-33.4c0-9.6-0.1-18.9-0.2-27.6"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M138.8,459.4c0.1-8.5,0.1-18.3,0.1-27.7c0-10.2-0.1-19.9-0.2-29"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M153,453.4c0.1-9.7,0.1-14.7,0.1-25.5c0-9.4-0.1-14.9-0.2-23.4"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M167.1,446c0.2-8.3,0.2-5.1,0.2-15.7c0-10.9-0.2-17.3-0.4-25.8"/>
                <path fill={colorLadoMonedas} stroke={colorBordes} strokeMiterlimit={strokeMiterLimit} className="st7" d="M177.9,434.1c0.4-3.2,0.9-10,1-15c0-5.9-0.2-10.9-0.6-14.5"/>
                
                <path fill={colorCirculoFuera} className="st0" d="M93.2,456c-50.1,0-90.9-20.3-90.9-45.2c0-24.9,40.8-45.2,90.9-45.2c50.1,0,90.9,20.3,90.9,45.2
                        C184.1,435.7,143.3,456,93.2,456z"/>
                <path fill={colorBordes} className="st1" d="M93.2,366.1c49.8,0,90.4,20,90.4,44.7s-40.5,44.7-90.4,44.7s-90.4-20-90.4-44.7S43.4,366.1,93.2,366.1
                        M93.2,365.1c-50.5,0-91.4,20.5-91.4,45.7s40.9,45.7,91.4,45.7s91.4-20.5,91.4-45.7S143.7,365.1,93.2,365.1L93.2,365.1z"/>
                
                <path fill={colorCirculoDentro} className="st2" d="M93.2,446.2c-39.6,0-71.8-15.9-71.8-35.4c0-19.5,32.2-35.4,71.8-35.4c39.6,0,71.8,15.9,71.8,35.4
                        C165,430.3,132.8,446.2,93.2,446.2z"/>
                <path fill={colorBordes} className="st1" d="M93.2,376.4c19.1,0,37.1,3.7,50.6,10.4c13,6.5,20.2,15,20.2,23.9s-7.2,17.4-20.2,23.9
                        c-13.5,6.7-31.4,10.4-50.6,10.4s-37.1-3.7-50.6-10.4c-13-6.5-20.2-15-20.2-23.9s7.2-17.4,20.2-23.9
                        C56.1,380.1,74.1,376.4,93.2,376.4 M93.2,374.4c-40.2,0-72.8,16.3-72.8,36.4s32.6,36.4,72.8,36.4s72.8-16.3,72.8-36.4
                        S133.4,374.4,93.2,374.4L93.2,374.4z"/>
                        
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="91.3,390.9 93.2,378.6 95.1,390.9 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="95.3,392.3 97.2,404.7 108,398.3 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="120.3,391 131.1,384.7 121.4,392.6 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="113.3,399.1 103.6,407 116,405.5 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt8} className="st8" x1="119.2" y1="405.1" x2="140.5" y2="402.5"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="142.1,402.3 154.5,400.8 142.3,403.4 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt9} className="st9" x1="139.4" y1="403.9" x2="119.8" y2="408"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="118.3,408.3 106.1,410.8 118.3,413.3 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt9} className="st9" x1="121.2" y1="413.9" x2="140.8" y2="417.9"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="142.3,418.2 154.5,420.8 142.1,419.3 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt8} className="st8" x1="138.9" y1="418.9" x2="117.6" y2="416.3"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="116,416.1 103.6,414.6 113.3,422.5 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="121.4,429 131.1,436.9 120.3,430.5 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="108,423.3 97.2,416.9 95.3,429.3 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="95.1,430.7 93.2,443 91.3,430.7 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="91.1,429.3 89.2,416.9 78.4,423.3 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="66.1,430.5 55.3,436.9 65,429 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="73.1,422.5 82.8,414.6 70.3,416.1 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt8} className="st8" x1="67.2" y1="416.5" x2="45.9" y2="419.1"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="44.3,419.3 31.9,420.8 44.1,418.2 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt9} className="st9" x1="47" y1="417.6" x2="66.6" y2="413.6"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="68.1,413.3 80.3,410.8 68.1,408.3 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt9} className="st9" x1="65.2" y1="407.7" x2="45.6" y2="403.6"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="44.1,403.4 31.9,400.8 44.3,402.3 					"/>
                        <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt8} className="st8" x1="47.4" y1="402.7" x2="68.8" y2="405.3"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="70.3,405.5 82.8,407 73.1,399.1 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="65,392.6 55.3,384.7 66.1,391 					"/>
                        <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="78.4,398.3 89.2,404.7 91.1,392.3 					"/>
                        
                    <path fill={colorCentroSol} className="st5" d="M93.2,429c-20.6,0-37.3-8.2-37.3-18.2s16.8-18.2,37.3-18.2s37.3,8.2,37.3,18.2S113.8,429,93.2,429z"/>
                    
                    <path fill={colorBordes} className="st1" d="M93.2,393.6c19.7,0,36.3,7.9,36.3,17.2c0,9.3-16.6,17.2-36.3,17.2s-36.3-7.9-36.3-17.2
                            C56.8,401.5,73.5,393.6,93.2,393.6 M93.2,391.6c-21.2,0-38.3,8.6-38.3,19.2S72,430,93.2,430s38.3-8.6,38.3-19.2
                            S114.4,391.6,93.2,391.6L93.2,391.6z"/>
                            
    </g>

    
    <g id="Moneda1">
        
                <ellipse transform="matrix(0.9732 -0.2298 0.2298 0.9732 -18.6451 23.8326)" fill={colorCirculoFuera} className="st0" cx="93" cy="92" rx="90.9" ry="90.9"/>
                <path fill={colorBordes} className="st1" d="M93,1.6c49.8,0,90.4,40.5,90.4,90.4s-40.5,90.4-90.4,90.4S2.7,141.8,2.7,92S43.2,1.6,93,1.6 M93,0.6
                    C42.6,0.6,1.7,41.5,1.7,92s40.9,91.4,91.4,91.4s91.4-40.9,91.4-91.4S143.5,0.6,93,0.6L93,0.6z"/>
                    
                <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -37.7972 92.7173)" fill={colorCirculoDentro} className="st2" cx="93" cy="92" rx="71.8" ry="71.8"/>
                <path fill={colorBordes} className="st1" d="M93,21.2c39,0,70.8,31.8,70.8,70.8s-31.8,70.8-70.8,70.8S22.2,131,22.2,92S54,21.2,93,21.2 M93,19.2
                    c-40.2,0-72.8,32.6-72.8,72.8s32.6,72.8,72.8,72.8s72.8-32.6,72.8-72.8S133.2,19.2,93,19.2L93,19.2z"/>
                    
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="92.1,40 93,27.5 94,40 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="94.2" y1="43.3" x2="95.9" y2="65.6"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="96.1,67.3 97,79.7 105.1,70.2 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="107.3" y1="67.7" x2="121.8" y2="50.6"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="122.8,49.3 130.9,39.8 124.4,50.5 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="122.6" y1="53.3" x2="110.9" y2="72.3"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="110,73.8 103.5,84.4 115.6,81.5 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="118.8" y1="80.7" x2="140.6" y2="75.4"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="142.2,75 154.3,72.1 142.8,76.8 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="139.7" y1="78.1" x2="119" y2="86.6"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="117.5,87.2 105.9,92 117.5,96.7 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="120.5" y1="98" x2="141.3" y2="106.5"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="142.8,107.2 154.3,111.9 142.2,109 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="139" y1="108.2" x2="117.2" y2="102.9"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="115.6,102.5 103.5,99.6 110,110.2 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="111.8" y1="113" x2="123.5" y2="132.1"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="124.4,133.5 130.9,144.1 122.8,134.6 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="120.7" y1="132.1" x2="106.2" y2="115"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="105.1,113.8 97,104.2 96.1,116.7 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="95.8" y1="120" x2="94.1" y2="142.3"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="94,144 93,156.5 92.1,144 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="91.8" y1="140.7" x2="90.1" y2="118.4"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="90,116.7 89,104.2 80.9,113.8 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="78.8" y1="116.3" x2="64.3" y2="133.4"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="63.2,134.6 55.1,144.1 61.7,133.5 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="63.4" y1="130.7" x2="75.2" y2="111.6"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="76,110.2 82.6,99.6 70.4,102.5 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="67.2" y1="103.3" x2="45.5" y2="108.6"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="43.8,109 31.7,111.9 43.3,107.2 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="46.3" y1="105.9" x2="67" y2="97.4"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="68.6,96.7 80.1,92 68.6,87.2 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="65.5" y1="86" x2="44.8" y2="77.4"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="43.3,76.8 31.7,72.1 43.8,75 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="47.1" y1="75.8" x2="68.8" y2="81.1"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="70.4,81.5 82.6,84.4 76,73.8 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="74.3" y1="70.9" x2="62.5" y2="51.9"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="61.7,50.5 55.1,39.8 63.2,49.3 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="65.4" y1="51.9" x2="79.9" y2="68.9"/>
                    <polyline fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} className="st3" points="80.9,70.2 89,79.7 90,67.3 				"/>
                    <line fill="none" stroke={colorPuntasEstrella} strokeMiterlimit={strokeMiterLimit} strokeDasharray={strokeDashArraySt4} className="st4" x1="90.2" y1="63.9" x2="91.9" y2="41.6"/>
                    
                <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -37.7971 92.7171)" fill={colorCentroSol} className="st5" cx="93" cy="92" rx="37.3" ry="37.3"/>
                
                <path fill={colorBordes} className="st1" d="M93,55.6c20,0,36.3,16.3,36.3,36.3s-16.3,36.3-36.3,36.3S56.7,112,56.7,92S73,55.6,93,55.6 M93,53.6
                        c-21.2,0-38.3,17.2-38.3,38.3s17.2,38.3,38.3,38.3s38.3-17.2,38.3-38.3S114.2,53.6,93,53.6L93,53.6z"/>
                        
        </g>
    </svg>
    )
}

MonedaGirando.defaultProps = {
    tamanio: '60'
}