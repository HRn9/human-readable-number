module.exports = function toReadable (num) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen']

    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
    'ninety'];

    num = num.toString()
  let i = num
  if (num === '0') {
    return 'zero'
  } 
  if (num < 20) {
    return `${ones[i]}`
  }
  if (num.length === 2) {
    if (num[1] === '0') {
      return tens[i[0]]
    } else {
      return tens[i[0]] + ' ' + ones[i[1]]
    }
  }
  if (num.length === 3) {
    if (num[1] === '0' && num[2] === '0'){
      return ones[i[0]] + ' hundred'
    } 
    else if (num[1] + num[2] < 20) {
      let result = num[1] + num[2]
      result = Math.round(result)
      return ones[i[0]] + ' hundred ' + ones[result]
    }
    else if (num[2] === '0') {
      return ones[i[0]] + ' hundred ' + tens[i[1]]
    }
    else {
      return ones[i[0]] + ' hundred ' + tens[i[1]] + ' ' + ones[i[2]]
    }
  }
}

