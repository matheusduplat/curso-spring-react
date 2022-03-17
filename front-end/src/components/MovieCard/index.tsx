import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";

export default function MovieCard() {
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };
    return (
        <div>
            <img className="metaflix-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="metaflix-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary metaflix-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    );
}