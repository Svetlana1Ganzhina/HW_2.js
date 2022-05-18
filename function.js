// let age_1 = 10;
// let age_2 = 18;
// let age_3 = 60;

//   if (true) {
//     console.log("age_1 == " , age_1);
    
// } if (age_1 < age_2) {
//     console.log("You don’t have access cause your age is " + age_1 + " It’s less then ");
// } if (age_1 >= age_2 && age_1 < age_3) {
// // (false && true)
//     console.log("Welcome " );
// } else if (age_1 > age_3) {
//     console.log("Keep calm and look Culture channel");
// } else {
//     console.log("Technical work" );
// };

function workDays(day){

let h_days = ['Saturday', 'Sunday']
let w_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

if (typeof day == "string") {
    if (w_days.includes(day)){
        return true
    } else if (h_days.includes(day)){
        return false
    } else {
        return false    }
} else {
    console.log("Error!!!")
}
}
console.log(workDays('Friday'))


function check_hours(hour){
    if (hour < 18 && hour >= 8) {
        return true
    } else if (hour >= 24 || hour < 0) {
        return false
    }
}

let day = "Monday";
let hour = 15;

if (workDays(day) && check_hours(hour)){
    console.log("Open!")
} else {
    console.log("Close!")
};


// Конструкция SWICH CASE
let test_day = "Monday";

switch(test_day){
    case "Saturday":
            console.log("Cool! Saturday")
         break;
        case "Monday":
            console.log("Cool! Monday")
         break;
        case "Sunday":
            console.log("Cool! Sunday")
         break;
        default:
            console.log("default!!!")
};