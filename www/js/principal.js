$(document).ready(function() {

  $.ajax({
    type: "POST",
    url: "https://andreaconeche.000webhostapp.com/mostrarImagen.php",
    cache: false,
    data: "nombre="+localStorage.getItem("nombre"),
    beforeSend: function() {
        $("#fotoPublicar").text("Cargando...");
      },
    success: function(response)
    {
        $('#fotoPublicar').html(response+" Hola "+localStorage.getItem("nombre")+" publica algo").fadeIn();
        
        $("#fotoPublicar").listview("refresh");

    }
});  

});


$(document).ready(function(){
  var frm=$("#historiaSubirAservidor");
  frm.bind("submit",function(){
    var frmData=new FormData;
    formData.append('s', localStorage.getItem("nombre"));
    frmData.append('historiaUsuario', $("input[name=historiaUsuario]"));
    frmData.append("imagen",$("input[name=imagenHistoria]")[0].files[0]);
    
    
    $.ajax({
      url: frm.attr("action"),
      type: frm.attr("method"),
      data: frmData,
      processData: false,
      contentType: false,
      cache: false,
      success: function(data){
        if (data == "success") {
          alert("historia agregada");
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
          url: "https://andreaconeche.000webhostapp.com/mostrarHistorias.php",
          cache: false,
         
          beforeSend: function() {
              $("#historiasTodas").text("Cargando...");
            },
          success: function(response)
          {
              $('#historiasTodas').html(response).fadeIn();
              $("#historiasTodas").listview("refresh");

              
             
          }
  });

});



  $(function() {
   $('#imagenHistoria').change(function(e) {
       addImage(e); 
      });
 
      function addImage(e){
       var file = e.target.files[0],
       imageType = /image.*/;
     
       if (!file.type.match(imageType))
        return;
   
       var reader = new FileReader();
   
       reader.onload = function(e){
          var result=e.target.result;
         $('#imgSalida').attr("src",result);
       }
        
       reader.readAsDataURL(file);
      }
     });
  
function detalleHistoria(usuario){
  $.ajax({
    type: "POST",
    url: "https://andreaconeche.000webhostapp.com/mostrarDetalleHistoria.php",
    cache: false,
    data: "nombre="+usuario,
    beforeSend: function() {
        $("#mostrarDetalleHistoria").text("Cargando...");
      },
    success: function(response)
    {
        $('#mostrarDetalleHistoria').html(response).fadeIn();
        $("#mostrarDetalleHistoria").popup("refresh");
       
    }
});  
}
 
