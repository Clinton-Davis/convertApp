//https://www.bing.com/search?q=convert+tonnes+to+pounds&qs=MT&pq=convert+tonne&sk=MT1&sc=8-13&cvid=CACDD178D70142DA88F300ADDCFEDB1A&FORM=QBRE&sp=2

export const tempLogic = (amount, from, to) => {
    if (from === "Fahrenheit" && to === "Celsius") {
        let c = ((amount - 32) * 5) / 9;
        return `${Math.round(c * 100) / 100} °C`;
    } else if (from === "Celsius" && to === "Fahrenheit") {
        let c = (amount * 9) / 5 + 32;
        return `${Math.round(c * 100) / 100}.to °F`;
    } else if (from === "Celsius" && to === "Kelvin") {
        let c = amount + 273.15;
        return `${Math.round(c * 100) / 100} K`;
    } else if (from === "Kelvin" && to === "Celsius") {
        let c = amount - 273.15;
        return `${Math.round(c * 100) / 100} °C`;
    } else if (from === "Kelvin" && to === "Fahrenheit") {
        let c = ((amount - 276.15) * 9) / 5 + 32;
        return `${Math.round(c * 100) / 100} °F`;
    } else if (from === "Fahrenheit" && to === "Kelvin") {
        let c = ((amount - 32) * 5) / 9 + 273.15;
        return `${Math.round(c * 100) / 100} K`;
    }
};
export const weightLogic = (amount, from, to) => {
    if (from === "Metric Ton" && to === "Kilogram") {
        let c = amount * 1000;
        return `${Math.round(c * 100) / 100} Kg`;
    } else if (from === "Metric Ton" && to === "Gram") {
        let c = amount * 1000000;
        return `${Math.round(c * 100) / 100} g`;
    } else if (from === "Metric Ton" && to === "Milligram") {
        let c = amount * 1000000000;
        return `${Math.round(c * 100) / 100} mg`;
    } else if (from === "Metric Ton" && to === "Imperial Ton") {
        let c = amount / 1.01604691;
        return `${Math.round(c * 100) / 100} T`;
    } else if (from === "Metric Ton" && to === "Stone") {
        let c = amount * 157.473045;
        return `${Math.round(c * 100) / 100} st`;
    } else if (from === "Metric Ton" && to === "Pound") {
        let c = amount * 2204.62262;
        return `${Math.round(c * 100) / 100} lb`;
    } else if (from === "Metric Ton" && to === "Ounce") {
        let c = amount * 35273.962;
        return `${Math.round(c * 100) / 100} oz`;
    } else if (from === "Kilogram" && to === "Metric Ton") {
        let c = amount / 1000;
        return `${Math.round(c * 100) / 100} t`;
    } else if (from === "Kilogram" && to === "Gram") {
        let c = amount * 1000;
        return `${Math.round(c * 100) / 100} g`;
    } else if (from === "Kilogram" && to === "Milligram") {
        let c = amount * 1000000;
        return `${Math.round(c * 100) / 100} mg`;
    } else if (from === "Kilogram" && to === "Imperial Ton") {
        let c = amount / 1016.04691;
        return `${Math.round(c * 100) / 100} T`;
    } else if (from === "Kilogram" && to === "Stone") {
        let c = amount / 6.35029317;
        return `${Math.round(c * 100) / 100} st`;
    } else if (from === "Kilogram" && to === "Pound") {
        let c = amount * 2.20462262;
        return `${Math.round(c * 100) / 100}K`;
    } else if (from === "Kilogram" && to === "Ounce") {
        let c = amount * 35.273962;
        return `${Math.round(c * 100) / 100} oz`;
    } else if (from === "Gram" && to === "Metric Ton") {
        let c = amount * 1000;
        return `${Math.round(c * 100) / 100} g`;
    } else if (from === "Gram" && to === "Kilogram") {
        let c = amount * 1000000;
        return `${Math.round(c * 100) / 100} mg`;
    } else if (from === "Gram" && to === "Milligram") {
        let c = amount * 1000;
        return `${Math.round(c * 100) / 100} mg`;
    } else if (from === "Gram" && to === "Imperial Ton") {
        let c = amount / 9.8421e-7;
        return `${Math.round(c * 100) / 100} T`;
    } else if (from === "Gram" && to === "Stone") {
        let c = amount / 6350.29317;
        return `${Math.round(c * 100) / 100}K`;
    } else if (from === "Gram" && to === "Pound") {
        let c = amount / 453.59237;
        return `${Math.round(c * 100) / 100} lb`;
    } else if (from === "Gram" && to === "Ounce") {
        let c = amount / 28.3495231;
        return `${Math.round(c * 100) / 100} oz`;
    } else if (from === "Milligram" && to === "Metric Ton") {
        let c = amount / 1.0e9;
        return `${Math.round(c * 100) / 100} mg`;
    } else if (from === "Milligram" && to === "Kilogram") {
        let c = amount / 1000000;
        return `${Math.round(c * 100) / 100} kg`;
    } else if (from === "Milligram" && to === "Gram") {
        let c = amount / 1000;
        return `${Math.round(c * 100) / 100} g`;
    } else if (from === "Milligram" && to === "Imperial Ton") {
        let c = amount / 1.016e9;
        return `${Math.round(c * 100) / 100} T`;
    } else if (from === "Milligram" && to === "Stone") {
        let c = amount / 6.3503e6;
        return `${Math.round(c * 100) / 100}K`;
    } else if (from === "Milligram" && to === "Pound") {
        let c = amount / 453592.37;
        return `${Math.round(c * 100) / 100} lb`;
    } else if (from === "Milligram" && to === "Ounce") {
        let c = amount / 28349.5231;
        return `${Math.round(c * 100) / 100} oz`;
    } else if (from === "Imperial Ton" && to === "Metric Ton") {
        let c = amount * 1.01604691;
        return `${Math.round(c * 100) / 100} t`;
    } else if (from === "Imperial Ton" && to === "Kilogram") {
        let c = amount * 1016.04691;
        return `${Math.round(c * 100) / 100} kg`;
    } else if (from === "Imperial Ton" && to === "Gram") {
        let c = amount * 1.016e6;
        return `${Math.round(c * 100) / 100} g`;
    } else if (from === "Imperial Ton" && to === "Milligram") {
        let c = amount * 1.016e9;
        return `${Math.round(c * 100) / 100} mg`;
    } else if (from === "Imperial Ton" && to === "Stone") {
        let c = amount / 160;
        return `${Math.round(c * 100) / 100} st`;
    } else if (from === "Imperial Ton" && to === "Pound") {
        let c = amount * 2240;
        return `${Math.round(c * 100) / 100} lb`;
    } else if (from === "Imperial Ton" && to === "Ounce") {
        let c = amount * 35840;
        return `${Math.round(c * 100) / 100} oz`;
    } else if (from === "Stone" && to === "Metric Ton") {
        let c = amount / 157.473045;
        return `${Math.round(c * 100) / 100} t`;
    } else if (from === "Stone" && to === "Kilogram") {
        let c = amount * 6.35029317;
        return `${Math.round(c * 100) / 100} mg`;
    } else if (from === "Stone" && to === "Gram") {
        let c = amount * 6350.29317;
        return `${Math.round(c * 100) / 100} g`;
    } else if (from === "Stone" && to === "Milligram") {
        let c = amount * 6.3503e6;
        return `${Math.round(c * 100) / 100} T`;
    } else if (from === "Stone" && to === "Imperial Ton") {
        let c = amount / 160;
        return `${Math.round(c * 100) / 100}K`;
    } else if (from === "Stone" && to === "Pound") {
        let c = amount * 14;
        return `${Math.round(c * 100) / 100} lb`;
    } else if (from === "Stone" && to === "Ounce") {
        let c = amount * 224;
        return `${Math.round(c * 100) / 100} oz`;
    } else if (from === "Pound" && to === "Metric Ton") {
        let c = amount / 2204.62262;
        return `${Math.round(c * 100) / 100} t`;
    } else if (from === "Pound" && to === "Kilogram") {
        let c = amount / 2.20462262;
        return `${Math.round(c * 100) / 100} kg`;
    } else if (from === "Pound" && to === "Gram") {
        let c = amount * 453.59237;
        return `${Math.round(c * 100) / 100} g`;
    } else if (from === "Pound" && to === "Milligram") {
        let c = amount * 453592.37;
        return `${Math.round(c * 100) / 100} mg`;
    } else if (from === "Pound" && to === "Imperial Ton") {
        let c = amount / 2240;
        return `${Math.round(c * 100) / 100} T`;
    } else if (from === "Pound" && to === "Stone") {
        let c = amount / 14;
        return `${Math.round(c * 100) / 100} st`;
    } else if (from === "Pound" && to === "Ounce") {
        let c = amount / 16;
        return `${Math.round(c * 100) / 100} oz`;
    } else if (from === "Ounce" && to === "Metric Ton") {
        let c = amount / 35273.962;
        return `${Math.round(c * 100) / 100} t`;
    } else if (from === "Ounce" && to === "Kilogram") {
        let c = amount / 35.273962;
        return `${Math.round(c * 100) / 100} kg`;
    } else if (from === "Ounce" && to === "Gram") {
        let c = amount * 28.3495231;
        return `${Math.round(c * 100) / 100} g`;
    } else if (from === "Ounce" && to === "Milligram") {
        let c = amount * 28349.5231;
        return `${Math.round(c * 100) / 100} mg`;
    } else if (from === "Ounce" && to === "Imperial Ton") {
        let c = amount / 35840;
        return `${Math.round(c * 100) / 100} T`;
    } else if (from === "Ounce" && to === "Stone") {
        let c = amount / 224;
        return `${Math.round(c * 100) / 100} st`;
    } else if (from === "Ounce" && to === "Pound") {
        let c = amount / 16;
        return `${Math.round(c * 100) / 100} lb`;
    }
};
export const lenghtLogic = (amount, from, to) => {
    if (from === "Kilometer" && to === "Inch") {
        let c = amount * 39370.0787;
        return `${Math.round(c * 100) / 100} in`;
    } else if (from === "Kilometer" && to === "Meter") {
        let c = amount * 1000;
        return `${Math.round(c * 100) / 100} m`;
    } else if (from === "Kilometer" && to === "Centimeter") {
        let c = amount * 100000;
        return `${Math.round(c * 100) / 100} cm`;
    } else if (from === "Kilometer" && to === "Millimetre") {
        let c = amount * 1000000;
        return `${Math.round(c * 100) / 100} mm`;
    } else if (from === "Kilometer" && to === "Mile") {
        let c = amount / 1.609344;
        return `${Math.round(c * 100) / 100} mi`;
    } else if (from === "Kilometer" && to === "Nautical Mile") {
        let c = amount / 1.852;
        return `${Math.round(c * 100) / 100} nmi`;
    } else if (from === "Kilometer" && to === "Yard") {
        let c = amount * 1093.6133;
        return `${Math.round(c * 100) / 100} yd`;
    } else if (from === "Kilometer" && to === "Foot") {
        let c = amount * 3280.8399;
        return `${Math.round(c * 100) / 100} ft`;
    } else if (from === "Meter" && to === "Kilometer") {
        let c = amount / 1000;
        return `${Math.round(c * 100) / 100} km`;
    } else if (from === "Meter" && to === "Centimeter") {
        let c = amount * 100;
        return `${Math.round(c * 100) / 100} cm`;
    } else if (from === "Meter" && to === "Millimetre") {
        let c = amount * 1000;
        return `${Math.round(c * 100) / 100} mm`;
    } else if (from === "Meter" && to === "Mile") {
        let c = amount / 1609.344;
        return `${Math.round(c * 100) / 100} mi`;
    } else if (from === "Meter" && to === "Nautical Mile") {
        let c = amount / 1852;
        return `${Math.round(c * 100) / 100} nmi`;
    } else if (from === "Meter" && to === "Yard") {
        let c = amount * 1.0936133;
        return `${Math.round(c * 100) / 100} yd`;
    } else if (from === "Meter" && to === "Foot") {
        let c = amount * 3.2808399;
        return `${Math.round(c * 100) / 100} ft`;
    } else if (from === "Meter" && to === "Inch") {
        let c = amount * 39.3700787;
        return `${Math.round(c * 100) / 100} in`;
    } else if (from === "Centimeter" && to === "Kilometer") {
        let c = amount / 100000;
        return `${Math.round(c * 100) / 100} km`;
    } else if (from === "Centimeter" && to === "Meter") {
        let c = amount / 100;
        return `${Math.round(c * 100) / 100} m`;
    } else if (from === "Centimeter" && to === "Millimetre") {
        let c = amount / 10;
        return `${Math.round(c * 100) / 100} mm`;
    } else if (from === "Centimeter" && to === "Mile") {
        let c = amount / 160934.4;
        return `${Math.round(c * 100) / 100} mi`;
    } else if (from === "Centimeter" && to === "Nautical Mile") {
        let c = amount / 185200;
        return `${Math.round(c * 100) / 100} nmi`;
    } else if (from === "Centimeter" && to === "Yard") {
        let c = amount / 91.44;
        return `${Math.round(c * 100) / 100} yd`;
    } else if (from === "Centimeter" && to === "Foot") {
        let c = amount / 30.48;
        return `${Math.round(c * 100) / 100} ft`;
    } else if (from === "Centimeter" && to === "Inch") {
        let c = amount / 2.54;
        return `${Math.round(c * 100) / 100} in`;
    } else if (from === "Millimetre" && to === "Meter") {
        let c = amount / 1000;
        return `${Math.round(c * 100) / 100} m`;
    } else if (from === "Millimetre" && to === "Centimeter") {
        let c = amount / 10;
        return `${Math.round(c * 100) / 100} cm`;
    } else if (from === "Millimetre" && to === "Kilometer") {
        let c = amount / 1000000;
        return `${Math.round(c * 100) / 100} km`;
    } else if (from === "Millimetre" && to === "Mile") {
        let c = amount / 1.6093e6;
        return `${Math.round(c * 100) / 100} mi`;
    } else if (from === "Millimetre" && to === "Nautical Mile") {
        let c = amount / 1852000;
        return `${Math.round(c * 100) / 100} nmi`;
    } else if (from === "Millimetre" && to === "Yard") {
        let c = amount / 914.4;
        return `${Math.round(c * 100) / 100} yd`;
    } else if (from === "Millimetre" && to === "Foot") {
        let c = amount / 304.8;
        return `${Math.round(c * 100) / 100} ft`;
    } else if (from === "Millimetre" && to === "Inch") {
        let c = amount / 25.4;
        return `${Math.round(c * 100) / 100} in`;
    } else if (from === "Mile" && to === "Meter") {
        let c = amount * 1609.344;
        return `${Math.round(c * 100) / 100} m`;
    } else if (from === "Mile" && to === "Centimeter") {
        let c = amount * 160934.4;
        return `${Math.round(c * 100) / 100} cm`;
    } else if (from === "Mile" && to === "Millimetre") {
        let c = amount * 1.6093e6;
        return `${Math.round(c * 100) / 100} mm`;
    } else if (from === "Mile" && to === "Kilometer") {
        let c = amount * 1.609344;
        return `${Math.round(c * 100) / 100} km`;
    } else if (from === "Mile" && to === "Nautical Mile") {
        let c = amount / 1.15077945;
        return `${Math.round(c * 100) / 100} nmi`;
    } else if (from === "Mile" && to === "Yard") {
        let c = amount * 1760;
        return `${Math.round(c * 100) / 100} yd`;
    } else if (from === "Mile" && to === "Foot") {
        let c = amount * 5280;
        return `${Math.round(c * 100) / 100} ft`;
    } else if (from === "Mile" && to === "Inch") {
        let c = amount * 63360;
        return `${Math.round(c * 100) / 100} in`;
    } else if (from === "Nautical Mile" && to === "Meter") {
        let c = amount * 1852;
        return `${Math.round(c * 100) / 100} m`;
    } else if (from === "Nautical Mile" && to === "Centimeter") {
        let c = amount * 185200;
        return `${Math.round(c * 100) / 100} cm`;
    } else if (from === "Nautical Mile" && to === "Millimetre") {
        let c = amount * 1852000;
        return `${Math.round(c * 100) / 100} mm`;
    } else if (from === "Nautical Mile" && to === "Mile") {
        let c = amount * 1.15077945;
        return `${Math.round(c * 100) / 100} mi`;
    } else if (from === "Nautical Mile" && to === "Kilometer") {
        let c = amount * 1.852;
        return `${Math.round(c * 100) / 100} km`;
    } else if (from === "Nautical Mile" && to === "Yard") {
        let c = amount * 2025.37183;
        return `${Math.round(c * 100) / 100} yd`;
    } else if (from === "Nautical Mile" && to === "Foot") {
        let c = amount * 6076.11549;
        return `${Math.round(c * 100) / 100} ft`;
    } else if (from === "Nautical Mile" && to === "Inch") {
        let c = amount * 72913.3858;
        return `${Math.round(c * 100) / 100} in`;
    } else if (from === "Yard" && to === "Meter") {
        let c = mount / 1.0936133;
        return `${Math.round(c * 100) / 100} m`;
    } else if (from === "Yard" && to === "Centimeter") {
        let c = amount * 91.44;
        return `${Math.round(c * 100) / 100} cm`;
    } else if (from === "Yard" && to === "Millimetre") {
        let c = amount * 914.4;
        return `${Math.round(c * 100) / 100} mm`;
    } else if (from === "Yard" && to === "Mile") {
        let c = amount / 1760;
        return `${Math.round(c * 100) / 100} mi`;
    } else if (from === "Yard" && to === "Nautical Mile") {
        let c = amount / 2025.37183;
        return `${Math.round(c * 100) / 100} nmi`;
    } else if (from === "Yard" && to === "Kilometer") {
        let c = amount / 1093.6133;
        return `${Math.round(c * 100) / 100} km`;
    } else if (from === "Yard" && to === "Foot") {
        let c = amount * 3;
        return `${Math.round(c * 100) / 100} ft`;
    } else if (from === "Yard" && to === "Inch") {
        let c = amount * 36;
        return `${Math.round(c * 100) / 100} in`;
    } else if (from === "Foot" && to === "Meter") {
        let c = amount / 3.2808399;
        return `${Math.round(c * 100) / 100} m`;
    } else if (from === "Foot" && to === "Centimeter") {
        let c = amount * 30.48;
        return `${Math.round(c * 100) / 100} cm`;
    } else if (from === "Foot" && to === "Millimetre") {
        let c = amount * 304.8;
        return `${Math.round(c * 100) / 100} mm`;
    } else if (from === "Foot" && to === "Mile") {
        let c = amount / 5280;
        return `${Math.round(c * 100) / 100} mi`;
    } else if (from === "Foot" && to === "Nautical Mile") {
        let c = amount / 6076.11549;
        return `${Math.round(c * 100) / 100} nmi`;
    } else if (from === "Foot" && to === "Yard") {
        let c = amount / 3;
        return `${Math.round(c * 100) / 100} yd`;
    } else if (from === "Foot" && to === "Kilometer") {
        let c = amount / 3280.8399;
        return `${Math.round(c * 100) / 100} km`;
    } else if (from === "Foot" && to === "Inch") {
        let c = amount * 12;
        return `${Math.round(c * 100) / 100} in`;
    } else if (from === "Inch" && to === "Meter") {
        let c = amount / 39.3700787;
        return `${Math.round(c * 100) / 100} m`;
    } else if (from === "Inch" && to === "Centimeter") {
        let c = amount * 2.54;
        return `${Math.round(c * 100) / 100} cm`;
    } else if (from === "Inch" && to === "Millimetre") {
        let c = amount * 25.4;
        return `${Math.round(c * 100) / 100} mm`;
    } else if (from === "Inch" && to === "Mile") {
        let c = amount / 63360;
        return `${Math.round(c * 100) / 100} m`;
    } else if (from === "Inch" && to === "Nautical Mile") {
        let c = amount / 72913.3858;
        return `${Math.round(c * 100) / 100} nmi`;
    } else if (from === "Inch" && to === "Yard") {
        let c = amount / 36;
        return `${Math.round(c * 100) / 100} yd`;
    } else if (from === "Inch" && to === "Foot") {
        let c = amount / 12;
        return `${Math.round(c * 100) / 100} ft`;
    } else if (from === "Inch" && to === "Kilometer") {
        let c = amount / 39370.0787;
        return `${Math.round(c * 100) / 100} km`;
    }
};
export const speedLogic = (amount, from, to) => {
    if (from === "Mile/hour" && to === "Kilometer/hour") {
        let c = amount * 1.609344;
        return `${Math.round(c * 100) / 100} kph`;
    } else if (from === "Mile/hour" && to === "Foot/second") {
        let c = amount * 1.46666667;
        return `${Math.round(c * 100) / 100} fps`;
    } else if (from === "Mile/hour" && to === "Meter/second") {
        let c = amount * 2.23693629;
        return `${Math.round(c * 100) / 100} mps`;
    } else if (from === "Mile/hour" && to === "Knot") {
        let c = amount / 1.15077945;
        return `${Math.round(c * 100) / 100} Knot`;
    } else if (from === "Kilometer/hour" && to === "Foot/second") {
        let c = amount / 1.09728;
        return `${Math.round(c * 100) / 100} fps`;
    } else if (from === "Kilometer/hour" && to === "Meter/second") {
        let c = amount / 3.6;
        return `${Math.round(c * 100) / 100} mps`;
    } else if (from === "Kilometer/hour" && to === "Knot") {
        let c = amount / 1.852;
        return `${Math.round(c * 100) / 100} Knot`;
    } else if (from === "Kilometer/hour" && to === "Mile/hour") {
        let c = amount / 1.609344;
        return `${Math.round(c * 100) / 100} mph`;
    } else if (from === "Foot/second" && to === "Kilometer/hour") {
        let c = amount * 1.09728;
        return `${Math.round(c * 100) / 100} kph`;
    } else if (from === "Foot/second" && to === "Meter/second") {
        let c = amount / 3.2808399;
        return `${Math.round(c * 100) / 100} mps`;
    } else if (from === "Foot/second" && to === "Knot") {
        let c = amount / 1.68780986;
        return `${Math.round(c * 100) / 100} knot`;
    } else if (from === "Foot/second" && to === "Mile/hour") {
        let c = amount / 1.46666667;
        return `${Math.round(c * 100) / 100} mph`;
    } else if (from === "Meter/second" && to === "Foot/second") {
        let c = amount * 3.2808399;
        return `${Math.round(c * 100) / 100} fps`;
    } else if (from === "Meter/second" && to === "Kilometer/hour") {
        let c = amount * 3.6;
        return `${Math.round(c * 100) / 100} kmh`;
    } else if (from === "Meter/second" && to === "Knot") {
        let c = amount * 1.94384449;
        return `${Math.round(c * 100) / 100} knot`;
    } else if (from === "Meter/second" && to === "Mile/hour") {
        let c = amount * 2.23693629;
        return `${Math.round(c * 100) / 100} mph`;
    } else if (from === "Knot" && to === "Foot/second") {
        let c = amount * 1.68780986;
        return `${Math.round(c * 100) / 100} fps`;
    } else if (from === "Knot" && to === "Meter/second") {
        let c = amount / 1.94384449;
        return `${Math.round(c * 100) / 100} mps`;
    } else if (from === "Knot" && to === "Kilometer/hour") {
        let c = amount * 1.852;
        return `${Math.round(c * 100) / 100} kph`;
    } else if (from === "Knot" && to === "Mile/hour") {
        let c = amount * 1.15077945;
        return `${Math.round(c * 100) / 100} mph`;
    }
};
export const timeLogic = (amount, from, to) => {
    if (from === "Year" && to === "Week") {
        let c = amount * 52.1428571;
        return `${Math.round(c * 100) / 100} week`;
    } else if (from === "Year" && to === "Day") {
        let c = amount * 365;
        return `${Math.round(c * 100) / 100} d`;
    } else if (from === "Year" && to === "Hour") {
        let c = amount * 8760;
        return `${Math.round(c * 100) / 100} h`;
    } else if (from === "Year" && to === "minute") {
        let c = amount * 525600;
        return `${Math.round(c * 100) / 100} min`;
    } else if (from === "Year" && to === "Second") {
        let c = amount * 31536000;
        return `${Math.round(c * 100) / 100} sec`;
    } else if (from === "Week" && to === "Year") {
        let c = amount / 52.1428571;
        return `${Math.round(c * 100) / 100} y`;
    } else if (from === "Week" && to === "Day") {
        let c = amount * 7;
        return `${Math.round(c * 100) / 100} d`;
    } else if (from === "Week" && to === "Hour") {
        let c = amount * 168;
        return `${Math.round(c * 100) / 100} h`;
    } else if (from === "Week" && to === "Minute") {
        let c = amount * 10080;
        return `${Math.round(c * 100) / 100} min`;
    } else if (from === "Week" && to === "Second") {
        let c = amount * 604800;
        return `${Math.round(c * 100) / 100} sec`;
    } else if (from === "Day" && to === "Year") {
        let c = amount / 365;
        return `${Math.round(c * 100) / 100} y`;
    } else if (from === "Day" && to === "Week") {
        let c = amount / 7;
        return `${Math.round(c * 100) / 100} w`;
    } else if (from === "Day" && to === "Hour") {
        let c = amount * 24;
        return `${Math.round(c * 100) / 100} h`;
    } else if (from === "Day" && to === "Minute") {
        let c = amount * 1440;
        return `${Math.round(c * 100) / 100} `;
    } else if (from === "Day" && to === "Second") {
        let c = amount * 86400;
        return `${Math.round(c * 100) / 100} sec`;
    } else if (from === "Hour" && to === "Year") {
        let c = amount / 8760;
        return `${Math.round(c * 100) / 100} y`;
    } else if (from === "Hour" && to === "Day") {
        let c = amount / 24;
        return `${Math.round(c * 100) / 100} d`;
    } else if (from === "Hour" && to === "Week") {
        let c = amount / 168;
        return `${Math.round(c * 100) / 100} w`;
    } else if (from === "Hour" && to === "Minute") {
        let c = amount / 60;
        return `${Math.round(c * 100) / 100} min`;
    } else if (from === "Hour" && to === "Second") {
        let c = amount * 3600;
        return `${Math.round(c * 100) / 100} sec`;
    } else if (from === "Minute" && to === "Year") {
        let c = amount / 525600;
        return `${Math.round(c * 100) / 100} y`;
    } else if (from === "Minute" && to === "Day") {
        let c = amount / 1440;
        return `${Math.round(c * 100) / 100} d`;
    } else if (from === "Minute" && to === "Hour") {
        let c = amount / 60;
        return `${Math.round(c * 100) / 100} h`;
    } else if (from === "Minute" && to === "Week") {
        let c = amount / 10080;
        return `${Math.round(c * 100) / 100} w`;
    } else if (from === "Minute" && to === "Second") {
        let c = amount * 60;
        return `${Math.round(c * 100) / 100} sec`;
    } else if (from === "Second" && to === "Year") {
        let c = amount / 31536000;
        return `${Math.round(c * 100) / 100} y`;
    } else if (from === "Second" && to === "Day") {
        let c = amount / 86400;
        return `${Math.round(c * 100) / 100} d`;
    } else if (from === "Second" && to === "Hour") {
        let c = amount / 3600;
        return `${Math.round(c * 100) / 100} h`;
    } else if (from === "Second" && to === "Minute") {
        let c = amount / 60;
        return `${Math.round(c * 100) / 100} min`;
    } else if (from === "Second" && to === "Week") {
        let c = amount / 604800;
        return `${Math.round(c * 100) / 100} w`;
    }
};
