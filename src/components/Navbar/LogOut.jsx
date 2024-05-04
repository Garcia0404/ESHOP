import { NavLink } from "."
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UsuarioContext } from "../../context/AppContext"
import { motion } from "framer-motion"

export const LogOut = () => {
  const { username, setUsername } = useContext(UsuarioContext)
  const links = ['My Settings','Configurations','Help and Feedback']
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{scale:0}}
      animate={{scale:1}}
      exit={{scale:0}}
      className='origin-top-right bg-gray-100 w-60 absolute top:0 right-0 rounded-md mt-2 border py-2 px-4 flex flex-col gap-1 shadow-md'>
      <span className='font-semibold px-2 py-1'>Signed as<br></br><span className='font-medium text-gray-400'>{username}@example.com</span></span>
      <ul className='list-none flex flex-col gap-2'>
        {
          links.map(link => (
            <NavLink key={link}>{link}</NavLink>
          ))
        }
        <li onClick={() => { navigate('/'), localStorage.setItem('data', ''), setUsername('') }} className='hover:bg-red-300 hover:text-red-500 rounded-md px-2 py-1 transition-all cursor-pointer'>Log Out</li>
      </ul>
    </motion.div>
  )

}