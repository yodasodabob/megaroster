(function(){
    const nameForm = document.querySelector('form')


    // const buildLiButtons = () => {
    //     const delbutton = document.createElement('button')
    //     delbutton.onclick = () => {

    //     }
    // }

    const buildListItem = (name) => {
        const li = document.createElement('li')
        li.textContent = name

        return li
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        const form = ev.target
        const rosterList = document.querySelector('.rosterList')
        console.log(rosterList)
        const name = form.name.value
        rosterList.appendChild(buildListItem(name))
    }
    
    
    nameForm.addEventListener('submit', handleSubmit)
})()





// for list buttons use .onclick to reference a function within this file