interface IApp {
  name: string
  title: string
  descriptions: Array<string>
  github: string
  links: Array<ILink>
  topics: Array<string>
  display: boolean
}

interface ILink {
  name: string
  type: string
  url: string
}
