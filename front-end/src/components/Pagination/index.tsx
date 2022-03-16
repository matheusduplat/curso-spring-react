import {ReactComponent as Arrow} from 'assets/img/icon-seta.svg';
import './style.css';
export default function Pagination() {
    return (
        <div className="metaflix-pagination-container">
            <div className="metaflix-pagination-box">
                <button className="metaflix-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="metaflix-pagination-button" disabled={false} >
                    <Arrow className="metaflix-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}