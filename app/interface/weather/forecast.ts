export type Forecast = {
  description: {
    bodyText: string
  },
  today: {
    date: string,
    telop: string,
    detail: {
      weather: string,
      wind: string,
      wave: string
    },
    temperature: {
      min: {
          celsius: string | null
      },
      max: {
          celsius: string | null
      }
    },
    chanceOfRain: {
      T00_06: string,
      T06_12: string,
      T12_18: string,
      T18_24: string,
    },
    image: {
      title: string,
      url: string,
      width: number,
      height: number,
    },
  },
  tomorrow: {
    date: string,
    telop: string,
    detail: {
      weather: string,
      wind: string,
      wave: string
    },
    temperature: {
      min: {
          celsius: string | null
      },
      max: {
          celsius: string | null
      }
    },
    chanceOfRain: {
      T00_06: string,
      T06_12: string,
      T12_18: string,
      T18_24: string,
    },
    image: {
      title: string,
      url: string,
      width: number,
      height: number,
    },
  },
  future: {
    date: string,
    telop: string,
    detail: {
      weather: string,
      wind: string,
      wave: string
    },
    temperature: {
      min: {
          celsius: string | null
      },
      max: {
          celsius: string | null
      }
    },
    chanceOfRain: {
      T00_06: string,
      T06_12: string,
      T12_18: string,
      T18_24: string,
    },
    image: {
      title: string,
      url: string,
      width: number,
      height: number,
    },
  }
}
