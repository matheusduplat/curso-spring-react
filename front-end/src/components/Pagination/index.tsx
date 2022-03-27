import {ReactComponent as Arrow} from 'assets/img/icon-seta.svg';
import { MoviePage } from 'types/movie';
import './style.css';

type Props = {
    page:MoviePage;
    onChanger: Function;
}

export default function Pagination({page,onChanger} : Props) {
    return (
        <div className="metaflix-pagination-container">
            <div className="metaflix-pagination-box">
                <button className="metaflix-pagination-button" disabled={page.first} onClick={() => onChanger(page.number - 1)}>
                    <Arrow />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="metaflix-pagination-button" disabled={page.last} onClick={() => onChanger(page.number + 1)}>
                    <Arrow className="metaflix-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}