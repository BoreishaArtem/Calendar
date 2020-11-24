const date = new Date()
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const render = () => {
    const monthDays = document.querySelector('.days')

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    date.setDate(1)
// console.log(date.getDay())
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    console.log(prevLastDay)
    const firstDayIndex = date.getDay()
    console.log(firstDayIndex)
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()

    const nexDays = 7 - lastDayIndex - 1

    document.querySelector('.date h1').textContent = months[date.getMonth()]

    document.querySelector('.date p').textContent = date.toDateString()

    let days = ''

    for (let x = firstDayIndex; x > 0; x--) {
        console.log(prevLastDay - x + 1)
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`
        } else  {
            days += `<div>${i}</div>`
        }
        // monthDays.innerHTML = days
    }

    for (let i = 0; i <= nexDays; i++) {
        days += `<div class="next-date">${i + 1}</div>`
    }

    monthDays.innerHTML = days

}


document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1)
    render()
})


document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1)
    render()
})

render()


