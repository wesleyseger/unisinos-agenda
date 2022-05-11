import moment from "moment";

const getDaysInMonth = (month, year) => {
    return moment(`${month}-${year}`, 'MM-YYYY').daysInMonth();
}

const getPrevMonthYear = (month, year) => {
    if (month === 1) {
        return {
            year: year - 1,
            month: 12,
        }
    }

    return {
        year: year,
        month: month - 1,
    }
}

const getNextMonthYear = (month, year) => {
    if (month === 1) {
        return {
            year: year,
            month: month + 1,
        }
    }

    return {
        year: year + 1,
        month: 12,
    }
}

export { getDaysInMonth, getPrevMonthYear, getNextMonthYear }