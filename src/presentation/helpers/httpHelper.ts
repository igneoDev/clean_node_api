import { HttpResponse } from '../contracts/http'
import { ServerError } from '../errors/serverError'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
