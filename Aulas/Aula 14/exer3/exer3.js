fetch('./exer3.json')
.then(response=>response.json())
.then(cursos=>{
    for(const curso in cursos)
    {
        let newCurso= document.createElement("p");
        newCurso.innerHTML = cursos[curso];
        document.querySelector('h1').appendChild(newCurso)
    }
}
);