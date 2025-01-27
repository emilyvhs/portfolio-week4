"use strict";

const portfolio = document.querySelector('#portfolio')

fetch ('./projects.json')
    .then ((response) => {
        return response.json()
    })

    .then (data => {
        
        data.projects.forEach((project) => {
            
            let portfolioBox = document.querySelector('.portfolio')
            portfolioBox.innerHTML += `
                <div class="portfolio-box">
                    <h3>${project.title}</h3>
                    <img src="${project.image}" alt="${project.alt}" />
                    <p>${project.description}</p>
                    <a href=${project.link}>github link</a>
                </div>
            `        
    })
})      
   