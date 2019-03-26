const songsReducer = () => {
  return [
    { title: 'Hello My Love', duration: '3:29' },
    { title: 'Perfect', duration: '3:29' },
    { title: 'Photograph', duration: '3:10' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};
