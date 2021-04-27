let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

function printType(data) {
  console.log(typeof data)
}

printType(patientId)
printType(isEnrolled)
printType(patientInfo)
printType(patientEmail)

patientId = "50";
printType(patientId)