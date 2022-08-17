const {Router}=require("express");
const fetch=require("node-fetch");
const router=Router();

router.get('/await',async (req,res)=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/users?id=5");//Fetch retorna una cadena
    const users = await response.json(); //Convierta la cadena a JSON
    res.json(users);
}); 
router.get('/', (req,res)=>{
    let users=fetch("https://jsonplaceholder.typicode.com/users")
     .then(promesa=>promesa.json())
     .then(data=>res.json(data));
    }); 

router.get("/parametros",(req,res)=>{
    let parametros={
        name: "Chelsey Dietrich", //El parametro name sirve para hacer una busqueda
        _limit:3                   //_limit sirve para no mostrar mas de 3 coincidencias de la busqueda
    }
    let url=new URL("https://jsonplaceholder.typicode.com/users");//El Url se asigna a una variable.
    Object.keys(parametros).forEach(paramkey=>{
        url.searchParams.append(//sirve para crear un url con los parametros declarados anteriormente              
            paramkey,           //Primero se agrega el nombre de la variable al Url
            parametros[paramkey]//Despues el valor de la varible 

        )//El resultado final es un link que pueda entender el metodo fetch
    });
    console.log(url);//
    fetch(url).then(param=>param.json()).then(data=>res.json(data));
});
router.post("/Nuevo",(req,res)=>{
    fetch("https://jsonplaceholder.typicode.com/users",{
        method:'POST',
        body: JSON.stringify(req.body), //En este parametro body se agrega los datos que quieres guardar,
                                        //tienen que ser en formato cadena para eso se uso !!*stringify*!!

        headers:{
            "Content-type": "application/json; charset=UTF-8"//Los headers ayuda al servidor a comprender los datos mandados
        }
    }).then((param)=>param.json()).then((data)=>res.json(data));
});
module.exports=router;