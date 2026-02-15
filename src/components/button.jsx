import './button.css'

export default function Button({children, btnclick}){

    return <button className='button' onClick={btnclick}>{children}</button>
}