import MovieStars from "components/MovieStars";
import './style.css';
export default function MovieScore() {
    const score = 3.5;
    const count = 13
    return (
        <div className="metaflix-score-container">
            <p className="metaflix-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="metaflix-score-count">{count} avaliações</p>
        </div>
    );
}