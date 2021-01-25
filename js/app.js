function escolher_unidade(){
    let select = document.getElementById("select-unidade")
    let unidade = select.options[select.selectedIndex].value;
    mostrar_unidade(unidade)
    
    
}

function mostrar_unidade(unidade){
    window.location.href = "unidades.html?unidade="+unidade;
    
}

function pega_parametro(){
    let params = window.location.search.substr(1).split('=');
    if (params.length > 1){
        let unidade = params[1]
        document.getElementById("select-unidade").value = unidade
        
        //console.log(select.options[select.selectedIndex].value)
        mostrar_div()
    }
}


function mostrar_div() {
    document.getElementById("unidade-escolhida").style.display = 'block';
    
}


function escolher_plano(plano){
    window.location.href = "cadastro.html?plano="+plano;
}

function pega_parametro2(){
    let params = window.location.search.substr(1).split('=');
    if (params.length > 1){
        let plano = params[1]
        document.getElementById("plano").value = plano
        
    }
}