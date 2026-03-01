import { useState } from 'react';

interface AdminLoginProps {
    onSuccess: () => void;
}

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD as string;
const SESSION_KEY = 'geo_tips_admin_auth';

/** Returns true if already authenticated this session */
export function isAdminAuthenticated(): boolean {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
}

export function AdminLogin({ onSuccess }: AdminLoginProps) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [shaking, setShaking] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            sessionStorage.setItem(SESSION_KEY, 'true');
            onSuccess();
        } else {
            setError('Incorrect password.');
            setShaking(true);
            setPassword('');
            setTimeout(() => setShaking(false), 500);
        }
    };

    return (
        <div className="admin-login-wrapper">
            <div className={`admin-login-card${shaking ? ' admin-login-shake' : ''}`}>
                {/* Lock icon */}
                <div className="admin-login-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                </div>

                <h2 className="admin-login-title">Admin Access</h2>
                <p className="admin-login-subtitle">Enter the password to access the Contribute panel.</p>

                <form onSubmit={handleSubmit} className="admin-login-form">
                    <div className="form-group">
                        <label htmlFor="admin-password">Password</label>
                        <input
                            id="admin-password"
                            type="password"
                            className="form-input"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setError(''); }}
                            placeholder="Enter admin password"
                            autoFocus
                            autoComplete="current-password"
                        />
                        {error && <span className="admin-login-error">{error}</span>}
                    </div>
                    <button type="submit" className="submit-button" style={{ width: '100%' }}>
                        Unlock
                    </button>
                </form>
            </div>
        </div>
    );
}
