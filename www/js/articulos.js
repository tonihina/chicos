$(document).ready(function(){
    var frm=$("#articulosEnviar");
    frm.bind("submit",function(){
      var frmData=new FormData;
      formData.append('nombreArticulo', $("input[name=nombreArticulo]"));
      formData.append('descripcionArticulo', $("input[name=descripcionArticulo]"));
    
      frmData.append("archivoArticulo",$("input[name=archivoArticulo]")[0].files[0]);
     
      $.ajax({
        url: frm.attr("action"),
        type: frm.attr("method"),
        data: frmData,
        processData: false,
        contentType: false,
        cache: false,
        success: function(data){
          if (data == "success") {
            alert("agregado");
          } else if (data == "error") {
              alert("error");
          }
        }
      });

      return false;
    });
})

$(document).ready(function() {

    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/mostrarArticulos.php",
            cache: false,
            beforeSend: function() {
                $("#mostrarArticulos").text("Cargando...");
              },
            success: function(response)
            {
                $('#mostrarArticulos').html(response).fadeIn();
                $("#mostrarArticulos").listview("refresh");

                
               
            }
    });

});


function verArticulo(articulo){

    $.ajax({
        type: "POST",
        url: "https://andreaconeche.000webhostapp.com/contenidoArticulo.php",
        cache: false,
        data: "id="+articulo,
        beforeSend: function() {
            $("#contenidoArticulo").text("Cargando...");
           
          },
        success: function(response)
        {
            $('#contenidoArticulo').html(response).fadeIn();
            $("#contenidoArticulo").listview("refresh");
          
        }
    });
}