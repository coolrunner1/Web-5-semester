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
    const yearsContainer= $('#calendar-year');
    years.forEach(year => {
        const yearOption = $("<option value='"+year+"'>"+year+"</option>");
        if (year===date.getFullYear()){
            yearOption.attr('selected','selected');
        }
        yearsContainer.append(yearOption);
    })
    yearsContainer.on("change", ()=>{appendDays(yearsContainer.val().toString(), getSelectedMonth())});
};

const appendMonth = () => {
    const monthContainer= $('#calendar-month');
    for (let month in monthNames) {
        const monthOption = $("<option value='"+month+"'>"+month+"</option>");
        if (monthNames[month]===date.getMonth()){
            monthOption.attr('selected','selected');
        }
        monthContainer.append(monthOption);
    }
    monthContainer.on("change", ()=>{appendDays(getSelectedYear(), monthNames[monthContainer.val().toString()])});
};

const clearDays = () => {
    const daysContainer = $('#calendar-days-container');
    if (!$("#week-0").length){
        return;
    }
    for (let i = 0; i < 6; i++) {
        daysContainer.children('#week-'+i).remove();
    }
}

const appendDays = (year, month) => {
    clearDays();
    console.log(year, month)
    const daysContainer = $('#calendar-days-container');
    const startingPosition = getDayOfTheWeek(year, month, 1);
    const endingPosition = getNumberOfDays(year, month);
    let day = 0;
    for (let i = 0; i<6; i++){
        const weekContainer = $("<div class='calendar-week' id='week-"+i+"'></div>");
        weekContainer.on("click", ".day-button", function() {
            updateDateInput($(this).val().toString());
        });
        for (let j=0; j<7; j++){
            const dayButton = $("<button class='calendar-day' type='button'></button>");
            if ((j<startingPosition && i===0) || day===endingPosition){
                dayButton.addClass("day-null");
            } else {
                dayButton.text((++day).toString());
                dayButton.val(day.toString());
                dayButton.addClass("day-button");
            }
            weekContainer.append(dayButton);
        }
        daysContainer.append(weekContainer);
    }
    getNumberOfDays(year, month);
};

const getNumberOfDays = (year, month) => {
    month++;
    return new Date(year, month, 0).getDate();
};

const getDayOfTheWeek = (year, month,  day) => {
    return new Date(year, month, day).getDay();
};

const getSelectedYear = () => {
    return parseInt($('#calendar-year').val().toString());
};

const getSelectedMonth = () => {
    return monthNames[$('#calendar-month').val().toString()];
}

const convertDayOrMonth = (input) => {
    return parseInt(input)<10?"0"+input:input;
}

const updateDateInput = (day) => {
    const dateInput = $('#date');
    if (!dateInput.hasClass("date-input-changed")){
        dateInput.addClass("date-input-changed");
    }
    dateInput.val(getSelectedYear()+"-"+convertDayOrMonth(getSelectedMonth()+1)+"-"+convertDayOrMonth(day));
}

const appendCalendar = () => {
    const calendarContainer = $('#calendar-container');
    const calendar = $("<div id='calendar'><div id='calendar-header'><select id='calendar-month'></select>" +
        "<select id='calendar-year'></select></div>" +
        "<div id='calendar-days-container'><div class='calendar-week calendar-week-header'>" +
        "<div>Вс</div><div>Пн</div><div>Вт</div><div>Ср</div><div>Чт</div><div>Пт</div><div>Сб</div></div></div></div>");
    calendarContainer.append(calendar);
    appendYears();
    appendMonth();
    appendDays(date.getFullYear(), date.getMonth());
};

const removeCalendar = () => {
    $("#calendar").remove();
};

$("#date").on("click", () => {
    if (!$("#calendar").length) {
        appendCalendar();
    } else {
        removeCalendar();
    }
});