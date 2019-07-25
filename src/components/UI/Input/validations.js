const persianCharacterValidation = string => {
  var regex = /^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF7\u200C\u200F ]+$/;
  if (string.match(regex)) {
    return true;
  } else {
    return false;
  }
};

const phoneNumberValidation = string => {
  var phoneRegex = /^(\+98|0)?9\d{9}$/g;
  var numberRegex = new RegExp("^[0-9]+$");

  if (!string.match(numberRegex)) {
    // if the entered data wasn't number
    return false;
  } else {
    if (string.length === 11 && !string.match(phoneRegex)) {
      return false;
    } else if (string.length > 11) {
      return false;
    }
    return true;
  }
};


const maxLengthValidation = (string, length) => {
  if (string.length > length) {
    return false;
  } else {
    return true;
  }
}



const nationalCodeValidation = input => {
  if (!/^\d{10}$/.test(input)) return false;

  var check = parseInt(input[9]);
  var sum = 0;
  var i;
  for (i = 0; i < 9; ++i) {
    sum += parseInt(input[i]) * (10 - i);
  }
  sum %= 11;

  return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
};

export {
  persianCharacterValidation,
  phoneNumberValidation,
  nationalCodeValidation,
  maxLengthValidation
};