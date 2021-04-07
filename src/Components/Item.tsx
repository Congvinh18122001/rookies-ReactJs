import './Navbar.css';

interface IItemProps{
    num:string;
    icon: string;
    title: string;
}
export function Item(props:IItemProps){
    return(
        <div>
            <p className="item">
            <i className={props.icon}></i>
            <h3 className="num">{props.num}</h3>   
            <p className="title">{props.title}</p>          
            </p> 
        </div>
    );
}