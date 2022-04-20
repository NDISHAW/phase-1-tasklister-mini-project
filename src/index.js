document.addEventListener(`DOMContentLoaded`, () => {
  let form=document.querySelector(`form`)
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    buildTasks(e.target.newTaskDescription.value)
    form.reset()
  })
})

function buildTasks(tasks){
  console.log(tasks);
  let p= document.createElement(`p`)
  let btn=document.createElement(`button`)
  btn.addEventListener(`click`, handlesDelete)
  btn.textContent= `X  `
  p.textContent=`${tasks   }    `
  p.appendChild(btn)
  console.log(p);
  document.querySelector(`#tasks`).appendChild(p)
}

function handlesDelete(e) {
  e.target.parentNode.remove()
}