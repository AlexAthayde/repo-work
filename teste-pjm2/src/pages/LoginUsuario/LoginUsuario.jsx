import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/auth-context'
import styles from './LoginUsuario.module.css'

export function LoginUsuario() {
    const { signIn } = useAuth()
    const navigate = useNavigate()
    const { register, handleSubmit, formState } = useForm()
   
    const { errors, isSubmitting } = formState

    async function onSubmit(dados) {
        try {
            await signIn(dados)
            navigate('/dashboard')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <main className={styles.loginContainer}>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <img 
                        className="logo365" 
                        src="https://lab365-admin.hml.sesisenai.org.br/javax.faces.resource/img/logo-lab.png" 
                        alt="lab 365"  
                        height="50" 
                    />

                    <h1>Efetue Login</h1>

                    <div className={styles.inputEmail}>
                        <label htmlFor="inputEmail">Email</label>
                        <input 
                            type="email" 
                            className='form-control' 
                            id='inputEmail'
                            placeholder='Digite seu email'
                            {...register("email", {require: true})}
                        />
                        {errors.email && <span>Email é obrigatório</span>}
                    </div>


                    <div className={styles.inputSenha}>
                        <label htmlFor="inputSenha">Senha</label>
                        <input 
                            type="password" 
                            className="form-control"
                            id='inputSenha'
                            placeholder='Digite sua senha'
                            {...register("password", {require: true})}
                        />
                        {errors.password && <span>Senha é obrigatória</span>}
                    </div>


                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? 'Carrengado...': 'Entrar'}</button>

                    <p className="mt-5 mb-3 text-body-secondary">lab365 &copy; 2024</p>
                    <p>Não possui cadastro? <Link to="/cadastro">Cadastra-se</Link></p>
                </form>
            </div>
            <div className={styles.imageContainer}>
                {/* <img src="./src/assets/img-login.jpeg" alt="Imagem Login" /> */}
            </div>
        </main>
    )
}