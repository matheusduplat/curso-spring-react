import MovieStars from "components/MovieStars";
import './style.css';

type Props = {
    score: number;
    count: number;
}

export default function MovieScore({score , count}:Props) {
    
    return (
        <div className="metaflix-score-container">
            <p className="metaflix-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score} />
            <p className="metaflix-score-count">{count} avaliações</p>
        </div>
    );
}