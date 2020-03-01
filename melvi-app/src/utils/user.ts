/**
 * Returns initial letters from a phrase, e.g.
 * [R]onald S. [C]ruz => RC | [I] like to play [D]otA 2 => ID
 * @param name A full name
 * @param initialsQuantity Return 1 or 2 initials? - Defaults to pair
 */
export function getTextInitials(
  name: string,
  initialsQuantity: 'single' | 'pair' = 'pair',
): string {
  const namesFromName = name.split(' ');

  if (namesFromName.length < 2) {
    initialsQuantity = 'single';
  }

  const firstName = namesFromName[0];
  const lastName = namesFromName.pop();

  const firstNameLetter = firstName.split('')[0].toUpperCase();
  const lastNameLetter = lastName.split('')[0].toUpperCase();

  return initialsQuantity === 'single'
    ? firstNameLetter
    : firstNameLetter + lastNameLetter;
}
