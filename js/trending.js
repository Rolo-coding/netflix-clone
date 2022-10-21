const watchBtn = document.querySelector('.btn-wrapper .watch')
const infoBtn = document.querySelector('.btn-wrapper .info')

const play = document.querySelector('.btn-wrapper .play-btn')
const info = document.querySelector('.btn-wrapper .info-btn')

getTrending(types[0]).then(({ results }) => {
  const banner = results[id]
  const row = createRow(0, `${text}`)

  createBanner(banner)
  results.map(movie => createMovie(movie, row, 'w300'))

  watchBtn.addEventListener('click', () =>
    createVideo(types[0], banner.id, videoId)
  )
  play.addEventListener('click', () =>
    createVideo(types[0], banner.id, videoId)
  )

  infoBtn.addEventListener('click', () => createModal(banner))
  info.addEventListener('click', () => createModal(banner))
})

getMovieWithGenres(types[0], id)
