export default function FlechaAtras(props){
    // const colorFondo = '#337265';
    const colorFondo = '#ffffff';
    const colorBordes = '#000000'
    const tamanioBordes = '0.8'
    return(
        <svg 
        id="Flecha-Atras-SVG" 
        xmlns="http://www.w3.org/2000/svg"
	    viewBox="0 0 100 100"
        width={props.tamanio}>

            <path fill={colorFondo} stroke={colorBordes} strokeWidth={tamanioBordes} d="M50,99.9C22.5,99.9,0.1,77.5,0.1,50S22.5,0.1,50,0.1c27.5,0,49.9,22.4,49.9,49.9S77.5,99.9,50,99.9z M50,9.4
                C27.6,9.4,9.4,27.6,9.4,50c0,22.4,18.2,40.6,40.6,40.6S90.7,72.4,90.7,50C90.7,27.6,72.4,9.4,50,9.4z"/>
                
            <path fill={colorFondo} stroke={colorBordes} strokeWidth={tamanioBordes} d="M76.7,43.1H38.8l11-11c2.6-2.6,2.6-6.7,0-9.3h0c-2.6-2.6-6.7-2.6-9.3,0L17.8,45.7c-2.5,2.5-2.5,6.5,0,8.9l22.6,22.6
            c2.6,2.6,6.7,2.6,9.3,0h0c2.6-2.6,2.6-6.7,0-9.3L39.5,57.8h37.2c4,0,7.3-3.3,7.3-7.3S80.8,43.1,76.7,43.1z"/>

        </svg>
    )
}

FlechaAtras.defaultProps = {
    tamanio: '30'
}