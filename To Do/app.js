var a = document.getElementById('main')
var b = document.getElementById('fax')

function inp() {
    var newElement = document.createElement("P")
    var text = b.value
    var text = document.createTextNode(text)
    newElement.appendChild(text)
    newElement.setAttribute('class','demo')
    a.appendChild(newElement)
    b.value = ""

    var editbtn = document.createElement('BUTTON')
    var editbtnText = document.createTextNode('Edit')
    editbtn.appendChild(editbtnText)
    editbtn.setAttribute('onclick','editTodo(this)')
    editbtn.setAttribute('class','democlass')
    newElement.appendChild(editbtn)

    var deletebtn = document.createElement('BUTTON')
    var deletebtnText = document.createTextNode('Delete')
    deletebtn.appendChild(deletebtnText)
    deletebtn.setAttribute('onclick','deleteTodo(this)')
    deletebtn.setAttribute('class','democlass')
    newElement.appendChild(deletebtn)
}
function editTodo(e) {
    console.log(e.parentNode.firstChild)
    e.parentNode.firstChild.nodeValue = prompt('Edit')
}
function deleteTodo(e) {
    e.parentNode.remove()
}
function deleteAll(){
    a.innerHTML = ''
}