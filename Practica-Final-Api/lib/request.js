//Peticiones AJAX
const path="todos";
const endpoint="https://jsonplaceholder.typicode.com";
export default (action)=>{
    let options={
        method: getMethod(action)
    }
    return fetch(endpoint+getPath(action),options).then(r=>r.json());
}

let getMethod =(action)=>{
    switch(action.type){
        case "create":
            return "POST"
        case "update":
            return "PUT"
        case "destroy":
            return "DELETE"
        case "list":
            return "GET"
        case "listAll":
            return "GET"

    }   
        
}
let getPath =(action)=>{
    console.log(action);
    switch(action.type){
        case "create":
            console.log("entro en switch");
            return `/${path}`
        case "update":
            console.log("entro en switch");
            return `/${path}/${action.payload.id}`
        case "destroy":
            console.log("entro en switch");
            return `/${path}/${action.payload.id}`
        case "list":
            console.log("entro en switch");
            return `/${path}/${action.payload.id}`
        case "listAll":
            console.log("entro en switch");
            return `/${path}?_limit=20`

    }   
        
}