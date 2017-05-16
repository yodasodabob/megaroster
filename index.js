(function(){
    const nameForm = document.querySelector('form')


    const buildLiButtons = () => {
        const buttonField = document.createElement('div')
        const delbutton = document.createElement('button')
        buttonField.style.display = 'inline-block'
        buttonField.style.backgroundColor = '#ff3300'
        delbutton.textContent = 'Delete'
        delbutton.addEventListener('click', (ev) => {
            let button = ev.target
            console.log(button.parentNode.parentNode)
            button.parentNode.parentNode.remove()
        })
        buttonField.appendChild(delbutton)
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





// for list buttons use .onclick to reference a function within this file
// include list buttons in a div and display inline
// add event listener to the buttons rather than .onclick