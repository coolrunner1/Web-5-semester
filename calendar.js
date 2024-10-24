const monthNames = {"Январь":1, "Февраль":2, "Март":3, "Апрель":4,
    "Май":5, "Июнь":6, "Июль":7, "Август":8,
    "Сентябрь":9, "Октябрь":10, "Ноябрь":11, "Декабрь":12};

const generateYears = () => {
    let years = [];
    for (let i = 2099; i >= 1900; i--) {
        years.push(i);
    }
    return years;
}

const appendYears = () => {
    let years = generateYears();
    const yearContainer= document.getElementById('calendar-year');
    years.forEach(year => {
        const yearOption = document.createElement("option");
        yearOption.value = year;
        yearOption.textContent = year;
        if (year===2024){
            yearOption.selected = true;
        }
        yearContainer.appendChild(yearOption);
    })
};

const appendMonth= () => {
    const monthContainer= document.getElementById('calendar-month');
    for (month in monthNames) {
        const monthOption = document.createElement("option");
        monthOption.value = monthNames[month];
        monthOption.textContent = month;
        if (monthNames[month]===10){
            monthOption.selected = true;
        }
        monthContainer.appendChild(monthOption);
    }
};

const getNumberOfDays = (year, month) => {
    return new Date(year, month, 0).getDate();
};

const getDayOfTheWeek = (year, month,  day) => {
    return new Date(year, month, day).getDay();
};

appendYears();

appendMonth();

console.log(getDayOfTheWeek(2024, 9, 23));
