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

        document.querySelector("#custom-tip").value = ""

    if (buttonSelected != null){
        buttonSelected.classList.remove("button-selected")
    }

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
}

function receiveCustomTipPercentageValue(){
    tipPercenta = document.querySelector("#custom-tip").valueAsNumber / 100

    removeClassButtonSelected()

}

function removeClassButtonSelected(){
    if (buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}