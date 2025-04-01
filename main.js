let bill = 0
let tipPercenta = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber

    calculeteResults()
}

function receiveNumberofPeopleValue(){
    numberOfPeople = document.querySelector("#people").valueAsNumber

    calculeteResults()
}

function receiveTipPercentageValue(value){
    tipPercenta = value / 100

        document.querySelector("#custom-tip").value = ""

    if (buttonSelected != null){
        buttonSelected.classList.remove("button-selected")
    }

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
    calculeteResults()
}

function receiveCustomTipPercentageValue(){
    tipPercenta = document.querySelector("#custom-tip").valueAsNumber / 100

    removeClassButtonSelected()
    calculeteResults()
}

function removeClassButtonSelected(){
    if (buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}

function calculeteResults(){
    if(bill !== 0 && tipPercenta !== 0 && numberOfPeople !== 0){
    let strongAmount = document.querySelector(".amount strong")
    let tipAmountPerson = bill * tipPercenta / numberOfPeople
    strongAmount.innerText = `$${tipAmountPerson.toFixed(2)}`

    let strongTotal = document.querySelector(".total strong")
    let totalPerson = (bill / numberOfPeople) + tipAmountPerson
    strongTotal.innerText = `$${totalPerson.toFixed(2)}`
    }
}

function reset(){
    document.querySelector("#bill").value = ""
    let bill = 0
    document.querySelector("#people").value = ""

    document.querySelector("#custom-tip").value = ""
    removeClassButtonSelected()
    let tipPercenta = 0

    document.querySelector(".amount strong").innerText = "$0.00"
    document.querySelector(".total strong").innerText = "$0.00"


}