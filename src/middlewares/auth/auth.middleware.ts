import { sign, verify } from 'jsonwebtoken';
import { jwtConfig, SECRETE } from './helper';
import JwtInterface from '../../interfaces/jwt.interface';

const AuthService = {
  genToken: (data: object): string => sign({ data }, SECRETE, jwtConfig),
  getToken: (token: string) => {
    const { data: { id } } = verify(token, SECRETE) as JwtInterface;
    return id;
  },
};

export default AuthService;
