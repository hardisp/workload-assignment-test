export function validateWorkloadInput(value: string): string | null {
  if (value.trim() === "") {
    return null;
  }

  const number = Number(value);

  if(value === ""){
    return null
  }

  if (Number.isNaN(number)) {
    return "Please enter a valid number.";
  }

  if (number < 0 || number > 5) {
    return "Staffing must be between 0 and 5.";
  }

  return null;
}
