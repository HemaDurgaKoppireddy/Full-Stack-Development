 function fun() {
    var row = document.getElementsByTagName('input')[0].value
    // let newEle=document.createElement(row)
    var column=document.getElementsByTagName('input')[1].value
    // newEle.innerText = data


    for(let i=0; i<row; i++) {
        let newrow=document.createElement('tr')

        for(let j=0; j<column; j++) {
            let newcol = document.createElement('td')
        }
    }
    let parent = document.getElementsByTagName("body")[0]
    parent.append(newEle)
 }