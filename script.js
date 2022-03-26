const input = document.querySelector("input")
const button = document.querySelector("button")
const main = document.querySelector("main")
const myfriends = document.querySelector("div.myfriends")
const searchedUsers = document.querySelector("div.searchedUsers")

let friends = ["ivan90s", "steve958", "anamarelja", "NikolaV91", "NensyN", "ivana02m","dachoist", "nesawesly"]


function fetchData(){
    friends.forEach((e,i,arr)=>{

        fetch(`https://api.github.com/users/${arr[i]}`).then(res=>res.json()).then(data=>{

                let divMini = document.createElement("div")
                let image = document.createElement("img")
                let name = document.createElement("h3")

                image.setAttribute("src", data.avatar_url)
                name.innerHTML = data.login
                image.addEventListener("click", function(){
                    // console.log(e.html_url)
                        window.location.href = `${data.html_url}`

                })

                divMini.append(image)
                divMini.append(name)
                myfriends.append(divMini)
                        

        })
    })    
}



function fetchData2(){

    fetch(`https://api.github.com/search/users?q=${input.value}`).then(res=> res.json().then(data=>{
        console.log(data)
            button.innerHTML ="Clear Search"
            if(input.value === ""){
                button.innerHTML = "Search"
            }
                searchedUsers.innerHTML=""
            data.items.forEach((e,i,arr)=>{

                let divMaxi = document.createElement("div")
                let slika = document.createElement("img")
                let name = document.createElement("h3")

                slika.setAttribute("src", e.avatar_url)
                name.innerHTML = e.login
                console.log(e.html_url)
                divMaxi.addEventListener("click", function(){
                    // console.log(e.html_url)
                        window.location.href = `${e.html_url}`

                })

                divMaxi.append(slika)
                divMaxi.append(name)
                searchedUsers.append(divMaxi)

            })

    }))

}










function clear(){
    button.innerHTML = "Search"
    searchedUsers.innerHTML=""
    input.value = ""

}





window.addEventListener("load", fetchData)
button.addEventListener("click", clear)
input.onkeyup =function(){
   
    fetchData2()
}


