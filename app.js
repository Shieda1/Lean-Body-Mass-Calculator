// https://www.omnicalculator.com/health/lean-body-mass

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const leanBodyMassRadio = document.getElementById('leanBodyMassRadio');
const weightRadio = document.getElementById('weightRadio');
const heightRadio = document.getElementById('heightRadio');

let leanBodyMass;
let weight = v1;
let height = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

leanBodyMassRadio.addEventListener('click', function() {
  variable1.textContent = 'Weight';
  variable2.textContent = 'Height';
  weight = v1;
  height = v2;
  result.textContent = '';
});

weightRadio.addEventListener('click', function() {
  variable1.textContent = 'Lean Body Mass';
  variable2.textContent = 'Height';
  leanBodyMass = v1;
  height = v2;
  result.textContent = '';
});

heightRadio.addEventListener('click', function() {
  variable1.textContent = 'Lean Body Mass';
  variable2.textContent = 'Weight';
  leanBodyMass = v1;
  weight = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(leanBodyMassRadio.checked)
    result.textContent = `Lean Body Mass = ${computeleanBodyMass().toFixed(2)}`;

  else if(weightRadio.checked)
    result.textContent = `Weight = ${computeweight().toFixed(2)}`;

  else if(heightRadio.checked)
    result.textContent = `Height = ${computeheight().toFixed(2)}`;
})

// calculation

// LBM (men) = 0.407 * weight [kg] + 0.267 * height [cm] - 19.2

// LBM (women) = 0.252 * weight [kg] + 0.473 * height [cm] - 48.3

function computeleanBodyMass() {
  return 0.407 * Number(weight.value) + 0.267 * Number(height.value) - 19.2;
}

function computeweight() {
  return (Number(leanBodyMass.value) - 0.267 * Number(height.value) + 19.2) / 0.407;
}

function computeheight() {
  return (Number(leanBodyMass.value) - 0.407 * Number(weight.value) + 19.2) / 0.267;
}