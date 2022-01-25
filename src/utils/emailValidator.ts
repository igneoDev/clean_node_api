import { EmailValidator } from '../presentation/contracts/emailValidator'

export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    return email.includes('@')
  }
}
