$(function(){
    $("#guardarAlimento").click(function(){
      var porcion=$('[name="porcion"]').val();
     
        
      
      
      var fPorcion = $("#porcion").val();

      var usuario=localStorage.getItem("nombre");
      var comida=localStorage.getItem("comida");
      var alimentoActual=localStorage.getItem("alimentoActual");
      
      var dataString = "porcion=" + fPorcion + "&usuario=" + usuario +  "&comida=" + comida +  "&alimento=" + alimentoActual;
      $.ajax({
        type:"POST",
        url: "https://andreaconeche.000webhostapp.com/insertarComida.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function() {
          document.getElementById("guardarAlimento").innerHTML = "Conectando...";
        },
        success: function(data) {
          if (data == "success") {
            alert("Alimento agregado");
            document.getElementById("guardarAlimento").innerHTML = "Agregar";
            contarCaloriasYmacros();
          } else if (data == "error") {
            document.getElementById("guardarAlimento").innerHTML = "Error";
          }
      }
      });
      
    });
    
  });
  var fecha;
  function actualizaFecha(){
    fecha = $("#fecha").val();

    contarCaloriasYmacros();
  }

  $(document).ready(function() {
      actualizaFecha();
    contarCaloriasYmacros();
});

  function contarCaloriasYmacros(){
    
      var requerimientoDiario=localStorage.getItem("requerimiento");
      var carbosDiarios=localStorage.getItem("carbos");
      var proteDiarias=localStorage.getItem("prote");
      var grasasDiarias=localStorage.getItem("grasas");
    var usuario=localStorage.getItem("nombre");
    var caloriasTotales = "usuario=" + usuario + "&requerimiento=" + requerimientoDiario + "&fecha="+fecha;
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/caloriasTotales.php",
            data: caloriasTotales,
            cache: false,
            beforeSend: function() {
                $("#caloriasTotales").text("Cargando...");
              },
            success: function(response)
            {
                $('#caloriasTotales').html(response+" / "+localStorage.getItem("requerimiento")+" Kcal.").fadeIn();
                $("#caloriasTotales").listview("refresh");
               
            }
    });
    var usuario=localStorage.getItem("nombre");
    var macrosTodo = "usuario=" + usuario + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + grasasDiarias + "&fecha="+fecha;
    $.ajax({
        type: "POST",
        url: "https://andreaconeche.000webhostapp.com/contarMacrosDiarios.php",
        data: macrosTodo,
        cache: false,
        beforeSend: function() {
            $("#macrosDiarios").text("Cargando...");
          },
        success: function(response)
        {
            $('#gramosMacrosDiarios').html("<td> / "+ localStorage.getItem("carbos")+" g </td><td> / "+ 
            localStorage.getItem("prote")+" g </td><td>/ "+ localStorage.getItem("grasas")+" g </td>").fadeIn();
            $('#macrosDiarios').html(response).fadeIn();
            $("#macrosDiarios").listview("refresh");
         
           
        }
});
    var usuario=localStorage.getItem("nombre");
    var dataString = "usuario=" + usuario +  "&comida=" + "desayuno" + "&requerimiento=" + requerimientoDiario + "&fecha="+fecha;
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/contarCalorias.php",
            data: dataString,
            cache: false,
            beforeSend: function() {
                $("#contarCaloriasDesayuno").text("Cargando...");
              },
            success: function(response)
            {
                $('#contarCaloriasDesayuno').html(response).fadeIn();
                $("#contarCaloriasDesayuno").listview("refresh");
               
            }
    });
    var usuario=localStorage.getItem("nombre");
    var macrosD = "usuario=" + usuario +  "&comida=" + "desayuno" + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + grasasDiarias+ "&fecha="+fecha;
    $.ajax({
        type: "POST",
        url: "https://andreaconeche.000webhostapp.com/contadorMacros.php",
        data: macrosD,
        cache: false,
        beforeSend: function() {
            $("#macrosDesayuno").text("Cargando...");
          },
        success: function(response)
        {
            $('#macrosDesayuno').html(response).fadeIn();
            $("#macrosDesayuno").listview("refresh");
           
        }
});
    var usuario=localStorage.getItem("nombre");
    var comidaC = "usuario=" + usuario +  "&comida=" + "comida"  + "&requerimiento=" + requerimientoDiario+ "&fecha="+fecha;
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/contarCalorias.php",
            data: comidaC,
            cache: false,
            beforeSend: function() {
                $("#contarCaloriasComida").text("Cargando...");
              },
            success: function(response)
            {
                $('#contarCaloriasComida').html(response).fadeIn();
                $("#contarCaloriasComida").listview("refresh");
               
            }
    });
    var usuario=localStorage.getItem("nombre");
    var macrosCom = "usuario=" + usuario +  "&comida=" + "comida"+ "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + grasasDiarias + "&fecha="+fecha;
    $.ajax({
        type: "POST",
        url: "https://andreaconeche.000webhostapp.com/contadorMacros.php",
        data: macrosCom,
        cache: false,
        beforeSend: function() {
            $("#macrosComida").text("Cargando...");
          },
        success: function(response)
        {
            $('#macrosComida').html(response).fadeIn();
            $("#macrosComida").listview("refresh");
           
        }
});
var usuario=localStorage.getItem("nombre");
var cenaC = "usuario=" + usuario +  "&comida=" + "cena"  + "&requerimiento=" + requerimientoDiario+ "&fecha="+fecha;
$.ajax({
        type: "POST",
        url: "https://andreaconeche.000webhostapp.com/contarCalorias.php",
        data: cenaC,
        cache: false,
        beforeSend: function() {
            $("#contarCaloriasCena").text("Cargando...");
          },
        success: function(response)
        {
            $('#contarCaloriasCena').html(response).fadeIn();
            $("#contarCaloriasCena").listview("refresh");
           
        }
});
var usuario=localStorage.getItem("nombre");
    var macrosCena = "usuario=" + usuario +  "&comida=" + "cena" + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + grasasDiarias+ "&fecha="+fecha;
    $.ajax({
        type: "POST",
        url: "https://andreaconeche.000webhostapp.com/contadorMacros.php",
        data: macrosCena,
        cache: false,
        beforeSend: function() {
            $("#macrosCena").text("Cargando...");
          },
        success: function(response)
        {
            $('#macrosCena').html(response).fadeIn();
            $("#macrosCena").listview("refresh");
           
        }
});
var usuario=localStorage.getItem("nombre");
var cenaC = "usuario=" + usuario +  "&comida=" + "snacks"  + "&requerimiento=" + requerimientoDiario+ "&fecha="+fecha;
$.ajax({
        type: "POST",
        url: "https://andreaconeche.000webhostapp.com/contarCalorias.php",
        data: cenaC,
        cache: false,
        beforeSend: function() {
            $("#contarCaloriasSnacks").text("Cargando...");
          },
        success: function(response)
        {
            $('#contarCaloriasSnacks').html(response).fadeIn();
            $("#contarCaloriasSnacks").listview("refresh");
           
        }
});
var usuario=localStorage.getItem("nombre");
    var macrosCena = "usuario=" + usuario +  "&comida=" + "snacks"+ "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + grasasDiarias+ "&fecha="+fecha;
    $.ajax({
        type: "POST",
        url: "https://andreaconeche.000webhostapp.com/contadorMacros.php",
        data: macrosCena,
        cache: false,
        beforeSend: function() {
            $("#macrosSnacks").text("Cargando...");
          },
        success: function(response)
        {
            $('#macrosSnacks').html(response).fadeIn();
            $("#macrosSnacks").listview("refresh");
           
        }
});

  }
   

    


  