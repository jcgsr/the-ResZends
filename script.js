let date = new Date()


let currentDate = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
})
let getDateId = document.getElementById('date')
getDateId.innerHTML = currentDate