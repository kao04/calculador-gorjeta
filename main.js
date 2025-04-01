let bill = 0
let tipPercenta = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber

    console.log(bill)
}

function receiveNumberofPeopleValue(){
    numberOfPeople = document.querySelector("#people").valueAsNumber

    console.log(numberOfPeople)
}

function receiveTipPercentageValue(value){
    tipPercenta = value / 100

    if (buttonSelected != null){
        buttonSelected.classList.remove("button-selected")
    }

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
}
