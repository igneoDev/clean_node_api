import { AccountModel } from '../../../domain/models/account'
import { AddAccount, AddAccountDTO } from '../../../domain/useCases/addAccount'
import { Encrypter } from '../../contracts/encrypter'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  // private readonly addAccountRepository: AddAccountRepository

  constructor (

    encrypter: Encrypter
    // addAccountRepository: AddAccountRepository
  ) {
    this.encrypter = encrypter
    // this.addAccountRepository = addAccountRepository
  }

  async add (accountData: AddAccountDTO): Promise<AccountModel> {
    await this.encrypter.encrypt(accountData.password)
    return new Promise(resolve => resolve(null))
  }
}

// const { email, name, password } = accountData

//     const encryptedPassword = await this.encrypter.encrypt(password)
//     // const account = await this.addAccountRepository.add({
//     //   email,
//     //   name,
//     //   password: encryptedPassword
//     // })
//     // return account
