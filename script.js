const parts = ["Engine", "Suspension", "Transmission", "Exhaust"];
parts.map(part => console.log(`Available part: ${part}`));
function showMessage(msg) {
  alert(`Message: ${msg}`);
}
try {
  let tyreCount = 4;
  if (tyreCount !== 4) throw "Tyres must be 4!";
} catch (err) {
  console.error("Error:", err);
}
