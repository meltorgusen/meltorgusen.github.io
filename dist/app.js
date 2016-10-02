const CONTACT = `
<form method="POST" action="http://formspree.io/meltorgusen@gmail.com">
  <label for="name">Name:</label>
  <input type="text" name="name" required placeholder="Your name">
  <label for="_replyto">Email:</label>
  <input type="email" name="_replyto" required placeholder="Your email">
  <input type="hidden" name="_subject" value="email from meltorgusen.com!">
  <input type="text" name="_gotcha" style="display: none">
  <label for="message">Your message:</label>
  <textarea name="message" placeholder="Your message"></textarea>
  <button type="submit">Send</button>
</form>
`;

const LOCATIONS = `
<h3> Find me teaching here: </h3>
<ul class="showList">
  <li>
    <a href="">Yoga Pod Lodo </a>
    <address> 1956 Lawrence Street, Suite 100<br>Denver, CO 80202 </address>
  </li>
  <li>
    <a href="">The Yoga Mat </a>
    <address> 3563 Larimer Street<br>Denver, CO 80205 </address>
  </li>
  <li>
    <a href="">Patagonia </a>
    <address> 1431 15th Street<br>Denver, CO 80202 </address>
    <aside> Patagonia offers a free community class in the store every Wednesday night at 7:30 pm </aside>
  </li>
  <li>
    <a href="">Colorado Athletic Club - Union Station</a>
    <address> 1601 Wewatta Street<br>Denver, CO 80202 </address>
  </li>
</ul>
`;

const CALENDAR = `
<h3>Calendar</h3>
<iframe class="calendar" src="https://calendar.google.com/calendar/embed?src=NjFhNzVwZ3JoOWlxYm9vMnRiNGY0bDY4cXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"><a href="https://calendar.google.com/calendar/embed?src=NjFhNzVwZ3JoOWlxYm9vMnRiNGY0bDY4cXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">Click here to see my full teaching calendar</a></iframe>
`;

const CLASSES = `
<ul class="ClassTab">
  <li class="tab"><a class="link" ui-sref="classes.locations" ui-sref-active="active">Show Locations</a></li>
  <li class="tab"><a class="link" ui-sref="classes.calendar" ui-sref-active="active">Show Calender</a></li>
</ul>
<ui-view></ui-view>
`;

const OFFMAT = `
<p>
I usually get Googled for two reasons: Yoga or PaySimple, where I am the Director of Empowerment. A big part of my job at PaySimple is managing our hiring, so if you're doing some due diligence before an interview, great! Let me point you in the right direction:
</p>
<ul class="showList">
  <li><a href="http://paysimple.com/career_opportunities.html"> PaySimple Careers Page </a></li>
  <li><a href="https://www.youtube.com/channel/UC4J3iFVRUiFDmt9ulkfUvyw/videos"> PaySimple Jobs YouTube channel </a></li>
  <li>My <a href="https://www.linkedin.com/in/meltorgusen"> LinkedIn Profile </a></li>
  <li>Two short talks I gave on company <a href="https://www.youtube.com/watch?v=t8DsgNnjzMY"> culture </a> and <a href="https://vimeo.com/107314331">perks</a></li>
  <li>PaySimple\'s <a href="http://www.glassdoor.com/Overview/Working-at-PaySimple-EI_IE694120.11,20.htm">Glassdoor Reviews </a></li>
</ul>
`;

const ABOUT = `
<p>
Mel originally came to yoga as a complement to triathlon training and believes in moving meditation anywhere you can find it: in your running shoes, on the yoga mat, or at the barre.
</p>
<img class="inset" src="/img/insert.jpg" alt="">
<p>
Mel is a lively, dynamic teacher who tailors classes to the bodies in the room. Her goal is to keep you in safe alignment, make you laugh, and give you something to think about. Her higher education started at the University of Alabama and finished at UC Berkeley (that’s a long story), and as a teacher she has completed a 200 hour vinyasa training and a 60 hour barre training. Her goal is to create classes that resonate whether your primary goal is a deeper connection to extraordinary consciousness or more open hamstrings. Your call.
</p>
<p>
After growing up on the move in a military family, Mel  happily put down roots in Colorado in 2008. Outside of teaching, she works for a Denver software start up, never misses City Park Jazz, and lives with a dog, a man, and a cat.
</p>
`;

var app = angular.module('yogasite', ['ui.router'])
.config(function($stateProvider) {
  var homeState = {
    name: 'home',
    url: '/home',
    template: `<h3>Welcome to my yoga site!</h3>`
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: ABOUT
  }

  var classesState = {
    name: 'classes',
    url: '/classes',
    template: CLASSES
  }

  var locationsState = {
    name: 'classes.locations',
    parent: 'classes',
    url: '/locations',
    template: LOCATIONS
  }

  var calendarState = {
    name: 'classes.calendar',
    parent: 'classes',
    url: '/calendar',
    template: CALENDAR
  }

  var offTheMatState = {
    name: 'off-the-mat',
    url: '/off-the-mat',
    template: OFFMAT
  }

  var contactState = {
    name: 'contact',
    url: '/contact',
    template: CONTACT
  }

  $stateProvider.state(homeState);
  $stateProvider.state(aboutState);
  $stateProvider.state(classesState);
  $stateProvider.state(locationsState);
  $stateProvider.state(calendarState);
  $stateProvider.state(offTheMatState);
  $stateProvider.state(contactState);
});

