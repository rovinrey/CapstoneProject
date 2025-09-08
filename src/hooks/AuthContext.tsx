import { createContext, useContext, useState, type ReactNode } from 'react';

type UserRole = 'admin' | 'beneficiary' | null;

interface AuthContextType {
    user: { role: UserRole; email: string } | null;
    login: (email: string, password: string, role: UserRole) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<{ role: UserRole; email: string } | null>(null);

    const login = async (email: string, password: string, role: UserRole) => {
        // Replace this with real authentication logic (API call)
        if (role === 'admin' && email === 'admin@example.com' && password === 'adminpass') {
            setUser({ role: 'admin', email });
            return true;
        }
        if (role === 'beneficiary' && email.endsWith('@beneficiary.com') && password === 'beneficiarypass') {
            setUser({ role: 'beneficiary', email });
            return true;
        }
        return false;
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};