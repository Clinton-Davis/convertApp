export const tempLogic = (from, to, amount) => {
    console.log("OIm inside")
    console.log(from)
    console.log(to)
    console.log(amount)
    if(from === "Fahrenheit" && to === "Celsius"){
        console.log("Fc")
        console.log((amount - 32) * 5/9)
        return (amount - 32) * 5/9
    }else if (from === "Celsius" && to === "Fahrenheit"){
        return (amount * 9/5) + 32
    
    }else if (from === "Celsius" && to === "Kelvin"){
        console.log("ck")
        return amount + 273.15
    
    }else if (from === "Kelvin" && to === "Celsius"){
        console.log("kc")
        return amount - 273.15
    
    }else if (from === "Kelvin" && to === "Fahrenheit"){
        return (amount - 276.15) * 9/5 + 32

    }else if (from === "Fahrenheit" && to === "Kelvin"){
        return (amount - 32) * 5/9 + 273.15
    }
}

