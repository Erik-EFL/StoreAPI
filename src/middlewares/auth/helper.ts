import { Secret, SignOptions } from 'jsonwebtoken';

export const jwtConfig: SignOptions = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

export const SECRETE: Secret = 'MySecretPassword';
