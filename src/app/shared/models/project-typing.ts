export interface Language {
  language: string,
  level: string,
  progress: string
}

export interface Education {
  name: string,
  years: string,
  profession?: string,
  certificatePath?: string
}

export interface Contact {
  contactName: string,
  link: string,
  contact: string,
  icon: string,
}
