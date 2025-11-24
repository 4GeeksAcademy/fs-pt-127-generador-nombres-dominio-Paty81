

window.onload = function() {
  const pronouns = ['the','our'];
  const adjs = ['great', 'big'];
  const nouns = ['jogger', 'racoon'];

  const  domains = [];

pronouns.forEach((pronoun)=> {
  adjs.forEach((adj) => {
    nouns.forEach((noun)=> {
      domains.push(`${pronoun}${adj}${noun}.com`)
    })
    })
  })
  console.log(domains)
}
  


