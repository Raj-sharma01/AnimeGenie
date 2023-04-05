
let searchBox=document.getElementById("searchBox")
let div =document.getElementById("div")



const creatImages=(animes)=>{
    let n=animes.data.data.length
    console.log(n)
    try{
        document.querySelectorAll(".poster").forEach(el => el.remove());
        
        for(let i=0;i<n;i++){
            if(animes.data.data[i].type==="anime"){
                const img=document.createElement("img")
                img.src=animes.data.data[i].attributes.posterImage.small
                const div=document.createElement("div")
                const h4=document.createElement("h4")
                div.classList.add("poster")
                div.append(img)
                div.append(h4)
                h4.innerHTML=animes.data.data[i].attributes.canonicalTitle
                document.body.append(div)
            }
            
           
        }
      
    }
    catch(e){
        console.log("ERROR!!!", e )
    }
    searchBox.value="";
    if(n===0){
        const img=document.createElement("h2")
            img.classList.add("poster")
            
            document.body.append(img)
    }  

}


const getAnimes = async () => {
    let search = searchBox.value;
    const animes = await axios.get(`https://kitsu.io/api/edge/anime?filter[categories]=${search}`)
    console.log(animes)
    creatImages(animes)
}
let button=document.getElementById("button")

button.addEventListener("click",()=>{
    getAnimes();
})


document.addEventListener("keypress",(event)=>{
    console.log(event)
    if(event.key==="Enter"){
        getAnimes();
    }
})