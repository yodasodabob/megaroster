(function(){
    const nameForm = document.querySelector('form')

    const buildDelButton = () => {
        const delbutton = document.createElement('button')
        delbutton.style.backgroundColor = '#ff3300'
        delbutton.textContent = 'Delete'
        delbutton.addEventListener('click', (ev) => {
            let button = ev.target
            button.parentNode.parentNode.remove()
        })
        return delbutton
    }

    const buildPromoteButton = () => {
        const promoteButton = document.createElement('button')
        promoteButton.style.backgroundColor = '#0000ff'
        promoteButton.textContent = 'Promote'
        promoteButton.addEventListener('click', (ev) => {
            let button = ev.target
            button.parentNode.parentNode.style.backgroundColor = '#00ff00'
        })
        return promoteButton
    }

    const buildLiButtons = () => {
        const buttonField = document.createElement('div')
        
        buttonField.style.display = 'inline-block'
       
        buttonField.appendChild(buildDelButton())
        buttonField.appendChild(buildPromoteButton())
        return buttonField
        }

    const buildListItem = (name) => {
        const li = document.createElement('li')
        li.textContent = name + '  '
        li.appendChild(buildLiButtons())
        return li
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        const form = ev.target
        const rosterList = document.querySelector('.rosterList')
        const name = form.name.value
        rosterList.insertBefore(buildListItem(name), rosterList.childNodes[0])
    }
    
    
    nameForm.addEventListener('submit', handleSubmit)
})()





