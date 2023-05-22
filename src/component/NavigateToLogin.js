import { useNavigate } from "react-router-dom"

function NavigateToLogin(props){
const navigate = useNavigate()
if (props!==true){
    navigate("/login")
        
}}
export default NavigateToLogin