function bootNavigation(mapLoaded) {
    try {
        console.log(`Is Navigation Loaded: ${mapLoaded}`)
        if (!mapLoaded) {
          throw new Error('Map is not passed in this function')
        }
        return 'NAV_OK'
    } catch (error) {
        console.log(error)
        console.log(`Navigation Failed: ${error.message}`)
    } finally {
      console.log(`Navigation sequence completed`)
  }
}

const status1 = bootNavigation(false)
console.log(`Result: ${status1}`)
