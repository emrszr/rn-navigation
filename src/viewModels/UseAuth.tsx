import { useState } from 'react';
import { User } from '../models/UserModel';
import { authService } from '../services/AuthService';

export type LoginProps = {
    email: string;
    password: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async ({email, password}:LoginProps) => {
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const userData = await authService.login(email, password);
      setUser(new User(userData.id, userData.email, userData.token));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { user, login, loading, error };
};
