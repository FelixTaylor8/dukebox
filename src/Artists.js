import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { fetchArtists } from './actions';
import { Link } from 'react-router-dom';

export function Artists() {
    const dispatch = useDispatch();
    const isProgressing = useSelector(state => state.isProgressing);
    const artists = useSelector(state => state.artists);
    useEffect(() => {
        dispatch(fetchArtists());
    }, [dispatch]);
    return (
        <Fragment>
            <div>
                <h2>Artists</h2>
                {isProgressing && <div className="spinner" />}
                {artists.map(artist => (
                    <div><span><Link to={`/artists/${artist}`}>{artist}</Link></span><br /></div>
                ))}
            </div>
        </Fragment>
    );
}