const count = document.querySelector('#count')

count.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const a = document.querySelector('a')
    a.href = `javascript: while (beagleCount < ${count.value}) document.querySelector('#beagle').click(); void 0;`
    document.body.style.overflow = 'auto'
    a.scrollIntoView()
  }
})
