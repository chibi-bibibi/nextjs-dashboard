export function getImageSrc(filename: string): string {
    if (process.env.NODE_ENV === 'production') {
      return `${filename}`
    } else {
      return `/${filename}`
    }
  }