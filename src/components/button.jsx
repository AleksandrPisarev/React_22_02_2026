import './button.css'

export default function Button({children, btnclick, active}){

    return <button className={active ? 'button activ': 'button'} onClick={btnclick}>{children}</button>
}