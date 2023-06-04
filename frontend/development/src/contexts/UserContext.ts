import { createContext } from 'react';
import Account from '../models/Account';

const UserContext = createContext<{ user: Account, setUser }>(null);
export default UserContext;