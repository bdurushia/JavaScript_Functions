console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0) {
        count = count * -1
    }
    else if (count === 0) {
        console.log(count)
    }

    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}

printOdds(77)

// Exercise 2 Section
console.log("\nEXERCISE 2:\n==========\n");

function isNumber(value) {
    return typeof value === 'number';
}

function checkAge(userName, age) {
    var aboveSixteen = `Congrats ${userName}, you can drive!`
    var belowSixteen = `Sorry ${userName}, but you need to wait until you're 16 to drive`

    if (age == null || userName == null || !isNaN(Number(userName)) || !isNumber(age)) {
        console.log(`Error. Please provide proper value inputs: ex. string "name", number(age) 27.`)
    }
    else if (age < 16) {
        console.log(belowSixteen)
    }
    else {
        console.log(aboveSixteen)
    }
}

checkAge("Bryan", 29)
checkAge("Finn", 13)
checkAge("12", "Finn")
// checkAge(null, "25")
// checkAge("Finn")

// Exercise 3 Section
console.log("\nEXERCISE 3:\n==========\n");

function checkCoordinates(x, y) {
    var point = `(${x}, ${y})`
    var message = `The point ${point} is on`

    if (x === null || y === null || isNaN(x) || isNaN(y)) {
        throw new Error("Invalid input. Two arguments needed of type number.")
    }

    if (x > 0 && y < 0) {
        console.log(`${message} Quandrant 4`)
    } else if (x < 0 && y < 0) {
        console.log(`${message} Quandrant 3`)
    } else if (x < 0 && y > 0) {
        console.log(`${message} Quandrant 2`)
    } else if (x > 0 && y > 0) {
        console.log(`${message} Quandrant 1`)
    } else if (x === 0 && y > 0 || y < 0) {
        console.log(`${message} the y axis`)
    } else if (y === 0 && x > 0 || x < 0) {
        console.log(`${message} the x axis`)
    } else {
        console.log(`${message} the center`)
    }
}

checkCoordinates(-4, 5)

// Exercise 4 Section
console.log("\nEXERCISE 4:\n==========\n");

function checkTypeTriangle(side1, side2, side3) {
    if (side1 == side2 && side2 == side3) {
        console.log("Equilateral Triangle")
    } else if (side1 == side2 || side2 == side3 || side3 == side1) {
        console.log("Isosceles Triangle")
    } else if (side1 != side2 || side2 != side3 || side3 != side1) {
        console.log("Scalene Triangle")
    }
}

function checkIsValidTriangle(side1, side2, side3) {

    var errMessage = "Sides do not form a triangle"
    var allSides = [side1, side2, side3]

    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        checkTypeTriangle(side1, side2, side3)
    } else {
        console.log(errMessage)
    }
}

checkIsValidTriangle(-3, 4, 5)

// Exercise 5 Section
console.log("\nEXERCISE 5:\n==========\n");

function dataPlanStatus(planLimit, day, usage) {
    var period = 30
    var dailyUseLimit = Math.round(100 * (planLimit / period)) / 100
    var userDailyAverage = Math.round(100 * (usage / day)) / 100
    var suggestedUsage = Math.round(100 * (planLimit / (period + 4))) / 100
    var excedingBy = Math.round(100 * ((userDailyAverage * period) - planLimit)) / 100
    var belowBy = Math.round(100 * (planLimit - (userDailyAverage * period))) / 100

    if (day > period || day <= 0 || usage < 0 || planLimit <= 0 || isNaN(day) || isNaN(planLimit) || isNaN(usage)) {
        console.log("Error. Data type entered is not of type number or is out of range.")
    } else {

        console.log(`${day} days used, ${period - day} days remaining\nAverage daily use limit: ${dailyUseLimit} GB/day`)
        if (userDailyAverage > dailyUseLimit) {
            console.log(`You are EXCEDING your average daily use (Using ${userDailyAverage} GB/day),`)
            console.log(`Continuing this high usage, you'll exceed your data plan by ${excedingBy} GB.`)
            console.log(`To stay BELOW your plan, use no more than ${suggestedUsage} GB/day.\n`)
        } else if (userDailyAverage < dailyUseLimit) {
            console.log(`You are BELOW your average daily use (Using ${userDailyAverage} GB/day),`)
            console.log(`Continuing this low usage, you'll stay under your data plan by ${belowBy} GB.\n`)
        } else {
            console.log(`WARNING: You are close to EXCEDING your average daily use (Using ${userDailyAverage} GB/day),`)
            console.log(`You'll want to consider using ${suggestedUsage - 0.5} GB/day\nto stay below your limit and not risk exceding it until your next period.\n`)
        }
    }

}

// dataPlanStatus(null, null, 30)
// dataPlanStatus(100, 15, 56)
// dataPlanStatus(60, 28, 0)
dataPlanStatus(60, 28, 55)
// dataPlanStatus(50, 18, 30)