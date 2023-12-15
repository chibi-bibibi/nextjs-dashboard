export function getImageSrc(filename: string, dir?: string): string {
  if (process.env.NODE_ENV === 'production') {
    return `${filename}`;
  } else if (dir) {
    return `/${dir}/${filename}`;
  } else {
    return `/${filename}`;
  }
}
