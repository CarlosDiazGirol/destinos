const cities = [
  {
    madrid: {
      destinos: {
        barcelona: "coche",
        valencia: "avión",
      }
    }
  },
  {
    barcelona: {
      destinos: {
        madrid: "tren",
        valencia: "tren",
        roma: "avión",
        paris: "coche",
      }
    }
  },
  {
    valencia: {
      destinos: {
        madrid: "avión",
        barcelona: "barco",
        malta: "barco",
      }
    }
  },
  {
    roma: {
      destinos: {
        malta: "avión",
      }
    }
  },
  {
    malta: {
      destinos: {
        roma: "avión",
      }
    }
  },
  {
    paris: {
      destinos: {}
    }
  }
]
export default cities