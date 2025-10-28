import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
 projects = [
    {
      title: 'E-Commerce App',
      image: '/proj1.jpg',
      description: 'Freshcart is a modern e-commerce web application built using React.js, focusing on a seamless shopping experience and clean user interface',
      link: 'https://github.com/Mokhtar103/FreshCart-e-commerce'
    },
    {
      title: 'Restaurant Website',
      image: '/proj2.jpeg',
      description: 'Yummy is a fully responsive restaurant website built using HTML, CSS, Bootstrap, JavaScript, and jQuery.',
      link: 'https://github.com/Mokhtar103/Yummy'
    },
    {
      title: 'Weather API',
      image: '/proj3.png',
      description: 'This project is a responsive weather website built using HTML, CSS, Bootstrap and JavaScript, designed to display real-time weather information for any city using a public weather API',
      link:'https://github.com/Mokhtar103/Weather-api-assignment'
    },
   
  ];

  selectedProject: any = null;

  openModal(project: any) {
    this.selectedProject = project;
    const modalElement = document.getElementById('portfolioModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}
