
  /*  database.ref().on("value", function (childSnapshot){
        $("tbody").append("<tr class = table-row>"+
    "<td>"+childSnapshot.val().name+"</td>"+
    "<td>"+childSnapshot.val().destination+"</td>"+
    "<td>"+childSnapshot.val().occurance+"</td>"+
    "</tr>")
})*/

let train = ""
let destination = ""
let firstTrain = ""
let frequency = ""

$("#ntrain").on("click", function(event){
  event.preventDefault();
let train = $("#train").val();
let destination = $("#destination").val();
let firstTrain = $("#first").val();
let frequency = $("#frequency").val();
console.log(train)
console.log(destination)
console.log(frequency)
console.log(firstTrain)

database.ref().push({
    name: train,
    destination: destination,
    firstTrain: firstTrain,
    occurance: frequency
});

database.ref().once("child_added", function (childSnapshot){
    console.log(childSnapshot.val().name)
    console.log(childSnapshot.val().destination)
    console.log(childSnapshot.val().occurance)

    let freq= frequency

    
    var firstTime = firstTrain;
    var converted = moment(firstTime, "HH:mm").subtract(1, "years");   
    var nextTrainTime = moment().diff(moment(converted), "minutes");   
    var remainingTime = nextTrainTime % freq;    
    var minLeft = freq - remainingTime;   
    var nextTrain = moment().add(minLeft, "minutes");
    let arrival = moment(nextTrain).format("hh:mm");

    
    $("tbody").append("<tr class = table-row>"+
    "<td>"+childSnapshot.val().name+"</td>"+
    "<td>"+childSnapshot.val().destination+"</td>"+
    "<td>"+childSnapshot.val().occurance+"</td>"+
    "<td>"+arrival+"</td>"+
    "<td>"+minLeft+"</td>"+
    "</tr>")
})


})
//})


//occurance === frequency * 1000
//newtrain = 

// table<tbody?
//60*60*1000* 12