// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euros){
    let dollar = euros * oneEuroIs.USD

    return dollar
}

function fromDollarToYen(dollars){
    let yen = dollars * (1/oneEuroIs.USD) * (oneEuroIs.JPY)
    return yen
}

function fromYenToPound(yen){
    let pound = yen * (1/oneEuroIs.JPY) * (oneEuroIs.GBP)
    return pound
}


module.exports = { fromEuroToDollar, oneEuroIs, fromDollarToYen, fromYenToPound}