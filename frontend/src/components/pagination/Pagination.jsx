import { useEffect, useState } from "react";
import '../styles/pagination.css';


const Pagination = ({pages, setCurrentPage, currentRentals , allRentals}) => {


    const numOfPages = [];

    for (let i=1; i <= pages; i++) {
        numOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);

    useEffect(() => {
        setCurrentPage(currentButton);
    }, [currentButton, setCurrentPage])

    return (
        <div className="clearfix">
        <div className="hint-text">Mostrando 
        <b> {currentRentals.length} </b> 
        de <b> {allRentals.length} </b> 
        entrada(s)</div>
        <br />
        <ul className="pagination pagination-sm justify-content-center ">
            <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item' }`}>
                <a href="#!" 
                onClick = { () => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
            >
                <i style={{ color: "#354259"}} className="material-icons">chevron_left</i>
                </a>
            </li>
{
            numOfPages.map((page, index) => {
                return (
                    <li key={index} 
                    className={`${currentButton === page ?
                     'page-item active waves-effect' : 'page-item waves-effect' }`}>
                        <a href="#!" className="page-link"
                        onClick = {()=>setCurrentButton(page)}
                    >{page}</a></li> 
                )
            })

}

<li className={`${currentButton === numOfPages.length ? 'page-item disabled waves-effect' : 'page-item' }`}>
    <a href="#!"
                onClick = { () => setCurrentButton((next) => next === numOfPages.length ? next : next + 1)}
            ><i style={{ color: "#354259"}} className="material-icons">chevron_right</i>
    </a></li>
        </ul>
    </div>
    )
}

export default Pagination;