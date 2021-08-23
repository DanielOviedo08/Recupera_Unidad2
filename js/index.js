function agregarReceta(){
    var medico = document.getElementById("medico").value;
    var cedula = document.getElementById("cedula").value;
    var paciente = document.getElementById("paciente").value;
    var fecha = document.getElementById("fecha").value;
    var exp = document.getElementById("exp").value;
    var medicamentos = document.getElementById("medicamentos").value;

    
    console.log(medico+" "+cedula+" "+paciente+" "+fecha+" "+exp+" "+medicamentos);
}




function limpiar(){
    document.getElementById("medico").value =" ";
    document.getElementById("cedula").value =" ";
    document.getElementById("paciente").value =" ";
    document.getElementById("fecha").value =" ";
    document.getElementById("exp").value =" ";
    document.getElementById("medicamentos").value =" ";


    
}
