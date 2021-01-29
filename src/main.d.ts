interface IApp extends IRepo {
  name: string
  title: string
  description: string
  logo: string
  images: Array<string>
  actions: Array<any>
  display: boolean
}

interface ILicense {
  name: string
  url: string
  spdx_id: string
  [propName: string]: any
}

interface IRepo {
  name: string
  description: string
  html_url: string
  homepage: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  language: string
  archived: boolean
  license: ILicense
  pushed_at: string
  releases_url: string
  [propName: string]: any
}
