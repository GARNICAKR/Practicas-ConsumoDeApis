const express=require("express");
const app=express();
const cors=require("cors");
app.set('port',process.env.Port || 3000)//process.env.Port sirve para cunado suber la pagina a un servidor y tenga,
                                        //un puerto por defecto tome ese en vez del puerto 3000
                                        //Es como un metodo de validacion

app.use
let f = (req,res)=>{
    res.header("Access-Control-Allow-Origin","*");// Esta cabecera permite el acceso a la paginaweb
                                                 /// El * se refiere a que cualquier dominio puede acceder
                                                 //Cuando se usan cookies debes de expesificar el dominio
                                                 //Solo se puede expesificar un dominio.

    res.header("Access-Control-Allow-Credentials","true");//Esta cabecera perminte el uso de credenciales
    res.send({
        hola:"mundo"
    });
}

app.options("/",(req,res)=>{    //Options es un ruta por defecto cuando se hace una peticion compleja o preflight
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","PUT");   //Expesifica el metodo Usado
    res.header("Access-Control-Allow-Headers","Content-Type, Authentication"); //Permite las cabeceras
    res.header("Access-Control-Allow-Credentials","true");
    res.status(204).send();
                                            //Estos headers sirven para no tener problemas con Cors
});

app.get("/",f);
app.post("/",f);
app.post("/",f)
app.listen(app.get('port'),()=>{
    console.log("Server on Port 3000");
});