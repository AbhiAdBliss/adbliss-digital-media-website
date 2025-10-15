export interface LinkItem {
  name: string
  href: string
}

export interface NavigationSection {
  title: string
  links: LinkItem[]
}

export interface TabItem {
  id: string
  label: string
  title: string
  subtitle: string
  cta: string
  color: string
}

export interface VideoItem {
  src: string
  title: string
  subtitle: string
}

export interface FeatureItem {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}
