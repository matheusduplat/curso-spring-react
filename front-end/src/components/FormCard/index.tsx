import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'utils/request';
import { validateEmail } from 'utils/validate';
import './style.css';

type Props = {
    movieId: string;
}

export default function FormCard({movieId} : Props) {
     
    const navigate = useNavigate();
    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            })
    },[movieId]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email =  event.currentTarget.email.value;
        const score =  event.currentTarget.score.value;

        if(!validateEmail(email)){
            return alert('Email invalido');
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: movieId,
                score: score
            }
        }
        axios(config)
        .then(response => {
            navigate("/");
        });
    }

    return (
        <div className="metaflix-form-container">
            <img className="metaflix-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="metaflix-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="metaflix-form" onSubmit={handleSubmit}>
                    <div className="form-group metaflix-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group metaflix-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="metaflix-form-btn-container">
                        <button type="submit" className="btn btn-primary metaflix-btn">Salvar</button>
                        <Link to={'/'}>
                            <button className="btn btn-primary metaflix-btn ms-3">Cancelar</button>
                        </Link>
                    </div>
                </form >
            </div >
        </div >
    );
}