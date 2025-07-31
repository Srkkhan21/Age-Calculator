let userinput = document.getElementById("date");
userinput.max = new Date().toISOString().split("T")[0];

//RESULT
let result = document.getElementById("result");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");

//FUNCTION
function calculateAge() {
  let birth = new Date(userinput.value);
  //user birth date
  let birthyear = birth.getFullYear();
  let birthmonth = birth.getMonth() + 1;
  let birthdate = birth.getDate();

  //current date
  let current = new Date();
  let currentyear = current.getFullYear();
  let currentMonth = current.getMonth() + 1;
  let currentDate = current.getDate();

  // AGE
  let ageYear, ageMonth, ageDay;
  //AGE YEARS
  ageYear = currentyear - birthyear;

  //AGE MONTH
  if (currentMonth >= birthmonth) {
    ageMonth = currentMonth - birthmonth;
  } else {
    ageYear--;
    ageMonth = 12 + currentMonth - birthmonth;
  }
  //AGE DAY
  if (currentDate >= birthdate) {
    ageDay = currentDate - birthdate;
  } else {
    ageMonth--;
    ageDay =
      getDaysInMonth(currentMonth, currentyear) + currentDate - birthdate;
  }

  if (ageMonth < 0) {
    ageMonth = 11;
    ageYear--;
  }
  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  //NEXT YEAR

  let nextDate = birthdate;
  let nextMonth = birthmonth;
  let nextYear = currentyear + 1;

  //REMAINING TIME
  let remainYear, remainMonth, remainDays;

  //REMAIN YEAR
  remainYear = nextYear - currentyear;

  //REMAIN MONTHS
  if (nextMonth >= currentMonth) {
    remainMonth = nextMonth - currentMonth;
  } else {
    remainYear--;
    remainMonth = 12 + nextMonth - currentMonth;
  }

  //REMAIN DAYS
  if (nextDate >= currentDate) {
    remainDays = nextDate - currentDate;
  } else {
    remainMonth--;
    remainDays = getDaysInMonth(nextYear, nextMonth) + nextDate - currentDate;
  }
  if (remainMonth < 0) {
    remainMonth = 11;
    remainYear--;
  }

  //REST DAYS UNTIL NEXT BIRTHDAY
  let nextBirthday = new Date(current.getFullYear(), birthmonth - 1, birthdate);

  if (current > nextBirthday) {
    nextBirthday.setFullYear(current.getFullYear() + 1);
  }

  let allRestDays = nextBirthday - current;
  allRestDays = Math.floor(allRestDays / (1000 * 60 * 60 * 24));
  console.log(allRestDays);

  //RESULT
  result.innerHTML = You are <span>${ageYear}</span> year(s) <span>${ageMonth}</span> month(s) <span>${ageDay}</span> day(s) old.;

  result1.innerHTML = Your next birthday 🎂 is in <span>${remainMonth}</span> month(s) and <span>${remainDays}</span> day(s).;

  result2.innerHTML = <span>${allRestDays}</span> days left until your next birthday!;
}
