function carga() 
{
    document.getElementById("form1").style.display="block";
    document.getElementById("form2").style.display="none";
}
var x;
function passornot()
{
    x = parseInt(document.getElementById("NumMaterias").value);
    if (x==0||isNaN(x)) 
    {
        alert("No se ingresó el número de materias");
    } else 
    {
        document.getElementById("form2").style.display="block";
        document.getElementById("form1").style.display="none";
        materias();
    }
}
function materias()
{
    for (let i = 1; i <= x; i++) 
    {
        var input = document.createElement("input");
        input.type="number";
        input.id=i;
        input.className="Calif";
        input.value=0;
        input.onchange= function() {calcular_acum()};
        var parent = document.getElementById("campos");
        parent.appendChild(input);
    }
}

function borrar_materias()
{
    location.reload();
}

function calcular_acum()
{
    let numeros=[];
    for (let i = 1; i <= x; i++) 
    {
        const dato = parseInt(document.getElementById(i).value);
        numeros.push(dato);
    }
    const sum = numeros.reduce((a,b)=> a + b, 0 ) / x;
    document.getElementById("acumulado").innerHTML="Acumulado: "+ sum;
}

function calcular()
{
    let numeros=[];
    for (let i = 1; i <= x; i++) 
    {
        const dato = parseInt(document.getElementById(i).value);
        numeros.push(dato);
    }
    const prom = numeros.reduce((a,b)=> a + b, 0 ) / x;
    document.getElementById("res").innerHTML="Resultado: "+ prom;
}