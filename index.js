const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("description-animate")
            return;
        }
        setTimeout(()=>entry.target.classList.remove("description-animate"),3000)
        
        
    })
})
observer.observe(document.querySelector(".description"))
observer.observe(document.querySelector(".description2"))