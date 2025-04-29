import { Request, Response } from "express";
import * as authService from '../services/authService';

export const getNonce = async (req: Request, res: Response) => {
  const nonce = authService.createSimpleNonce();
  res.send({ nonce });
};

export const authenticate = async (req: Request, res: Response) => {
  res.send({ ok: 2 });
};