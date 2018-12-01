const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('kupa-auta/index.html', buildRequestData(req))
})

router.get('/prihlasenie-osobne', function (req, res) {
  res.render('kupa-auta/prihlasenie.html', buildRequestData(req, { prihlasenie: "osobne" }))
})

router.get('/prihlasenie-predajca', function (req, res) {
  res.render('kupa-auta/prihlasenie.html', buildRequestData(req, { prihlasenie: "predajca" }))
})

router.get('/prihlasenie-sprostredkovatel', function (req, res) {
  res.render('kupa-auta/prihlasenie.html', buildRequestData(req, { prihlasenie: "sprostredkovatel" }))
})

function buildRequestData (request, data) {
  function urlTo (path) {
    return '/kupa-auta' + path
  }

  return {
    'serviceName': 'Prihlásenie nového motorového vozidla',
    'serviceUrl': '/kupa-auta',
    'data': data,
    'navigationSteps': [
      {
        title: 'Úvod',
        description: '',
        href: urlTo('/'),
        isActive: request.path === '/'
      },
      {
        title: 'Prihlásenie vozidla osobne',
        description: '',
        href: urlTo('/prihlasenie-osobne'),
        isActive: request.path === '/prihlasenie-osobne'
      },
      {
        title: 'Prihlásenie vozidla predajcom',
        description: '',
        href: urlTo('/prihlasenie-predajca'),
        isActive: request.path === '/prihlasenie-predajca'
      },
      {
        title: 'Prihlásenie vozidla sprostredkovateľom',
        description: '',
        href: urlTo('/prihlasenie-sprostredkovatel'),
        isActive: request.path === '/prihlasenie-sprostredkovatel'
      }
    ]
  }
}

module.exports = router
