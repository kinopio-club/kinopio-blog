const publisher = {
  '@type': 'Organization',
  name: 'Kinopio',
  url: 'https://kinopio.club',
  logo: {
    '@type': 'ImageObject',
    url: 'https://kinopio.club/favicon-32x32.png'
  }
}

export default {
  schema: (data) => {
    if (!data.title) return null

    const pageUrl = `https://kinopio.club/blog${data.page?.url || ''}`

    // Use Blog schema for index page
    if (data.page?.url === '/') {
      return [{
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: data.title,
        url: pageUrl,
        description: data.description,
        publisher
      }]
    }

    // Author - use guest author for Guides, else Pirijan
    const author = data.userName ? {
      '@type': 'Person',
      name: data.userName,
      url: data.userUrl
    } : {
      '@type': 'Person',
      name: 'Pirijan',
      url: 'https://pketh.org'
    }

    const blogPostingSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: data.title,
      url: pageUrl,
      image: data.image,
      datePublished: data.date,
      description: data.description,
      author,
      publisher
    }

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Kinopio', item: 'https://kinopio.club' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://kinopio.club/blog/' },
        { '@type': 'ListItem', position: 3, name: data.title, item: pageUrl }
      ]
    }

    return [blogPostingSchema, breadcrumbSchema]
  }
}
