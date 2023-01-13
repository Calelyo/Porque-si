export default function MonedaIcono(){
    const colorAmarilloAfuera = '#FFED00'
    const colorAmarilloDentro = '#D4CB00'
    const colorBordes = '#1D1D1B'
    return(
        <svg 
        id="icono_moneda" 
        xmlns="http://www.w3.org/2000/svg"
        width='20'
        viewBox="0 0 100 100">
            <circle fill= {colorAmarilloAfuera} className="st0" cx="50" cy="50" r="49.5"/>
            <path fill= {colorBordes} className="st1" d="M50,1c27,0,49,22,49,49S77,99,50,99S1,77,1,50S23,1,50,1 M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0L50,0z"/>

            {/* <circle style={{fill: colorAmarilloDentro}} className="st2" cx="50" cy="50" r="38.8"/>
            <path style={{fill: colorBordes}} className="st1" d="M50,12.2c20.9,0,37.8,17,37.8,37.8S70.9,87.8,50,87.8S12.2,70.9,12.2,50S29.1,12.2,50,12.2 M50,10.2C28,10.2,10.2,28,10.2,50S28,89.8,50,89.8S89.8,72,89.8,50S72,10.2,50,10.2L50,10.2z"/> */}

            <circle fill= {colorAmarilloDentro} className="st2" cx="50" cy="50" r="38.8"/>
            <path fill= {colorBordes} className="st1" d="M50,12.2c20.9,0,37.8,17,37.8,37.8S70.9,87.8,50,87.8S12.2,70.9,12.2,50S29.1,12.2,50,12.2 M50,10.2C28,10.2,10.2,28,10.2,50S28,89.8,50,89.8S89.8,72,89.8,50S72,10.2,50,10.2L50,10.2z"/>
        </svg>
    )
}