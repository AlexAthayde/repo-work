import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../context/auth-context'
import { LogOut, User } from 'lucide-react'

export function PrivateRoute() {
    const { user, signOut } = useAuth()

    return user ? (
        <div>
            <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example">
                <div className="container max-auto">
                    <a className="navbar-brand" href="#">LAB365 - DASHBOARD</a>
                    <div>
                        <span className='text-secondary'><User size={24} /> {user.email}</span>
                        <button className='btn btn-dark' onClick={signOut}>
                            <LogOut size={24} />
                        </button>
                    </div>
                </div>
            </nav>

            <aside className='bg-dark'>
                <p className='text-secondary'>usuario</p>
                <p className='text-secondary'>locais</p>
            </aside>

            <main className='container mx-auto'>
                <Outlet />
            </main>
        </div>
    ) : <Navigate to="/" />
}