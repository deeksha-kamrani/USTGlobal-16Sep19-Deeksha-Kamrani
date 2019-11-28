import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
selectedMovie;
  Movies = [
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__340.jpg',
      name : 'EndGame',
      Rating : 'Rating : 4/10',
      desc : 'Superman is a fictional superhero. The character was created by writer Jerry Siegel and artist Joe Shuster, and first appeared in Action Comics #1, a comic book published on April 18, 1938.'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2017/08/28/00/01/thejoker-2688077__340.jpg',
      name : 'Three Friends',
      Rating : 'Rating : 8/10',
      desc : 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2012/10/25/23/24/film-poster-62856__340.jpg',
      name : 'Movie3',
      Rating : 'Rating : 9/10',
      desc : 'Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2017/07/26/06/31/road-2540632__340.jpg',
      name : 'Road Couple',
      Rating : 'Rating : 2/10',
      desc : 'Sir Charles Spencer Chaplin KBE was an English comic actor, filmmaker, and composer who rose to fame in the era of silent film. He became a worldwide icon through his screen persona, "The Tramp", and is considered one of the mo'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2013/01/29/20/45/poster-76647__340.jpg',
      name : 'Arizona',
      Rating : 'Rating : 7/10',
      desc : 'Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  sendMovie(movie){
    console.log(movie);
    this.selectedMovie=movie;
  }

}
