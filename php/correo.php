<?php
    if(isset($_POST['enviar'])){
        if(!empty($_POST['nombre'])&& !empty($_POST['apellido'])&& !empty($_POST['email'])&&!empty($_POST['msg'])){
            $nombre=$_POST['nombre'];
            $apellido=$_POST['apellido'];
            $email=$_POST['email'];
            $red=$_POST['red'];
            if($_POST['news']=='si'){
                $news=$_POST['news'];
            }else{ 
                $news='no';
            }
            $asunto=$_POST['asunto'];//puedo poner un input asunto o crearlo yo directamente  
            $msg="Nombre: ".$nombre."\n"."Apellido: ".$apellido."\n"."Novedades: ".$news."\n"."Red: ".$red."\n".$_POST['msg'];
            $header="From: ".$email."\r\n";//la persona que escribió me dejo su email, entonces el remitente es ese email
            $header.="Reply-To: noreply@example.com"."\r\n";//Le mando un no responder o noreply
            $header.="X-Mailer: PHP/".phpversion();
            $tuCasilla="frl.aguirre@gmail.com";
            $mail= @mail($tuCasilla,$asunto,$msg,$header);//en "tu mail" tenes que colocar tu casilla de email de consultas,es decir, la casilla en la cual vas a recibir las consultas que deja la gente en tu página
            if($mail){// si el email se mando respondo éxito con javascript
                echo "<script>
                        alert('Gracias por su contacto! En breve nos estaremos comunicando');
                        window.location='../pages/contacto.html'
                        </script>";
            }else{//si no se pudo enviar el email lo notifico
                echo "<script>
                        alert('Lamentamos decirle que no hemos podido enviar su consulta');
                        window.location='../pages/contacto.html'
                        </script>";
            }
        }
        else{//si los parámetros están vacios, aunque podemos controlar esto con required
            echo "<script>
            alert('Error. Faltan parametros');
                    window.location='../pages/contacto.html'
                  </script>"; 
        }
    }  
?>