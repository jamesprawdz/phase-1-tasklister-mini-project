document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
  const text = document.getElementById("new-task-description")
  const ul = document.createElement("tasks")
  const div = document.getElementById("list")
// const submit = document.querySelector("")
document.body.append(ul)

form.addEventListener("submit", (e)=>{
  e.preventDefault()
  div.append(ul)
  const li = document.createElement("li")
  const btn = document.createElement("button")
  ul.append(li)
  btn.innerText = "X"
  btn.addEventListener("click", ()=>{
      li.remove()
      btn.remove()
    })
    li.innerText = text.value + " " + btn.value
    li.append(btn)
  })
  form.addEventListener("submit", () => {
    text.value = ""
  })
})