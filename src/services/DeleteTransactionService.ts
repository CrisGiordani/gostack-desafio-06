import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepo = getCustomRepository(TransactionRepository);

    const existTransaction = await transactionsRepo.findOne(id);

    if (!existTransaction) {
      throw new AppError('Transaction does not exist', 401);
    }

    await transactionsRepo.remove(existTransaction);
  }
}

export default DeleteTransactionService;
