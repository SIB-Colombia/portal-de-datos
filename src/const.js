const Const = {
  server: {
    local: location.origin.indexOf('localhost') > -1 ? 'http://localhost:8000' : location.origin,
    amazon: 'http://ec2-52-200-3-121.compute-1.amazonaws.com',
    api_v1_5: 'http://api-catalogo-v2.biodiversidad.co/api/v1.5',
    api_bio_v1_5: 'http://api.biodiversidad.co/api/v1.5'
  },
  TOKEN: 'token-p0rt4lD4to5',
  USER: 'user-p0rt4lD4to5',
  urlLogo: 'https://s3.amazonaws.com/sib-resources/images/logos-canales/svg/logo-datos-corte.svg',
}

export default Const
