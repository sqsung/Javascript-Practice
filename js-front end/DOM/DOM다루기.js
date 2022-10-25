//1. 특정 요소 찾기
document.getElementById('test')
document.getElementsByClassName('target-class')
document.getElementsByTagName('a')
document.querySelector('#test')

//2. 인접 노드 접근 
Node.children
Node.firstElementChild
Node.lastElementChild
Node.previousElementSibling
Node.nextElementSibling
Node.parentElement

//3 요소 만들기
document.createElement(tag)
Node.appendChild(Node)
Node.insertBefore(newNode, refNode)

