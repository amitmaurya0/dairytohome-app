

export function isValidMobileNumber(number) {
    const regex = /^[0-9]{10}$/;
    return regex.test(number);
}

export function isValidName(name) {
    const regex = /^[A-Za-z][A-Za-z\s]*[A-Za-z]$/;
      return regex.test(name);
  }

export function isValidOTP(otp) {
    const regex = /^[0-9]{4}$/;
    return regex.test(otp);
}

export function getDisplayPrice(price, sellingPrice) {
    const displayPrice = discountAvailable(price, sellingPrice) ? sellingPrice : price
    return displayPrice;
}

export function discountAvailable(price, sellingPrice) {
    return sellingPrice > 0 && sellingPrice < price;
}
  