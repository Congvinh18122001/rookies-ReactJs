import {Item} from './Item';

import './Navbar.css';

const listItem =[
    {
        title:'Unique Sessions'
        ,num:"36+"
        ,icon:"fa fa-microphone"
    }
    ,{
        title:'Amazing speaker'
        ,num:"12"
        ,icon:"fa fa-user"
    }
    ,{
        title:'food stalls'
        ,num:"45"
        ,icon:"fa fa-coffee"
    }
    ,{
        title:'Book Available'
        ,num:"2350+"
        ,icon:"fa fa-book"
    }
];

export function Navbar(){

    const navbar = listItem.map(
        item =><Item title={item.title} num={item.num} icon ={item.icon}/>
        );
    return(
            <div className="navbar">
                {navbar}
            </div>
    );
}