const gifts = ['book', 'game', 'socks']

const wrapping = gifts => gifts.map(gift => `${'*'.repeat(gift.length+2)}\n*${gift}*\n${'*'.repeat(gift.length+2)}`);

const wrapped = wrapping(gifts)

console.log(wrapped)

wrapped.map(elem => {
  console.log(elem);
  console.log(`\n\n`);
})