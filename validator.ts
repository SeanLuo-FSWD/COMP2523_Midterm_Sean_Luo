export class Validator {
  private hasNumber(str: string) {
    return str.split("").some((ch: string) => parseInt(ch));

    // parseInt(ch) returns true if a char can be changed into a number.
  }

  private hasSymbol(str: string) {
    const characters = ["!", "@", "#", "?"];

    for (const char of characters) {
      if (str.includes(char)) {
        return true;
      }
    }

    return false;
  }

  validate(password: string): boolean {
    if (password.length >= 8) {
      if (this.hasNumber(password)) {
        if (this.hasSymbol(password)) {
          return true;
        }
      }
    }

    return false;
  }
}
