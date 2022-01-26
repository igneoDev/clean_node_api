import { DbAddAccount } from './dbAddAccount'

describe('DbAddAccount UseCase', () => {
  class Encrypter {
    async encrypt (value: string): Promise<string> {
      return new Promise(resolve => resolve('hashed_password'))
    }
  }

  interface SutTypes {
    sut: DbAddAccount,
    encrypter: Encrypter
  }

  const makeSut = (): SutTypes => {
    const encrypter = new Encrypter()
    const sut = new DbAddAccount(encrypter)
    return {
      sut,
      encrypter
    }
  }

  test('Should call Encryper with correct password', () => {
    const { sut, encrypter } = makeSut()
    const encryptSpy = jest.spyOn(encrypter, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: 'valid_password'
    }
    sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
