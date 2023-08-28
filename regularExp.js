const firstNameRegex = /^[a-zA-Z-' ]{1,30}$/;
const midNameRegex = /^[a-zA-Z-' ]{1,30}$/;
const lastNameRegex = /^[a-zA-Z-' ]{1,30}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex = /^(\d{1,3}\s?)?(\d{10,15})$/;
const zipRegex = /^\d{5}(?:-\d{4})?$/;

const testName = "Hari";
const testMidName = "Bahadur";
const testLastName = "Thapa";
const testEmail = "xyz@example.com";
const testPhone = "977 01234567890";
const testZip = "12345";

console.log(firstNameRegex.test(testName));
console.log(midNameRegex.test(testMidName));
console.log(lastNameRegex.test(testLastName));
console.log(emailRegex.test(testEmail));
console.log(phoneRegex.test(testPhone));
console.log(zipRegex.test(testZip));
