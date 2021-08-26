function agregarReceta(){
    var medico = document.getElementById("medico").value;
    var cedula = document.getElementById("cedula").value;
    var paciente = document.getElementById("paciente").value;
    var fecha = document.getElementById("fecha").value;
    var exp = document.getElementById("exp").value;
    var medicamentos = document.getElementById("medicamentos").value;
    var newDiv = document.createElement("div1");

    var fila="<tr><th>"+"Fecha de receta: "+"        "+fecha+"</th></tr>"+
             "<tr><th>"+"Nombre del medico:   "+medico+"       "+"  " +"Cedula:"+"    "+cedula+"</th></tr>"+
             "<tr><th>"+"Paciente:   "+" "+paciente+"</th></tr>"+
             "<tr><th>"+"Fecha Exp:  "+exp+"</th></tr>"+
             "<tr><th>"+" "+medicamentos+"</th></tr>";


    var tablita =document.getElementById("receta").innerHTML =fila;
   // document.getElementById("receta").innerHTML = fila; 
    newDiv.appendChild(tablita);
    

    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);

}

console.log(medico+" "+cedula+" "+paciente+" "+fecha+" "+exp+" "+medicamentos);


function limpiar(){
    document.getElementById("medico").value =" ";
    document.getElementById("cedula").value =" ";
    document.getElementById("paciente").value =" ";
    document.getElementById("fecha").value =" ";
    document.getElementById("exp").value =" ";
    document.getElementById("medicamentos").value =" ";


    
}
//var fila="<tr><td>"+"</td><td>"+cedula+"</td><td>"+paciente+"</td><td>"+fecha+"</td></tr>";
    //document.getElementById("receta").innerHTML = fila; 
    //"<tr><td>" "</td></tr>"