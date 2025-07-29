let userinput = document.getElementById('date');
userinput.max = new Date().toISOString().split('T')[0];

//RESULT
let result = document.getElementById('result');

//FUNCTION
function calculateAge() {
    let birth = new Date(userinput.value);

    // user birth date
    let birthyear = birth.getFullYear();
    let birthmonth = birth.getMonth() + 1;
    let birthdate = birth.getDate();

    // current date
    let current = new Date();
    let currentyear = current.getFullYear();
    let currentMonth = current.getMonth() + 1; // 1 to 12
    let currentDate = current.getDate();

    // AGE
    let ageYear = currentyear - birthyear;
    let ageMonth, ageDay;

    // AGE MONTH
    if (currentMonth >= birthmonth) {
        ageMonth = currentMonth - birthmonth;
    } else {
        ageYear--;
        ageMonth = 12 + currentMonth - birthmonth;
    }

    // AGE DAY
    if (currentDate >= birthdate) {
        ageDay = currentDate - birthdate;
    } else {
        ageMonth--;
        ageDay = getDaysInMonth(currentyear, currentMonth - 1) + currentDate - birthdate;
    }

    if (ageMonth < 0) {
        ageMonth = 11;
        ageYear--;
    }

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    result.innerHTML = `You are <span>${ageYear}</span> years <span>${ageMonth}</span> months <span>${ageDay}</span> days old.`;
}
