module.exports = { getAll }

const skills = [
  { name: 'javascript', spec: 'front-end', proficient: true },
  { name: 'node.js', spec: 'back-end', proficient: false },
  { name: 'mongoDb', spec: 'back-end', proficient: false },
  { name: 'react', spec: 'front-end', proficient: false },
  { name: 'html-DOM', spec: 'front-end', proficient: true },
]

function getAll() {
  return skills
}

