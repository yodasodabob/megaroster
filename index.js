(function(){
    const nameForm = document.querySelector('form')

    const handleSubmit = (ev) => {
        debugger
        ev.preventDefault()
        const form = ev.target
        const rosterList = document.querySelector('.rosterList')
    }


    nameForm.addEventListener('submit', handleSubmit)
})()





// for list buttons use .onclick to reference a function within this file