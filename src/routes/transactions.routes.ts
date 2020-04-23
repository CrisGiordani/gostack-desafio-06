import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

// import TransactionsRepository from '../repositories/TransactionsRepository';
// import CreateTransactionService from '../services/CreateTransactionService';
// import DeleteTransactionService from '../services/DeleteTransactionService';
// import ImportTransactionsService from '../services/ImportTransactionsService';

const transactionsRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionsRouter.get('/', async (request, response) => {
  const transactions = transactionsRepository.all();
  const balance = transactionsRepository.getBalance();

  const completeInfo = {
    transactions,
    balance,
  };
  return response.json(completeInfo);
});

transactionsRouter.post('/', async (request, response) => {
  const { title, value, type } = request.body;
  const createdTransaction = new CreateTransactionService(
    transactionsRepository,
  );
  const transaction = createdTransaction.execute({ title, value, type });
  return response.json(transaction);
});

transactionsRouter.delete('/:id', async (request, response) => {
  // TODO
});

transactionsRouter.post('/import', async (request, response) => {
  // TODO
});

export default transactionsRouter;
