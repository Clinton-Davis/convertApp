export const tempLogic = (amount, from, to) => {
    if (from === "Fahrenheit" && to === "Celsius") {
        let c = ((amount - 32) * 5) / 9;
        return `${c.toFixed(2)} °C`;
    } else if (from === "Celsius" && to === "Fahrenheit") {
        let c = (amount * 9) / 5 + 32;
        return `${c.toFixed(2)} °F`;
    } else if (from === "Celsius" && to === "Kelvin") {
        let c = amount + 273.15;
        return `${c.toFixed(2)} K`;
    } else if (from === "Kelvin" && to === "Celsius") {
        let c = amount - 273.15;
        return `${c.toFixed(2)} °C`;
    } else if (from === "Kelvin" && to === "Fahrenheit") {
        let c = ((amount - 276.15) * 9) / 5 + 32;
        return `${c.toFixed(2)} °F`;
    } else if (from === "Fahrenheit" && to === "Kelvin") {
        let c = ((amount - 32) * 5) / 9 + 273.15;
        return `${c.toFixed(2)} K`;
    }
};
["Tonne", "Kilogram", "Gram", "Milligram", "US Ton", "Stone", "Pound", "Ounce"];
export const weightLogic = () => {
    if (from === "Tonne" && to === "Kilogram") {
        let c = amount * 1000;
        return `${Math.round(c)} Kg`;
    } else if (from === "Tonne" && to === "Gram") {
        let c = amount * 1000000;
        return `${Math.round(c)} g`;
    } else if (from === "Tonne" && to === "Milligram") {
        let c = amount * 1000000000;
        return `${Math.round(c)} mg`;
    } else if (from === "Tonne" && to === "US Ton") {
        let c = amount / 1.01604691;
        return `${c.toFixed(2)} US Ton`;
    } else if (from === "Tonne" && to === "Stone") {
        let c = amount * 157.473045;
        return `${c.toFixed(2)} Stone`;
    } else if (from === "Tonne" && to === "Pound") {
        let c = amount * 2204.62262;
        return `${c.toFixed(2)} Pound`;
    } else if (from === "Tonne" && to === "Ounce") {
        let c = amount * 35273.962;
        return `${c.toFixed(2)} oz`;
    } else if (from === "Kilogram" && to === "Tonne") {
        let c = amount / 1000;
        return `${Math.round(c)} Tonne`;
    } else if (from === "Kilogram" && to === "Gram") {
        let c = amount * 1000;
        return `${Math.round(c)} g`;
    } else if (from === "Kilogram" && to === "Milligram") {
        let c = amount * 1000000;
        return `${Math.round(c)} mg`;
    } else if (from === "Kilogram" && to === "US Ton") {
        let c = amount / 1016.04691;
        return `${c.toFixed(2)} US Ton`;
    } else if (from === "Kilogram" && to === "Stone") {
        let c = amount / 6.35029317;
        return `${Math.round(c)} Stone`;
    } else if (from === "Kilogram" && to === "Pound") {
        let c = amount * 2.20462262;
        return `${c.toFixed(2)}K`;
    } else if (from === "Kilogram" && to === "Ounce") {
        let c = amount * 35.273962;
        return `${c.toFixed(2)} oz`;
    } else if (from === "Gram" && to === "Tonne") {
        let c = amount * 1000;
        return `${Math.round(c)} g`;
    } else if (from === "Gram" && to === "Kilogram") {
        let c = amount * 1000000;
        return `${Math.round(c)} mg`;
    } else if (from === "Gram" && to === "Milligram") {
        let c = amount * 1000;
        return `${c.toFixed(2)} mg`;
    } else if (from === "Gram" && to === "US Ton") {
        let c = amount / 9.8421e-7;
        return `${Math.round(c)} US Ton`;
    } else if (from === "Gram" && to === "Stone") {
        let c = amount / 6350.29317;
        return `${c.toFixed(2)}K`;
    } else if (from === "Gram" && to === "Pound") {
        let c = amount / 453.59237;
        return `${c.toFixed(2)} Pound`;
    } else if (from === "Gram" && to === "Ounce") {
        let c = amount / 28.3495231;
        return `${c.toFixed(2)} oz`;
    }
};
//https://www.bing.com/search?q=convert+tonnes+to+pounds&qs=MT&pq=convert+tonne&sk=MT1&sc=8-13&cvid=CACDD178D70142DA88F300ADDCFEDB1A&FORM=QBRE&sp=2
