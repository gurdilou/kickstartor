import {NextFunction, Request, Response} from 'express'
import {ApiException} from '~~/types/exceptions'

const asError = (err: unknown): err is ApiException => {
  return Object.prototype.hasOwnProperty.call(err, 'error')
    && Object.prototype.hasOwnProperty.call(err, 'status')
}

export const ExceptionsHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err)
  }

  const parsedError = asError(err)
  if (!parsedError) {
    return res
      .status(500)
      .json({error: 'Erreur interne'})
  }
    return res
      .status(err.status)
      .json({error: err.error})
}