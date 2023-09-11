const focoBt = document.querySelector('.app__card-button--foco-active')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const html = document.querySelector('html')
const banner = document.querySelector('.app__logo-image')

curtoBt.addEventListener('click', () => {
    alterarImg("descanso-curto")
})

focoBt.addEventListener('click', () => {
    alterarImg("foco")
})

longoBt.addEventListener("click", () => {
    alterarImg("descanso-longo")
})
/*curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    banner.setAttribute('src', '/imagens/descanso-curto.png')
})

focoBt.addEventListener('click', () => {
    html.setAttribute("data-contexto", 'foco')
    banner.setAttribute("src", "/imagens/foco.png")
})


longoBt.addEventListener('click', () => {
    html.setAttribute("data-contexto", 'descanso-longo')
    banner.setAttribute("src", "/imagens/descanso-longo.png")
})*/

function alterarImg (contexto) {
    html.setAttribute("data-contexto", contexto)
    banner.setAttribute("src", `/imagens/${contexto}.png`) 
}