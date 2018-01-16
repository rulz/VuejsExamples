import musicService from './music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return musicService.get('/search', {
    params: { q: q, type: type }
  })
  .then(function(res) {
    return res.data
  })
}

export default trackService
