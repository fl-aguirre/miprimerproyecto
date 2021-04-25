<?php
    $resultado = array('mensaje' => '');
    if( isset($_POST['data']) ) {
        $resultado['mensaje'] = "Viene el valor : ".$_POST['data'];
        echo json_encode($resultado);
        exit;
    }

    if(isset($_POST['enviar'])){
        if(!empty($_POST['nombre']) && !empty($_POST['apellido']) && !empty($_POST['email']) && !empty($_POST['telefono']) && !empty($_POST['direccion']) && !empty($_POST['cp']) && !empty($_POST['localidad']) && !empty($_POST['provincia']) && !empty($_POST['tarjeta']) && !empty($_POST['codigo'])){
            $nombre = $_POST['nombre'];
            $apellido = $_POST['apellido'];
            $email = $_POST['email'];
            $direccion = $_POST['direccion'];
            $cp = $_POST['cp']
            $localidad = $_POST['localidad']
            $provincia = $_POST['provincia']
            $tarjeta = $_POST['tarjeta']
            $codigo = $_POST['codigo']
            $asunto="Nueva compra";

            $msg="Nombre: ".$nombre."\n"."Apellido: ".$apellido."\n"."Email: ".$email."\n"."Dirección: ".$direccion."\n"."CP: ".$cp."\n"."Localidad: ".$localidad."\n"."Provincia: ".$provincia."\n"."N° de tarjeta: ".$tarjeta."\n"."Código de tarjeta: ".$codigo."\n".$_POST['data'];
            $header="From: ".$email."\r\n";//la persona que escribió me dejo su email, entonces el remitente es ese email
            $header.="Reply-To: noreply@example.com"."\r\n";//Le mando un no responder o noreply
            $header.="X-Mailer: PHP/".phpversion();
            $tuCasilla="frl.aguirre@gmail.com";
            $mail=mail($tuCasilla,$asunto,$msg,$header);//en "tu mail" tenes que colocar tu casilla de email de consultas,es decir, la casilla en la cual vas a recibir las consultas que deja la gente en tu página
            if($mail){// si el email se mando respondo éxito con javascript
                echo "<script>
                        alert('Gracias por su contacto! En breve nos estaremos comunicando');
                        window.location='../tienda.html'
                        </script>";
            }else{//si no se pudo enviar el email lo notifico
                echo "<script>
                        alert('Lamentamos decirle que no hemos podido enviar su consulta');
                        window.location='../tienda.html'
                        </script>";
            }
        }
        else{//si los parámetros están vacios, aunque podemos controlar esto con required
            echo "<script>
            alert('Error. Faltan parametros');
                    window.location='../tienda.html'
                  </script>"; 
        }
    }  
?>