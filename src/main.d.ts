interface IApp {
  name: string
  title: string
  descriptions: Array<string>
  topics: Array<string>
  github: string
  links: Array<ILink>
  images: Array<IImage>
  display: boolean
}

interface ILink {
  name: string
  type: string
  url: string
}

interface IImage {
  alt: string
  url: string
}
