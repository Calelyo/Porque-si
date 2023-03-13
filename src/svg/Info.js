export default function Info(props){
    // const colorFondo = '#337265';
    const colorFondo = '#ffffff';
    const colorBordes = '#000000'
    const tamanioBordes = '0.8'

    return(

        <svg 
        id="Info-SVG" 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={props.tamanio}>
        
            <path fill={colorFondo} stroke={colorBordes} strokeWidth={tamanioBordes} d="M50,99.9C22.5,99.9,0.1,77.5,0.1,50S22.5,0.1,50,0.1c27.5,0,49.9,22.4,49.9,49.9S77.5,99.9,50,99.9z M50,9.4
                C27.6,9.4,9.4,27.6,9.4,50c0,22.4,18.2,40.6,40.6,40.6S90.6,72.4,90.6,50C90.6,27.6,72.4,9.4,50,9.4z"/>
                
            <path fill={colorFondo} stroke={colorBordes} strokeWidth={tamanioBordes} d="M58,69.1c-6,7.3-12.8,10.5-16.8,10.5c-3.2,0-4.9-2.9-3.4-9.6c1.8-7.7,4-15.9,5.5-22.3c0.7-2.8,0.6-3.6-0.3-3.6
            c-0.9,0-2.8,1.1-4.8,2.8c-0.6,0.5-1.6,0.5-2.2,0c-0.1-0.1-0.2-0.2-0.2-0.3c-0.5-0.7-0.3-1.8,0.5-2.4c1.7-1.5,10.9-9.4,16.8-9.4
            c3.3,0,4,3,1.9,11.9c-1.4,5.9-3.5,14.2-5,20.1c-0.7,2.4-0.7,3.7,0.1,3.7c0.7,0,2.9-1.2,5.8-4c0.5-0.5,1.3-0.6,1.9-0.2
            c0,0,0.1,0.1,0.1,0.1C58.5,67,58.6,68.2,58,69.1z M59.6,21.2c0,3.8-2.9,7.5-7.1,7.5c-3.5,0-5.8-2.2-5.8-5.9c0-3.3,2.6-7.4,7.5-7.4
            C57.9,15.3,59.6,18,59.6,21.2z"/>

        </svg>
    )
}

Info.defaultProps = {
    tamanio: '30'
}