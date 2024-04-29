const Dates = {
    months : [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]   
}

export const getFormattedDate = (date)=> {
    return `${Dates.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

export default Dates