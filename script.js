function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Insira um valor!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let i = 1; i <= 10; i++) {
        let item = document.createElement('option')
        item.text = `${n} x ${i} = ${n*i}`
        tab.appendChild(item)
        }
    }
}