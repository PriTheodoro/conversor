const numArabic = [1000000, 900000, 500000, 400000, 100000, 90000, 50000, 40000, 10000, 9000,
  5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const numRoman = ['-M', '-CM', '-D', '-CD', '-C', '-XC', '-L', '-XL', '-X', '-IX', '-V', '-IV',
  'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

function isNumberRoman(algRom){ 
  if (!algRom){
    throw new Error('Não é um número romano!');
  } else if (typeof algRom !== 'string'){
    throw new Error('Não é um número romano!');
  }
}

function isNumberArabic(algArab){ 
  if (!algArab){
    throw new Error('Não é um número arábico!');
  } else if (typeof algArab !== 'number'){
    throw new Error('Não é um número arábico!');
  }
}

function romanToInt(algRom){
  isNumberRoman(algRom);
  algRom = algRom.toUpperCase();
  let result = 0;
  for (let num in numRoman){
    while (algRom.indexOf(numRoman[num]) === 0){
      result += numArabic[num];
      algRom = algRom.replace(numRoman[num], '');
    }
  }
  return result;
}

function intToRoman(algArab){
  isNumberArabic(algArab);
  let result = '';  
  for (let num in numArabic){
    while (algArab % numArabic[num] < algArab){
      result += numRoman[num];
      algArab -= numArabic[num];
    }
  }
  return result;
}
module.exports.romanToInt = romanToInt;
module.exports.intToRoman = intToRoman;

