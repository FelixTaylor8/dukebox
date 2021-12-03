import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux';
import {useEffect, Fragment} from 'react';
import {fetchTracks} from './actions';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

export function Tracks() {
    const dispatch = useDispatch();
    const params = useParams();
    const tracks = useSelector(state => state.tracks);
    const isProgressing = useSelector(state => state.isProgressing);
    var album = null;
    var artist = null;
    if (params != null && params.album != null && params.artist != null) {
        album = params.album;
        artist = params.artist;
    }
    useEffect(() => {
      dispatch(fetchTracks(artist, album));
    }, [dispatch, artist, album]);
    return (
        <Fragment>
        <div>
        <h2>Tracks on {album}</h2>
        {isProgressing && <div className="spinner" />}
        {tracks.map(track => (<div><span>{track}</span><br /></div>))}
        <span><Link to={`/artists/${artist}`}>All Albums by {artist}</Link></span><br />
        </div>
        </Fragment>
    );
}