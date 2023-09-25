import "./button.scss";

function Button({ src,children, id }) {
    return(
        <button id={id} className="button"><img className="button__icon" src={src} alt="button"></img>{children}</button>
    );
}

export default Button;