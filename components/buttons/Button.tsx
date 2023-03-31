import { Link } from "react-router-dom";

export default function Button({children, to, onClick, style}: any ){
    return(
        <Link to={to} onClick={onClick} style={style}>
            <button>
                {children}
            </button>
        </Link>
    )
}