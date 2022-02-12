let form = $('#form')
let data = $('#data')

form.submit(function (evento){
    evento.preventDefault()
    
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=qxrLRupjtxkUzvA0Pdyz1tWck3Q0ehEQaWy6fXZt&date=${data.val()}`,
    
        success: function (dado){
            $('#resultado').css({display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', background: 'rgba(92, 112, 139, 0.4)', })
            $('.pesquisa').css('justify-content', 'space-evenly')
            console.log(dado)
            $('#resultado').html(`
            <h1 class="titulo-resultado">${dado.title}</h1>
            <p class="texto-resultado">${dado.explanation}</p>
            <img class="img-resultado" src="${dado.url}"/> 
            `)
        },
    
        error: function(erro){
            console.log(erro)
        }
        
    })
})

