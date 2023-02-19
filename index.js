
// // document.getElementById("count-el").innerText = 10
// // firstbactch = 101
// // secondbatch = 10
// // let  count = firstbactch + secondbatch
// // console.log(count)


// // let myage = 27
// // console.log(myage)



// // 1. Create two variables, myAge and humanDogRatio
// // 2. Multiply the two together and store the result in myDogAge 
// // 3. Log myDogAge to the console

// // let myage = 27

// // let humandogration = 7

// // mydogage = myage * humandogration

// // console.log(mydogage)


// // Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// // Decrease it down to 25, and then finally increase it to 70


// // bounsPoints = 50

// // bounsPoints = bounsPoints + 100

// // bounsPoints = bounsPoints - 25

// // bounsPoints = bounsPoints + 70

// // console.log(bounsPoints);


// // let count = 5

// // count = count + 1

// // count = count + 20
// // count = count - 10

// // console.log(count);


let countEl = document.getElementById("count-el")
// console.log(countEl)

let count = 0


function increment(){
 
 count += 1
 countEl.innerText = count
}
increment()

    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
 let saveEl = document.getElementById("save-el")


function save(){
    let countstr = count + " - " 


    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
 
}




// function mylog(){
//     console.log(42)
// }

// mylog()


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36


// function race(){
//     let totallogtime = lap1 + lap2 + lap3
//     console.log(totallogtime)
// }

// race()

// let message = "You have tree new notifications"
// console.log(message);
// // Create a function that increments the lapsCompleted variable with one
// // Run it three times

// let lapsCompleted = 0

// function lapcom(){
//     lapsCompleted = lapsCompleted + 1
// }

// lapcom()
// lapcom()
// lapcom()

// console.log(lapsCompleted)



// name = "Mahesh"

// greeting ="Hi, my name is "


// mygreeting = greeting + " ," + name 

// console.log(mygreeting)


// let points = 4
// let bonuspoints = "10"

// let totoalpoints = points + bonuspoints

// console.log(totoalpoints);


// console.log(4 + 5);
// console.log("2" + "4");
// console.log("5" + 1);
// console.log(100 + "100");


// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText


// let welcome1 = document.getElementById("welcome")
// console.log(welcome1)

// let name1 = "Mahesh"
// let greeting1 = "Welcome to scimba tutorial "

// welcome1.innerText =  greeting1 + name1

// // welcome1.innerText = welcome1.innerText + "👋"
// welcome1.innerText += "👋"




