import { JwtPayload } from 'jsonwebtoken';

export default interface JwtInterface extends JwtPayload {
  data: {
    id: number;
    password: string;
  };
}
