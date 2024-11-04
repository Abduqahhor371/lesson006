function getWeekday(day) {
    const days = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"];
    return (day >= 1 && day <= 7) ? days[day - 1] : "Xato";
}

console.log(getWeekday(3)); // Chorshanba

function getGradeDescription(grade) {
    const grades = ["yomon", "qoniqarsiz", "qoniqarli", "yaxshi", "a'lo"];
    return (grade >= 1 && grade <= 5) ? grades[grade - 1] : "Xato";
}

console.log(getGradeDescription(4)); // yaxshi

function getSeason(month) {
    const seasons = ["qish", "bahor", "yoz", "kuz"];
    if (month >= 1 && month <= 3) return seasons[0];
    if (month >= 4 && month <= 6) return seasons[1];
    if (month >= 7 && month <= 9) return seasons[2];
    if (month >= 10 && month <= 12) return seasons[3];
    return "Xato";
}

console.log(getSeason(2)); // qish

function getDaysInMonth(month) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return (month >= 1 && month <= 12) ? days[month - 1] : "Xato";
}

console.log(getDaysInMonth(2)); // 28

function calculate(a, b, operation) {
    switch(operation) {
        case 1: return a + b;
        case 2: return a - b;
        case 3: return a * b;
        case 4: return a / b;
        default: return "Xato";
    }
}

console.log(calculate(5, 3, 1)); // 8

function getLengthInMeters(length, unit) {
    const conversion = [0.1, 1000, 1, 0.001, 0.01, 0.0001];
    return (unit >= 1 && unit <= 5) ? length * conversion[unit - 1] : "Xato";
}

console.log(getLengthInMeters(5, 3)); // 5 metr

function getWeightInKilograms(weight, unit) {
    const conversion = [1, 0.001, 0.001, 1000, 0.01, 0.000001];
    return (unit >= 1 && unit <= 5) ? weight * conversion[unit - 1] : "Xato";
}

console.log(getWeightInKilograms(2000, 3)); // 2 kilogramm

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDayOfYear(day, month, year) {
    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = day;
    for (let i = 0; i < month - 1; i++) {
        totalDays += daysInMonth[i];
    }
    return totalDays;
}

console.log(getDayOfYear(5, 3, 2024)); // mart 5 - sana

function getDateByDayNumber(dayNumber, isLeapYear) {
    const daysInMonth = isLeapYear ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let month = 0;
    while (dayNumber > daysInMonth[month]) {
        dayNumber -= daysInMonth[month];
        month++;
    }
    return { day: dayNumber, month: month + 1 };
}

console.log(getDateByDayNumber(60, true)); // 29-fevral

function robotMovement(direction, command) {
    const directions = ["shimol", "janub", "sharq", "g'arb"];
    let index = directions.indexOf(direction);
    if (command === 0) return directions[index];
    if (command === 1) return directions[(index + 3) % 4];
    if (command === 2) return directions[(index + 1) % 4];
    if (command === -1) return directions[(index + 2) % 4];
    return "Xato";
}

console.log(robotMovement("shimol", 2)); // sharq



// if
// if 1
function if1(x) {
    if (x > 0) {
      x += 1;
    }
    console.log("Natija:", x);
  }
  if1(5); // Musbat son uchun
  if1(-3); // Manfiy son uchun
// if 2
  function if2(x) {
    if (x > 0) {
      x += 1;
    } else {
      x -= 2;
    }
    console.log("Natija:", x);
  }
  if2(5); // Musbat son uchun
  if2(-3); // Manfiy son uchun
// if 3
  function if3(x) {
    if (x > 0) {
      x += 1;
    } else if (x < 0) {
      x -= 2;
    } else {
      x = 10;
    }
    console.log("Natija:", x);
  }
  if3(5); // Musbat son uchun
  if3(-3); // Manfiy son uchun
  if3(0); // Nol uchun
// if 4
  function if4(a, b, c) {
    let count = 0;
    if (a > 0) count++;
    if (b > 0) count++;
    if (c > 0) count++;
    console.log("Musbat sonlar soni:", count);
  }
  if4(5, -3, 2);
// if 5
  function if5(a, b, c) {
    let positive = 0, negative = 0;
    if (a > 0) positive++;
    if (b > 0) positive++;
    if (c > 0) positive++;
    if (a < 0) negative++;
    if (b < 0) negative++;
    if (c < 0) negative++;
    console.log("Musbat sonlar soni:", positive, "Manfiy sonlar soni:", negative);
  }
  if5(5, -3, -2);
// if 6
  function if6(a, b) {
    console.log("Kattasi:", a > b ? a : b);
  }
  if6(5, 3);
// if 7
  function if7(a, b) {
    if (a < b) {
      console.log("Kichigi:", a, "Kattasi:", b);
    } else {
      console.log("Kichigi:", b, "Kattasi:", a);
    }
  }
  if7(5, 3);
// if 8
  function if8(a, b) {
    if (a > b) {
      console.log("Avval kattasi:", a, "keyin kichigi:", b);
    } else {
      console.log("Avval kattasi:", b, "keyin kichigi:", a);
    }
  }
  if8(5, 3);
// if 8
  function if9(a, b) {
    if (a > b) {
      let temp = a;
      a = b;
      b = temp;
    }
    console.log("A:", a, "B:", b);
  }
  if9(5, 3);
// if 10
  function if10(a, b) {
    if (a !== b) {
      if (a > b) {
        b = a;
      } else {
        a = b;
      }
    } else {
      a = 0;
      b = 0;
    }
    console.log("A:", a, "B:", b);
  }
  if10(5, 3);
  if10(5, 5);