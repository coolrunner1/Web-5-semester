const date = new Date();

const monthNames = {"Январь":0, "Февраль":1, "Март":2, "Апрель":3,
    "Май":4, "Июнь":5, "Июль":6, "Август":7,
    "Сентябрь":8, "Октябрь":9, "Ноябрь":10, "Декабрь":11};

const generateYears = () => {
    let years = [];
    for (let i = 2099; i >= 1900; i--) {
        years.push(i);
    }
    return years;
}

const appendYears = () => {
    let years = generateYears();
    const yearsContainer= document.getElementById('calendar-year');
    yearsContainer.onchange=()=>{appendDays(yearsContainer.value, getSelectedMonth())};
    years.forEach(year => {
        const yearOption = document.createElement("option");
        yearOption.value = year;
        yearOption.textContent = year;
        if (year===date.getFullYear()){
            yearOption.selected = true;
        }
        yearsContainer.appendChild(yearOption);
    })
};

const appendMonth= () => {
    const monthContainer= document.getElementById('calendar-month');
    monthContainer.onchange=()=>{appendDays(getSelectedYear(), monthContainer.value)};
    for (month in monthNames) {
        const monthOption = document.createElement("option");
        monthOption.value = monthNames[month];
        monthOption.textContent = month;
        if (monthNames[month]===date.getMonth()){
            monthOption.selected = true;
        }
        monthContainer.appendChild(monthOption);
    }
};

const clearDays = () => {
    const daysContainer = document.getElementById('calendar-days-container');
    if (!document.getElementById("week-0")){
        return;
    }
    for (let i = 0; i < 6; i++) {
        const weekContainer = document.getElementById('week-'+i);
        daysContainer.removeChild(weekContainer);
    }
}

const appendDays = (year, month) => {
    clearDays();
    const daysContainer = document.getElementById('calendar-days-container');
    const startingPosition = getDayOfTheWeek(year, month, 1);
    const endingPosition = getNumberOfDays(year, month);
    let day = 0;
    for (let i = 0; i<6; i++){
        const weekContainer = document.createElement("div");
        weekContainer.classList.add("calendar-week");
        weekContainer.id="week-"+i;
        for (let j=0; j<7; j++){
            const dayButton = document.createElement("button");
            dayButton.classList.add("calendar-day");
            if ((j<startingPosition && i===0) || day===endingPosition){
                dayButton.classList.add("day-null");
            } else {
                dayButton.textContent = (++day).toString();
                dayButton.value = day.toString();
                dayButton.onclick = () => updateDateInput(dayButton.value);
            }
            weekContainer.appendChild(dayButton);
        }
        daysContainer.appendChild(weekContainer);
    }
    getNumberOfDays(year, month);
};

const getNumberOfDays = (year, month) => {
    return new Date(year, month, 0).getDate();
};

const getDayOfTheWeek = (year, month,  day) => {
    return new Date(year, month, day).getDay();
};

const getSelectedYear = () => {
    return parseInt(document.getElementById('calendar-year').value);
};

const getSelectedMonth = () => {
    return parseInt(document.getElementById('calendar-month').value);
}

const convertDayOrMonth = (input) => {
    return parseInt(input)<10?"0"+input:input;
}

const updateDateInput = (day) => {
    const dateInput = document.getElementById('date');
    dateInput.value = getSelectedYear()+"-"+convertDayOrMonth(getSelectedMonth()+1)+"-"+convertDayOrMonth(day);
}

const appendCalendar = () => {

};

document.getElementById("date").onclick = () => appendCalendar();



appendYears();

appendMonth();

appendDays(date.getFullYear(), date.getMonth());

console.log("October, 1 is "+getDayOfTheWeek(2024, 9, 1));
