const unitData = {
    length: {
        units: {
            m: { name: 'Meters', factor: 1 },
            km: { name: 'Kilometers', factor: 1000 },
            cm: { name: 'Centimeters', factor: 0.01 },
            mm: { name: 'Millimeters', factor: 0.001 },
            mi: { name: 'Miles', factor: 1609.344 },
            yd: { name: 'Yards', factor: 0.9144 },
            ft: { name: 'Feet', factor: 0.3048 },
            in: { name: 'Inches', factor: 0.0254 },
            nmi: { name: 'Nautical Miles', factor: 1852 }
        },
        default: ['m', 'ft']
    },
    area: {
        units: {
            m2: { name: 'Square Meters', factor: 1 },
            km2: { name: 'Square Kilometers', factor: 1e6 },
            mi2: { name: 'Square Miles', factor: 2.58999e6 },
            yd2: { name: 'Square Yards', factor: 0.836127 },
            ft2: { name: 'Square Feet', factor: 0.092903 },
            in2: { name: 'Square Inches', factor: 0.00064516 },
            ha: { name: 'Hectares', factor: 10000 },
            ac: { name: 'Acres', factor: 4046.86 }
        },
        default: ['m2', 'ft2']
    },
    weight: {
        units: {
            kg: { name: 'Kilograms', factor: 1 },
            g: { name: 'Grams', factor: 0.001 },
            mg: { name: 'Milligrams', factor: 1e-6 },
            lb: { name: 'Pounds', factor: 0.453592 },
            oz: { name: 'Ounces', factor: 0.0283495 },
            st: { name: 'Stone', factor: 6.35029 },
            ton: { name: 'Metric Tons', factor: 1000 },
            ton_us: { name: 'US Tons', factor: 907.185 },
            ton_imp: { name: 'Imperial Tons', factor: 1016.05 }
        },
        default: ['kg', 'lb']
    },
    volume: {
        units: {
            l: { name: 'Liters', factor: 1 },
            ml: { name: 'Milliliters', factor: 0.001 },
            m3: { name: 'Cubic Meters', factor: 1000 },
            cm3: { name: 'Cubic Centimeters', factor: 0.001 },
            gal: { name: 'Gallons (US)', factor: 3.78541 },
            qt: { name: 'Quarts (US)', factor: 0.946353 },
            pt: { name: 'Pints (US)', factor: 0.473176 },
            cup: { name: 'Cups (US)', factor: 0.236588 },
            floz: { name: 'Fluid Ounces (US)', factor: 0.0295735 },
            tbsp: { name: 'Tablespoons (US)', factor: 0.0147868 },
            tsp: { name: 'Teaspoons (US)', factor: 0.00492892 }
        },
        default: ['l', 'gal']
    },
    temperature: {
        units: {
            c: { name: 'Celsius' },
            f: { name: 'Fahrenheit' },
            k: { name: 'Kelvin' }
        },
        special: 'temperature',
        default: ['c', 'f']
    },
    speed: {
        units: {
            mps: { name: 'Meters per Second', factor: 1 },
            kph: { name: 'Kilometers per Hour', factor: 0.277778 },
            mph: { name: 'Miles per Hour', factor: 0.44704 },
            fps: { name: 'Feet per Second', factor: 0.3048 },
            kn: { name: 'Knots', factor: 0.514444 }
        },
        default: ['kph', 'mph']
    },
    time: {
        units: {
            s: { name: 'Seconds', factor: 1 },
            ms: { name: 'Milliseconds', factor: 0.001 },
            us: { name: 'Microseconds', factor: 1e-6 },
            ns: { name: 'Nanoseconds', factor: 1e-9 },
            min: { name: 'Minutes', factor: 60 },
            h: { name: 'Hours', factor: 3600 },
            d: { name: 'Days', factor: 86400 },
            wk: { name: 'Weeks', factor: 604800 },
            mo: { name: 'Months (Avg)', factor: 2.628e6 },
            y: { name: 'Years', factor: 3.154e7 }
        },
        default: ['min', 's']
    },
    digital: {
        units: {
            b: { name: 'Bits', factor: 1 },
            B: { name: 'Bytes', factor: 8 },
            kb: { name: 'Kilobits', factor: 1000 },
            kB: { name: 'Kilobytes', factor: 8000 },
            Mb: { name: 'Megabits', factor: 1e6 },
            MB: { name: 'Megabytes', factor: 8e6 },
            Gb: { name: 'Gigabits', factor: 1e9 },
            GB: { name: 'Gigabytes', factor: 8e9 },
            Tb: { name: 'Terabits', factor: 1e12 },
            TB: { name: 'Terabytes', factor: 8e12 }
        },
        default: ['MB', 'GB']
    },
    energy: {
        units: {
            j: { name: 'Joules', factor: 1 },
            kj: { name: 'Kilojoules', factor: 1000 },
            cal: { name: 'Calories', factor: 4.184 },
            kcal: { name: 'Kilocalories', factor: 4184 },
            wh: { name: 'Watt-hours', factor: 3600 },
            kwh: { name: 'Kilowatt-hours', factor: 3.6e6 },
            btu: { name: 'BTU', factor: 1055.06 },
            ftlb: { name: 'Foot-pounds', factor: 1.35582 }
        },
        default: ['j', 'kcal']
    },
    pressure: {
        units: {
            pa: { name: 'Pascals', factor: 1 },
            bar: { name: 'Bars', factor: 100000 },
            psi: { name: 'PSI', factor: 6894.76 },
            atm: { name: 'Atmospheres', factor: 101325 },
            torr: { name: 'Torr', factor: 133.322 }
        },
        default: ['bar', 'psi']
    },
    fuel: {
        units: {
            kmpl: { name: 'Kilometers per Liter', factor: 1 },
            mpg: { name: 'Miles per Gallon', factor: 0.425144 },
            mpg_imp: { name: 'Miles per Gallon (Imp)', factor: 0.354006 },
            l100km: { name: 'Liters per 100km', factor: 0 } // special handling
        },
        special: 'fuel',
        default: ['kmpl', 'l100km']
    },
    frequency: {
        units: {
            hz: { name: 'Hertz', factor: 1 },
            khz: { name: 'Kilohertz', factor: 1000 },
            mhz: { name: 'Megahertz', factor: 1e6 },
            ghz: { name: 'Gigahertz', factor: 1e9 }
        },
        default: ['hz', 'khz']
    },
    angle: {
        units: {
            deg: { name: 'Degrees', factor: 1 },
            rad: { name: 'Radians', factor: 57.2958 },
            grad: { name: 'Gradians', factor: 0.9 },
            arcmin: { name: 'Minutes of Arc', factor: 0.016667 },
            arcsec: { name: 'Seconds of Arc', factor: 0.000278 }
        },
        default: ['deg', 'rad']
    }
};

