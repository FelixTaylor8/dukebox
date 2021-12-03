function assertResponse(response) {
    if (response.status >= 200 || response.status < 300) {
        return response;
    } else {
        throw new Error(`${response.status}: ${response.statusText}`);
    }
}

export const Action = Object.freeze({
    LoadArtists: 'LoadArtists',
    LoadAlbums: 'LoadAlbums',
    LoadTracks: 'LoadTracks',
    ShowProgress: 'ShowProgress',
    HideProgress: 'HideProgress',
});

export function loadArtists(artists) {
    return { type: Action.LoadArtists, payload: artists };
}

export function loadAlbums(albums) {
    return { type: Action.LoadAlbums, payload: albums };
}

export function loadTracks(tracks) {
    return { type: Action.LoadTracks, payload: tracks };
}

export function showProgress() {
    return { type: Action.ShowProgress};
}

export function hideProgress() {
    return { type: Action.HideProgress};
}

export function fetchArtists() {
    return dispatch => {
        dispatch(loadArtists([]));
        dispatch(showProgress());

        fetch(`https://dukebox.twodee.org:8443/artists`)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                dispatch(hideProgress());
                    dispatch(loadArtists(data));
            });

    };
}

export function fetchAlbums(artist) {
    return dispatch => {
        dispatch(loadAlbums([]));
        dispatch(showProgress());
        fetch(`https://dukebox.twodee.org:8443/artists/${artist}`)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                dispatch(hideProgress());
                    dispatch(loadAlbums(data));
            });
    };
}

export function fetchTracks(artist, album) {
    return dispatch => {
        dispatch(loadTracks([]));
        dispatch(showProgress());
        fetch(`https://dukebox.twodee.org:8443/artists/${artist}/${album}`)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                dispatch(hideProgress());
                    dispatch(loadTracks(data));
            });
    };
}