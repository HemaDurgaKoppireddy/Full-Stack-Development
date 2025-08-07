// console.log("hello")
// let newEle=document.createElement('h1')
//     newEle.innerText = "Hello"
//     console.log(data)

//     newEle.setAttribute("class", "heading")
//     let parent = document.getElementsByTagName("body")[0]
//     parent.append(newEle)

function fun() {
    var tag = document.getElementsByTagName('input')[0].value
    let newEle=document.createElement(tag)
    var data=document.getElementsByTagName('input')[1].value
    newEle.innerText = data

    newEle.setAttribute("class", "heading")
    // newEle.setAttribute("font-size", "100px")
    let parent = document.getElementsByTagName("body")[0]
    parent.append(newEle)
}





