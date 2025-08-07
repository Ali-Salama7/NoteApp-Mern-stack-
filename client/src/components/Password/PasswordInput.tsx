import { useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"

interface password {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string
}

const PasswordInput = ({value, onChange, placeholder}: password) => {
    const [isShowPassword, setIsShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword)
    }

  return (
    <div className="flex items-center bg-transparent px-5 border-[1.5px] rounded mb-3">
        <input type={isShowPassword ? 'text' : 'password'} value={value} placeholder={placeholder || 'password'} onChange={onChange} className="w-full  py-3 text-sm bg-transparent outline-none rounded mr-3"/>
        {isShowPassword ? 
        <FaRegEye fontSize={22} className="text-blue-500 cursor-pointer" onClick={() => toggleShowPassword()}/> :
        <FaRegEyeSlash fontSize={22} className="text-slate-400 cursor-pointer" onClick={() => toggleShowPassword()}/>
        }
    </div>
  )
}

export default PasswordInput