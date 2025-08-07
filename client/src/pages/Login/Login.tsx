import { Link } from "react-router"
import Navbar from "../../components/Navbar/Navbar"
import PasswordInput from "../../components/Password/PasswordInput"
import { useState } from "react"
import { validateEmail } from "../../utils/helper"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!validateEmail(email)){
      setError('please enter a validate email')
      return
    }

    if(!password){
      setError('please enter password')
      return
    }

    setError('')

    //login api

  }

  return (
    <>
      <Navbar/>
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded px-7 py-10 bg-white">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Login</h4>
            <input type="text" placeholder="Email" className="input-box" value={email}  onChange={(e) => setEmail(e.target.value)}/>
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder={""}/>
            {error && <p className="text-red-600 text-sm pb-1">{error}</p> }
            <button className="w-full text-sm bg-blue-500 text-white py-2 rounded my-1 hover:bg-blue-600 transition" type="submit">Login</button>
            <p className="text-sm text-center mt-4">Not registered yet? {''}
              <Link to={'/signup'} className="font-medium text-blue-500 underline">Create an Account</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login