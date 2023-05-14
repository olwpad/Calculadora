
    function recolector(){
        let numerotest: HTMLInputElement = document.getElementById("uno") as HTMLInputElement;
    let numero:number=parseInt(numerotest.value)
    let numero2test: HTMLInputElement = document.getElementById("dos") as HTMLInputElement;
    let numero2:number=parseInt(numero2test.value)
    return{numero2,numero}

    }
    let funcionSumar=()=>{
    let variable:{numero:number,numero2:number} =recolector()
    let lethuno:HTMLElement=document.getElementById("divcontenedor") as HTMLElement;

    if(Number.isInteger(variable.numero) &&  Number.isInteger(variable.numero2) ){
    lethuno.style.fontSize="100px"
    lethuno.textContent=(variable.numero+variable.numero2).toString()
    }else{
        lethuno.style.fontSize="50px"
        lethuno.textContent="ingresa datos";
    }

    }

    let funcionRestar=()=>{
        let variable:{numero:number,numero2:number} =recolector()
    let lethuno:HTMLElement=document.getElementById("divcontenedor") as HTMLElement;
    
    if(Number.isInteger(variable.numero) &&  Number.isInteger(variable.numero2) ){
    lethuno.style.fontSize="100px"
    lethuno.textContent=(variable.numero-variable.numero2).toString()
    }else{
        lethuno.style.fontSize="50px"
        lethuno.textContent="ingresa datos";
    }
    }
    let funcionDividir=()=>{

    let variable:{numero:number,numero2:number} =recolector()
    let lethuno:HTMLElement=document.getElementById("divcontenedor") as HTMLElement;
    if(Number.isInteger(variable.numero) &&  Number.isInteger(variable.numero2) ){

        if(variable.numero2===0){
            lethuno.style.fontSize="45px";
            lethuno.textContent="error by zero";}
            else{
                lethuno.textContent=(variable.numero/variable.numero2).toString()
                lethuno.style.fontSize="100px"
            }
        
    }else{
        lethuno.style.fontSize="50px"
        lethuno.textContent="ingresa datos";
    

    }
    
    }

    let funcionMultiplicar=()=>{
    let variable:{numero:number,numero2:number} =recolector()
    let lethuno:HTMLElement=document.getElementById("divcontenedor") as HTMLElement;
    if(Number.isInteger(variable.numero) &&  Number.isInteger(variable.numero2) ){

    lethuno.style.fontSize="100px"
    lethuno.textContent=(variable.numero*variable.numero2).toString();
        }else{
        lethuno.style.fontSize="50px"
        lethuno.textContent="ingresa datos";

        }
    }
