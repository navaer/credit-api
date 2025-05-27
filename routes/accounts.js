import express from 'express';
import {
  getAccounts,
  getAccount,
  createAccount,
  updateAccount,
  patchAccount,
  deleteAccount,
} from '../models/accountModel.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: Credit account management
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Account:
 *       type: object
 *       required:
 *         - name
 *         - balance
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         balance:
 *           type: number
 */

/**
 * @swagger
 * /accounts:
 *   get:
 *     summary: Get all accounts
 *     tags: [Accounts]
 *     responses:
 *       200:
 *         description: List of accounts
 */

/**
 * @swagger
 * /accounts/{id}:
 *   get:
 *     summary: Get account by ID
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Account data
 */

/**
 * @swagger
 * /accounts:
 *   post:
 *     summary: Create an account
 *     tags: [Accounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Account'
 *     responses:
 *       201:
 *         description: Created account
 */

/**
 * @swagger
 * /accounts/{id}:
 *   put:
 *     summary: Replace account by ID
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Account'
 *     responses:
 *       200:
 *         description: Updated account
 */

/**
 * @swagger
 * /accounts/{id}:
 *   patch:
 *     summary: Update fields in an account
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Patched account
 */

/**
 * @swagger
 * /accounts/{id}:
 *   delete:
 *     summary: Delete an account
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted account
 */




router.get('/', async (req, res) => res.json(await getAccounts()));
router.get('/:id', async (req, res) => res.json(await getAccount(req.params.id)));
router.post('/', async (req, res) => res.status(201).json(await createAccount(req.body)));
router.put('/:id', async (req, res) => res.json(await updateAccount(req.params.id, req.body)));
router.patch('/:id', async (req, res) => res.json(await patchAccount(req.params.id, req.body)));
router.delete('/:id', async (req, res) => res.json(await deleteAccount(req.params.id)));

export default router;

