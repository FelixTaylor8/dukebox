import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux';
import {useEffect, Fragment} from 'react';
import {fetchAlbums} from './actions';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

export function Albums() {
    const dispatch = useDispatch();
    const params = useParams();
    const albums = useSelector(state => state.albums);
    const isProgressing = useSelector(state => state.isProgressing);
    var artist = null;
    if (params != null && params.artist != null) {
        artist = params.artist;
    }
    useEffect(() => {
      dispatch(fetchAlbums(artist));
    }, [dispatch, artist]);
    return (
        <Fragment>
        <div>
        <h2>Albums by {artist}</h2>
        {isProgressing && <div className="spinner" />}
        {albums.map(album => (<div><span><Link to={`/artists/${artist}/${album}`}>{album}</Link></span><br /></div>))}
        <span><Link to={`/artists`}>All Artists</Link></span><br />
        </div>
        </Fragment>
    );
}