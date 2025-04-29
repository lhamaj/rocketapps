import crypto from 'crypto';

// Generates and returns simple, pseudo-random nonce string
export function createSimpleNonce(): string {
  const buffer: Buffer = crypto.randomBytes(24);
  const nonce: string = buffer.toString('hex');

  return nonce;
}