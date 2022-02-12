let form = $('#form')
let data = $('#data')

form.submit(function (evento) {
    evento.preventDefault()

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=qxrLRupjtxkUzvA0Pdyz1tWck3Q0ehEQaWy6fXZt&date=${data.val()}`,

        success: function (dado) {
            $('#resultado').css({
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', background: 'rgba(255, 255, 255, 0.2)',
            })

            $('#resultado').html(`<h1 class="titulo-resultado">
            ${dado.title}</h1>
            <p class="texto-resultado">${dado.explanation}</p>
            <img class="img-resultado" src="${dado.url}"/>`)

            $('.titulo-resultado').css({
                fontSize: '1.5em',
                textShadow: '0px 0px 10px rgba(0, 73, 175, .3)'
            })

            $('.texto-resultado').css({
                width: '80%',
                height: 'auto',
                fontSize: '1em',
                textAlign: 'justify',
                background: '#dadada',
                padding: '15px',
                borderRadius: '15px',
                boxShadow: '0px 0px 10px rgb(0, 73, 175)',

            })

            $('.img-resultado').css({
                width: '90%',
                height: '300px',
                borderRadius: '15px',
                boxShadow: '0px 0px 10px rgb(0, 73, 175)',

            })           
        },

        error: function (erro) {
            console.log(erro)
        }

    })
})

