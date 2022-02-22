export const tempLogic = (amount, from, to) => {
    if (from === "Fahrenheit" && to === "Celsius") {
        let c = ((amount - 32) * 5) / 9;
        return `${c} °C`;
    } else if (from === "Celsius" && to === "Fahrenheit") {
        let c = (amount * 9) / 5 + 32;
        return `${c} °F`;
    } else if (from === "Celsius" && to === "Kelvin") {
        let c = amount + 273.15;
        return `${c} K`;
    } else if (from === "Kelvin" && to === "Celsius") {
        let c = amount - 273.15;
        return `${c} °C`;
    } else if (from === "Kelvin" && to === "Fahrenheit") {
        let c = ((amount - 276.15) * 9) / 5 + 32;
        return `${c} °F`;
    } else if (from === "Fahrenheit" && to === "Kelvin") {
        let c = ((amount - 32) * 5) / 9 + 273.15;
        return `${c} K`;
    }
};

export const weightLogic = () => {
    if (from === "Metric Ton" && to === "Kilogram") {
        let c = amount * 1000;
        return `${c} Kg`;
    } else if (from === "Metric Ton" && to === "Gram") {
        let c = amount * 1000000;
        return `${c} g`;
    } else if (from === "Metric Ton" && to === "Milligram") {
        let c = amount * 1000000000;
        return `${c} mg`;
    } else if (from === "Metric Ton" && to === "Imperial Ton") {
        let c = amount / 1.01604691;
        return `${c} T`;
    } else if (from === "Metric Ton" && to === "Stone") {
        let c = amount * 157.473045;
        return `${c} st`;
    } else if (from === "Metric Ton" && to === "Pound") {
        let c = amount * 2204.62262;
        return `${c} lb`;
    } else if (from === "Metric Ton" && to === "Ounce") {
        let c = amount * 35273.962;
        return `${c} oz`;
    } else if (from === "Kilogram" && to === "Metric Ton") {
        let c = amount / 1000;
        return `${c} t`;
    } else if (from === "Kilogram" && to === "Gram") {
        let c = amount * 1000;
        return `${c} g`;
    } else if (from === "Kilogram" && to === "Milligram") {
        let c = amount * 1000000;
        return `${c} mg`;
    } else if (from === "Kilogram" && to === "Imperial Ton") {
        let c = amount / 1016.04691;
        return `${c} T`;
    } else if (from === "Kilogram" && to === "Stone") {
        let c = amount / 6.35029317;
        return `${c} st`;
    } else if (from === "Kilogram" && to === "Pound") {
        let c = amount * 2.20462262;
        return `${c}K`;
    } else if (from === "Kilogram" && to === "Ounce") {
        let c = amount * 35.273962;
        return `${c} oz`;
    } else if (from === "Gram" && to === "Metric Ton") {
        let c = amount * 1000;
        return `${c} g`;
    } else if (from === "Gram" && to === "Kilogram") {
        let c = amount * 1000000;
        return `${c} mg`;
    } else if (from === "Gram" && to === "Milligram") {
        let c = amount * 1000;
        return `${c} mg`;
    } else if (from === "Gram" && to === "Imperial Ton") {
        let c = amount / 9.8421e-7;
        return `${c} T`;
    } else if (from === "Gram" && to === "Stone") {
        let c = amount / 6350.29317;
        return `${c}K`;
    } else if (from === "Gram" && to === "Pound") {
        let c = amount / 453.59237;
        return `${c} lb`;
    } else if (from === "Gram" && to === "Ounce") {
        let c = amount / 28.3495231;
        return `${c} oz`;
    } else if (from === "Milligram" && to === "Metric Ton") {
        let c = amount / 1.0e9;
        return `${c} mg`;
    } else if (from === "Milligram" && to === "Kilogram") {
        let c = amount / 1000000;
        return `${c} kg`;
    } else if (from === "Milligram" && to === "Gram") {
        let c = amount / 1000;
        return `${c} g`;
    } else if (from === "Milligram" && to === "Imperial Ton") {
        let c = amount / 1.016e9;
        return `${c} T`;
    } else if (from === "Milligram" && to === "Stone") {
        let c = amount / 6.3503e6;
        return `${c}K`;
    } else if (from === "Milligram" && to === "Pound") {
        let c = amount / 453592.37;
        return `${c} lb`;
    } else if (from === "Milligram" && to === "Ounce") {
        let c = amount / 28349.5231;
        return `${c} oz`;
    } else if (from === "Imperial Ton" && to === "Metric Ton") {
        let c = amount * 1.01604691;
        return `${c} t`;
    } else if (from === "Imperial Ton" && to === "Kilogram") {
        let c = amount * 1016.04691;
        return `${c} kg`;
    } else if (from === "Imperial Ton" && to === "Gram") {
        let c = amount * 1.016e6;
        return `${c} g`;
    } else if (from === "Imperial Ton" && to === "Milligram") {
        let c = amount * 1.016e9;
        return `${c} mg`;
    } else if (from === "Imperial Ton" && to === "Stone") {
        let c = amount / 160;
        return `${c} st`;
    } else if (from === "Imperial Ton" && to === "Pound") {
        let c = amount * 2240;
        return `${c} lb`;
    } else if (from === "Imperial Ton" && to === "Ounce") {
        let c = amount * 35840;
        return `${c} oz`;
    } else if (from === "Stone" && to === "Metric Ton") {
        let c = amount / 157.473045;
        return `${c} t`;
    } else if (from === "Stone" && to === "Kilogram") {
        let c = amount * 6.35029317;
        return `${c} mg`;
    } else if (from === "Stone" && to === "Gram") {
        let c = amount * 6350.29317;
        return `${c} g`;
    } else if (from === "Stone" && to === "Milligram") {
        let c = amount * 6.3503e6;
        return `${c} T`;
    } else if (from === "Stone" && to === "Imperial Ton") {
        let c = amount / 160;
        return `${c}K`;
    } else if (from === "Stone" && to === "Pound") {
        let c = amount * 14;
        return `${c} lb`;
    } else if (from === "Stone" && to === "Ounce") {
        let c = amount * 224;
        return `${c} oz`;
    } else if (from === "Pound" && to === "Metric Ton") {
        let c = amount / 2204.62262;
        return `${c} t`;
    } else if (from === "Pound" && to === "Kilogram") {
        let c = amount / 2.20462262;
        return `${c} kg`;
    } else if (from === "Pound" && to === "Gram") {
        let c = amount * 453.59237;
        return `${c} g`;
    } else if (from === "Pound" && to === "Milligram") {
        let c = amount * 453592.37;
        return `${c} mg`;
    } else if (from === "Pound" && to === "Imperial Ton") {
        let c = amount / 2240;
        return `${c} T`;
    } else if (from === "Pound" && to === "Stone") {
        let c = amount / 14;
        return `${c} st`;
    } else if (from === "Pound" && to === "Ounce") {
        let c = amount / 16;
        return `${c} oz`;
    } else if (from === "Ounce" && to === "Metric Ton") {
        let c = amount / 35273.962;
        return `${c} t`;
    } else if (from === "Ounce" && to === "Kilogram") {
        let c = amount / 35.273962;
        return `${c} kg`;
    } else if (from === "Ounce" && to === "Gram") {
        let c = amount * 28.3495231;
        return `${c} g`;
    } else if (from === "Ounce" && to === "Milligram") {
        let c = amount * 28349.5231;
        return `${c} mg`;
    } else if (from === "Ounce" && to === "Imperial Ton") {
        let c = amount / 35840;
        return `${c} T`;
    } else if (from === "Ounce" && to === "Stone") {
        let c = amount / 224;
        return `${c} st`;
    } else if (from === "Ounce" && to === "Pound") {
        let c = amount / 16;
        return `${c} lb`;
    }
};
//https://www.bing.com/search?q=convert+tonnes+to+pounds&qs=MT&pq=convert+tonne&sk=MT1&sc=8-13&cvid=CACDD178D70142DA88F300ADDCFEDB1A&FORM=QBRE&sp=2
