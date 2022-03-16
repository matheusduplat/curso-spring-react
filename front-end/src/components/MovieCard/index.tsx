import MovieScore from "components/MovieScore";

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
                <div className="btn btn-primary metaflix-btn">Avaliar</div>
            </div>
        </div>
    );
}