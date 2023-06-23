let whereFrom = "stellenbosch";
let whereTo = "paarl";

function searchLifts() {
    let whereFromInput = document.getElementById("whereInput").value;
    let whereToInput = document.getElementById("toInput").value;

    if (whereFromInput==whereFrom && whereToInput==whereTo) {
        //alert("We have found a ride for you!")
        window.location.assign("rideFound.html")
    } 
    else {
        alert("No ride found!");
    }
};
