import { pool } from '../db.js';

export const getAccounts = async () => {
  const result = await pool.query('SELECT * FROM accounts ORDER BY id');
  return result.rows;
};

export const getAccount = async (id) => {
  const result = await pool.query('SELECT * FROM accounts WHERE id = $1', [id]);
  return result.rows[0];
};

export const createAccount = async ({ name, balance }) => {
  const result = await pool.query(
    'INSERT INTO accounts (name, balance) VALUES ($1, $2) RETURNING *',
    [name, balance]
  );
  return result.rows[0];
};

export const updateAccount = async (id, { name, balance }) => {
  const result = await pool.query(
    'UPDATE accounts SET name = $1, balance = $2 WHERE id = $3 RETURNING *',
    [name, balance, id]
  );
  return result.rows[0];
};

export const patchAccount = async (id, fields) => {
  const updates = Object.keys(fields)
    .map((key, i) => `${key} = $${i + 1}`)
    .join(', ');
  const values = Object.values(fields);
  const result = await pool.query(
    `UPDATE accounts SET ${updates} WHERE id = $${values.length + 1} RETURNING *`,
    [...values, id]
  );
  return result.rows[0];
};

export const deleteAccount = async (id) => {
  const result = await pool.query('DELETE FROM accounts WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

