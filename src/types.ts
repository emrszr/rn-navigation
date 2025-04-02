import { User } from './models/UserModel';

export type RootStackParamList = {
    LoginScreen: undefined;
    SScreen: { user: User };
  };
