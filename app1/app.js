class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] =='' || this[i] ==null){
                return false
            }
        }
        return true
    }
}

class Bd{
    constructor(){
        let id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', 0)
        }
    }
    
    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(d){
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }
    

    recuperarRegistros(){
        //array despesas
        let despesas = Array()

        let id = localStorage.getItem('id')
        
        //iterar e recuperar as despesas de localStorage
        for(let i = 1; i<= id; i++){
            //recuperar despesa
            let despesa = JSON.parse(localStorage.getItem(i))

            //Verificar indices vazios
            if(despesa === null){
                continue
            } 
            despesa.id = i
            despesas.push(despesa)
            
        }
        return despesas
    }

    pesquisar(despesa) {
        let despesasFiltradas = this.recuperarRegistros();

        // Filtro ano
        if (despesa.ano != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano);
        }

        // Filtro mes
        if (despesa.mes != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes);
        }

        // Filtro dia
        if (despesa.dia != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia);
        }

        // Filtro tipo
        if (despesa.tipo != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo);
        }
        
        // Filtro descricao
        if (despesa.descricao != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao);
        }
        
        // Filtro valor
        if (despesa.valor != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor);
        }

        console.log(despesasFiltradas);
        
        // IMPORTANTE: Retorne o array filtrado para poder usá-lo na interface
        return despesasFiltradas;
    }

    remover(id){
        localStorage.removeItem(id)
    }

}

let bd = new Bd()

//Ao clicar no button chama a função Cadastrar Despesa
function cadastrarDespesa(){
    let ano = document.getElementById('ano'); let mes = document.getElementById('mes')
    let dia = document.getElementById('dia'); let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao'); let valor = document.getElementById('valor')

    let despesa = new Despesa(
        ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value,
    )

    if (despesa.validarDados()){
        bd.gravar(despesa)
        
        //dialog de sucesso
        document.getElementById('modalTitulo').innerHTML = 'Registro inserido com sucesso' //título modal sucesso
        document.getElementById('modalTituloDiv').className = 'modal-header text-white bg-success'
        document.getElementById('modalConteudo').innerHTML = 'A despesa foi cadastrada com sucesso!'
        document.getElementById('modalBtn').className = 'btn btn-success'

        $('#registraDespesa').modal('show') //Método do jquery do bootstrap

        //Limpar campos do formulário
        ano.value=''; mes.value=''; dia.value='';tipo.value='';descricao.value='';valor.value='';
    } else {
        
        //dialog erro
        document.getElementById('modalTitulo').innerHTML = 'Erro na inclusão do registro' //título modal erro
        document.getElementById('modalTituloDiv').className = 'modal-header text-white bg-danger'
        document.getElementById('modalConteudo').innerHTML = 'Erro na gravação verifique se todos os campos foram preenchido corretamente'
        document.getElementById('modalBtn').className = 'btn btn-danger'

        $('#registraDespesa').modal('show') //Método do jquery do bootstrap
    }
}

function carregaListaDespesas(despesas = Array()) {
    // Se nenhum array foi passado (como no carregamento inicial da página), busca todos os registros
    if (despesas.length == 0 && arguments.length == 0) {
        despesas = bd.recuperarRegistros()
    }
    
    // Selecionando o tbody
    let listaDespesas = document.getElementById('listaDespesas')
    
    // 🧹 LIMPA A TABELA ANTES DE INSERIR OS NOVOS DADOS (Resolve a duplicação)
    listaDespesas.innerHTML = ''
    
    // Iterando sobre as despesas e inserindo na tabela
    despesas.forEach(function(d){
        let linha = listaDespesas.insertRow()

        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
        
        // Ajustar tipo para exibição
        let tipoStr = d.tipo
        switch(parseInt(d.tipo)){
            case 1: tipoStr = 'Alimentação'; break
            case 2: tipoStr = 'Educação'; break
            case 3: tipoStr = 'Lazer'; break
            case 4: tipoStr = 'Saúde'; break
            case 5: tipoStr = 'Transporte'; break
        }
        linha.insertCell(1).innerHTML = tipoStr
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = `R$ ${d.valor}`
        
        //Botão de exclusão
        let btn = document.createElement('button')
        btn.className = 'btn btn-danger'; 
        btn.innerHTML = '<i class="fas fa-trash-alt"></i>'
        btn.id = `id_despesa_${d.id}`

        //função para remover a despesa
        btn.onclick = function(){
            
            let id = this.id.replace('id_despesa_', '')

            //modal exclusão de item
            document.getElementById('modalTitulo').innerHTML = 'Exclusão de item' //título modal sucesso
            document.getElementById('modalTituloDiv').className = 'modal-header text-white bg-warning'
            document.getElementById('modalConteudo').innerHTML = 'Quer mesmo excluir esse item?'

            //botão sim
            document.getElementById('sim').innerHTML = 'Sim'
            document.getElementById('sim').className = 'btn btn-success'; 

            //verificar se clicou no sim
            let sim = document.getElementById('sim')
            sim.onclick = function(){
                //dialogo de sucesso
                bd.remover(id)
                window.location.reload()
            } 

            //botão não 
            document.getElementById('nao').className = 'btn btn-danger'; 
            document.getElementById('nao').innerHTML = 'Não'
            $('#excluirItem').modal('show')
        }
        linha.insertCell(4).append(btn)
    })
}

function pesquisarDespesa(){
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)
    let despesasFiltradas = bd.pesquisar(despesa)    
    carregaListaDespesas(despesasFiltradas)
    
}
