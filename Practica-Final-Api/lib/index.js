import {Todo} from '/lib/Todo.js';

window.addEventListener("load",(ev)=>{
//document se entiende que es el DOM osea la pagina web que esta en uso

    let container=document.querySelector("#root ul");//querySlector sirve para obtener un elemento del html,
                                                     //hace una busqueda en profundidad hasta encontrar el elemento buscado
                                                     //en este caso un clase con el id root y que dentro tenga una etiqueta ul
    
//#region Crear Nuevo Elemento
    document.querySelector("#mainForm").addEventListener("submit",(ev)=>{
        ev.preventDefault();//Evita que el formulario vuelva a ser llamado

        const form =ev.target;//Poner atencion en el Tarjet en futuros ejemplos
                              //por lo visto hace que la variable form sirva como document

        const textarea=form.querySelector("textarea");
        const button=form.querySelector("[type='submit']");
        button.disabled=true;
        let todo= new Todo({title:textarea.value});
        todo.save().then(()=>{
            textarea.value="";
            button.disabled=false;

            let li=buildDOMElement(todo);
            container.prepend(li);
        });
        return false;
    });
//#endregion
//#region Precarga de los elementos
        Todo.all().then(todos=>{
        todos.forEach(todo => {
            let node=buildDOMElement(todo);
            container.prepend(node);// prepend agrega un elemento al html en el inicio de la etiqueta
            
        });
    });
//#endregion
//#region Agrega los elementos al html,Actualiza,Elimina
    let buildDOMElement=(todo)=>{
        let li = document.createElement("li");//li es como un elemento de una lista
                                              //para ser mas exactos es un elemento que vamos a agregar a nuestra ul del index.html
    

                        /*innerHTML recibe una linea en lenguaje html para despues ser enviada al index.html */
        li.innerHTML=`
        <h1>${todo.title}<h1>
        <button class="close">X</button>
        `;
        li.querySelector(".close").addEventListener("click",(ev)=>{
            todo.destroy();
            li.remove();
        });
        editInPlace(li.querySelector("h1"),todo);
        return li;    
    }
//#endregion
//#region Funcion Editar
    let editInPlace=(node,todo)=>{
        node.addEventListener("click",(ev)=>{
            let inputText=document.createElement("textarea");
            inputText.value=node.innerHTML;
            inputText.autofocus=true;

            node.replaceWith(inputText); //replace with sirve para remplazar elementos, en este caso node que es como
                                        //una barrita donde se muestran los datos es remplazada por un inputText
            inputText.addEventListener("change",(ev)=>{
                inputText.replaceWith(node);
                todo.title=inputText.value;
                node.innerHTML=todo.title;
                todo.save().then(r=>console.log(r));
            })
        });
    }
//#endregion

});

