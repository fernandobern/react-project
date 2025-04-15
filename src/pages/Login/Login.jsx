import './Login.css'
import '../../styles/global.css'

import MainButton from '../../components/MainButton/MainButton'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/input'

import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    //dados ficticios para o login
    const dadosFake = {
        usuario: 'spotmkt',
        senha: '123',
    }

    //função para validar o login do usuário

    function handleLogin(e) {
        e.preventDefault()

        if (usuario === '' || senha === '') {
            alert('É necessário preencher todo os campos!')
            return
        }

        if (usuario === dadosFake.usuario && senha === dadosFake.senha) {
            alert('login bem-sucedido!')
            navigate('/home') //redireciona para a tela inicial
        } else {
            alert('Email ou senha inválidos')
        }
    }

    return (
        <div className="card-wrapper">
            <div className='card-login'>
                <form className='login-form' onSubmit={handleLogin}>
                    <h3>Faça login</h3>
                    {/* <label htmlFor="">Usuário</label> */}
                    <Input
                        type='text'
                        placeholder="Digite seu email:"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    {/* <label htmlFor="">Senha</label> */}
                    <Input
                        type="password"
                        placeholder="Digite sua senha:"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <MainButton text="ENTRAR" />

                    <span className='divider'></span>

                    <div className='cadastro-card'>
                        <p>Não tem uma conta ?</p>
                        <Button title="CADASTRE-SE AGORA"/>
                    </div>
                </form>     
            </div>
        </div>
    )
}

export default Login