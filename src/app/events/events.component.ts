import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  cards = [
    { title: 'Akashya Patra Foundation', image:"/assets/images/akshaya.webp", content: 'The Akshaya Patra Foundation is a non-profit organization that strives to eliminate classroom hunger by providing nutritious meals to school children in India.Lorem ipsum dolor sit amet.', url: "https://odisha.akshayapatra.org/" },
    { title: 'Smile Foundation',image:"/assets/images/smile.jpg", content: 'The smile Foundation is a non-profit organization that strives to eliminate classroom hunger by providing nutritious meals to school children in India.Lorem ipsum dolor sit amet.', url: "https://www.smilefoundationindia.org/" },
    { title: 'Nanhi Kali Foundation', image:"/assets/images/nanhi.jpeg", content: 'The nanhi kali Foundation is a non-profit organization that strives to eliminate classroom hunger by providing nutritious meals to school children in India.Lorem ipsum dolor sit amet.' , url: "https://www.nanhikali.org/" },
    { title: 'Pradan', image:"/assets/images/pradan.png",content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima doloribus repellendus quam ab necessitatibus libero repellat aperiam numquam. Quibusdam natus  obcaecati tenetur aliquid doloribus commodi distinctio ab.' , url: "https://www.pradan.net/" },
    { title: 'Udyogini',image:"/assets/images/udyogini.jpg", content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima doloribus repellendus quam ab necessitatibus libero repellat aperiam numquam. Quibusdam natus  obcaecati tenetur aliquid doloribus commodi distinctio ab.' , url: "https://udyogini.org/" },
    { title: 'Pratham',image:"/assets/images/Pratham.png", content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima doloribus repellendus quam ab necessitatibus libero repellat aperiam numquam. Quibusdam natus  obcaecati tenetur aliquid doloribus commodi distinctio ab.' , url: "https://www.pratham.org/" },
    { title: 'Cry',image:"/assets/images/CRY.webp", content: 'Duis aute irure dolor in reprehenderit.', url: "https://www.cry.org/"},
    { title: 'HelpAge',image:"/assets/images/helpage.webp", content: 'Excepteur sint occaecat cupidatat non proident.', url: "https://www.helpageindia.org/"}
  ];

  navigateToSite(url: string){
    console.log("clicked")
    window.location.href = url;
  }
}
