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
                    <a href=${project.link} target="_blank">github link</a>
                </div>
            `        
    })
})      

let mobileNav = document.querySelector('.top-nav')
let mobileContactLinks = document.querySelector('.header-contact-links')
let mobileContact = document.querySelector('.nav-contact')
let menuButton = document.querySelector('.menu-button')

menuButton.addEventListener('click', showMenu)

function showMenu() {
    mobileNav.classList.toggle('hidden')
    mobileContactLinks.classList.toggle('hidden')
    mobileContact.classList.toggle('hidden')
}

