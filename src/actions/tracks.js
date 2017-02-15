var mockApiData = [
  {
    'id': 1,
    'name': 'track1'
  },
  {
    'id': 2,
    'name': 'track2'
  },
  {
    'id': 3,
    'name': 'track3'
  },
  {
    'id': 4,
    'name': 'track4'
  }
]

export const getTracks = () => dispatch => {
  setTimeout(() => {
    console.log('I got tracks');
    dispatch({'type': 'FETCH_TRACKS_SUCCESS', payload: mockApiData});
  }, 2000)
}
