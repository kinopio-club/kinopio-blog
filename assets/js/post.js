console.log('🌺')

const post = document.querySelector('.article-content')
const p = post.querySelectorAll('p')
const li = post.querySelectorAll('li')

const insertBadges = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    let string = elements[i].innerHTML
    string = string.replace('[Fixed]', `<span class="badge badge-inline badge-fixed">Fixed</span>`)
    string = string.replace('[Improved]', `<span class="badge badge-inline badge-improved">Improved</span>`)
    string = string.replace('[API Docs]', `<span class="badge badge-inline badge-api-docs">API Docs</span>`)
    elements[i].innerHTML = string
  }
}

insertBadges(p)
insertBadges(li)
