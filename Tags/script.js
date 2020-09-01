let tags = []
let tagContainer = document.querySelector('.tag-container')
let input = tagContainer.querySelector('input')

input.addEventListener('keyup', addTags)

function addTags(event) {
 console.log(event)
 const keyPressedinsEnter = event.key == 'Enter'
 if(keyPressedinsEnter) {
     input.value.split(',').forEach( tag => {
         if(tag) {
             tags.push(tag.trim())
         }

         console.log(tags)
     });

     updateTags()
     input.value = ""
 }
}

function updateTags() {
    clearTags()

    tags.slice().reverse().forEach(tag => {
     tagContainer.prepend(createTag(tag))
    })
}

function createTag(tag) {
    const div = document.createElement('div')
    div.classList.add('tag')

    const span = document.createElement('span')
    span.innerHTML = tag
    div.append(span)

    const i = document.createElement('i')
    i.classList.add('close')
    i.setAttribute('data-id', tag)
    i.onclick = removeTag
    span.append(i)

    return div
}

function removeTag(event) {
    const buttonX = event.currentTarget
    const id = buttonX.dataset.id
    const index = tags.indexOf(id)
    tags.splice(index, 1)

    updateTags()
}

function clearTags() {
    tagContainer
    .querySelectorAll('.tag')
    .forEach(tagElement => tagElement.remove())
}