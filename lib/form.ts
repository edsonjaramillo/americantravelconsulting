/**
 * Brief description of the function here.
 * @summary formats phone number to (###) ###-####
 * @param {String} phoneNumber - 10 digit phone number string
 * @return {String} returns formatted phone number (###) ###-####
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
  const areaCode = phoneNumber.slice(0, 3);
  const prefix = phoneNumber.slice(3, 6);
  const lineNumber = phoneNumber.slice(6, 10);
  return `(${areaCode}) ${prefix}-${lineNumber}`;
};
