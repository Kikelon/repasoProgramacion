function continenteDelPais(dondeEstoy: string){
    let continente : string[] = ["Asia", "América", "Árica", "Europa", "Oceanía"];
    let mundo : string [][] = [
    // Asia
        ["Afganistan", "Arabia Saudita", "Armenia", "Azerbaiyán", "Bangladés"],
    // América
        ["Antigua y Barbuda", "Argentina", "Bahamas", "Barbados", "Belice"],
    // Árica
        ["Angola", "Argelia", "Benín", "Botsuana", "Burkina Faso"],
    // Europa
        ["Albania", "Alemania", "Andorra", "Armenia", "Austria"],
    // Oceanía
        ["Australia", "Nueva Zelanda", "Papúa Nueva Guinea", "Fiyi", "Islas Marshall"]
    ]
    for (let cont = 0; cont < 5; cont++){
        for (let pais = 0; pais < 5; pais++){
            (dondeEstoy == mundo[cont][pais]) ? (console.log(continente[cont]), pais = 5, cont = 5) :  false;
        }
    }
}

function imparesHasta (n : number){
    for (let i = 1; i <= n; i = i + 2) console.log(i)
}

function invertirArray (array: any[]): any[]{
    let resultado : any[] = [];
    array.forEach(element => {resultado.unshift(element)});
    return resultado;
}

function arcoiris (colores: string[]){
    let coloresArcoiris : string[] = ["rojo", "naranja", "amarillo", "verde", "azul", "arcoíris ", "violeta"];
    colores.forEach(element => {(coloresArcoiris.indexOf(element.toLowerCase())>(-1)) ? console.log(element + " está en el arcoíris") : console.log(element + " no está en el arcoíris")});
}

function existePar (numeros: number[]): boolean{
    let resultado : boolean = false;
    numeros.forEach(element => { ((element % 2) == 0) ? resultado = true : 1});
    return resultado;
}

function todosEmpiezanPorM (nombres: string[]): boolean{
    let resultado : boolean = true;
    nombres.forEach(element => {(element.charAt(0) == "M") ? true : resultado = false});
    return resultado;
}

function sumaCaracteres(array : string[]): number{
    let resultado : number = 0;
    array.forEach(element => {resultado += element.length})
    return resultado;
}