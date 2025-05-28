import express from 'express';
import {
  getAccounts,
  getAccount,
} from '../models/accountModel.js';

const router = express.Router();

router.get('/', async (req, res) => res.json(await getAccounts()));
router.get('/:id', async (req, res) => res.json(await getAccount(req.params.id)));
//router.post('/', async (req, res) => res.status(201).json(await createAccount(req.body)));
//router.put('/:id', async (req, res) => res.json(await updateAccount(req.params.id, req.body)));
//router.patch('/:id', async (req, res) => res.json(await patchAccount(req.params.id, req.body)));
//router.delete('/:id', async (req, res) => res.json(await deleteAccount(req.params.id)));

export default router;

