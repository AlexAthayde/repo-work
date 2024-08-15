import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../context/auth-context'
import { LogOut, User } from 'lucide-react'
import styles from './private-route.module.css'

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

            <div className='d-flex flex-column flex-shrink-0 p-3 text-white bg-dark wd-280' width='280'>
                <ul className='nav nav-pills flex-column mb-auto'>
                    <li className='nav-item'>
                        <a href="#" className="nav-link active" aria-current="page">    
                            HOME
                        </a>
                    </li>
                </ul>


            </div>

            <main className='container mx-auto'>
                <Outlet />
            </main>
        </div>
    ) : <Navigate to="/" />
}