let currentCategory = 'length';

const categoryTabs = document.getElementById('categoryTabs');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const amountInput = document.getElementById('amountInput');
const resultValue = document.getElementById('resultValue');
const resultLabel = document.getElementById('resultLabel');
const swapBtn = document.getElementById('swapBtn');

function init() {
    renderTabs();
    updateUnitSelectors();
    convert();
}

function renderTabs() {
    categoryTabs.innerHTML = '';
    const categories = Object.keys(unitData);

    // Group categories or just list them all
    categories.forEach(cat => {
        const tab = document.createElement('div');
        tab.className = `tab ${cat === currentCategory ? 'active' : ''}`;
        tab.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        tab.onclick = () => switchCategory(cat);
        categoryTabs.appendChild(tab);
    });
}

function switchCategory(cat) {
    currentCategory = cat;

    // Update active tab styling
    document.querySelectorAll('.tab').forEach(t => {
        t.classList.toggle('active', t.textContent.toLowerCase() === cat || (cat === 'digital' && t.textContent === 'Digital'));
    });

    updateUnitSelectors();
    convert();

    // Auto-scroll to active tab
    const activeTab = document.querySelector('.tab.active');
    if (activeTab) {
        activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

function updateUnitSelectors() {
    const data = unitData[currentCategory];
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';

    Object.entries(data.units).forEach(([key, unit]) => {
        const opt1 = new Option(unit.name, key);
        const opt2 = new Option(unit.name, key);
        fromUnit.add(opt1);
        toUnit.add(opt2);
    });

    if (data.default) {
        fromUnit.value = data.default[0];
        toUnit.value = data.default[1];
    } else {
        fromUnit.selectedIndex = 0;
        toUnit.selectedIndex = 1;
    }
}

function convert() {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount)) {
        resultValue.textContent = '---';
        return;
    }

    const category = unitData[currentCategory];
    const from = fromUnit.value;
    const to = toUnit.value;
    let result;

    if (category.special === 'temperature') {
        result = convertTemperature(amount, from, to);
    } else if (category.special === 'fuel') {
        result = convertFuel(amount, from, to);
    } else {
        const fromFactor = category.units[from].factor;
        const toFactor = category.units[to].factor;
        const baseValue = amount * fromFactor;
        result = baseValue / toFactor;
    }

    resultValue.textContent = formatNumber(result);
    resultLabel.textContent = category.units[to].name;
}

function convertTemperature(value, from, to) {
    if (from === to) return value; // No conversion needed
    let celsius;
    // To Celsius
    if (from === 'c') celsius = value;
    else if (from === 'f') celsius = (value - 32) * 5 / 9;
    else if (from === 'k') celsius = value - 273.15;

    // From Celsius
    if (to === 'c') return celsius;
    else if (to === 'f') return (celsius * 9 / 5) + 32;
    else if (to === 'k') return celsius + 273.15;
}

function convertFuel(value, from, to) {
    if (from === to) return value;

    // Base unit is km/L (factor 1)
    // l100km is special: 100 / value

    let kmpl;

    // Convert TO base (km/L)
    if (from === 'l100km') {
        if (value === 0) return 0; // Avoid division by zero
        kmpl = 100 / value;
    } else {
        kmpl = value * unitData.fuel.units[from].factor;
    }

    // Convert FROM base (km/L)
    if (to === 'l100km') {
        if (kmpl === 0) return 0;
        return 100 / kmpl;
    } else {
        return kmpl / unitData.fuel.units[to].factor;
    }
}

function formatNumber(num) {
    if (num === 0) return '0';
    if (!isFinite(num)) return '---';

    const abs = Math.abs(num);

    if (abs < 0.001 || abs > 1000000) {
        return num.toExponential(4);
    }

    // Max 6 decimal places, remove trailing zeros
    return parseFloat(num.toFixed(6)).toString();
}

function swapUnits() {
    const temp = fromUnit.value;
    fromUnit.value = toUnit.value;
    toUnit.value = temp;
    convert();
}

amountInput.addEventListener('input', convert);
fromUnit.addEventListener('change', convert);
toUnit.addEventListener('change', convert);
swapBtn.addEventListener('click', swapUnits);

init();
