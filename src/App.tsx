import React from 'react';
//import logo from './logo.svg';
import PlacesEntry from './PlacesEntry';
import './App.css';

function App(): JSX.Element {
  return (
    <main>
    <header>
      <h1> My fave places</h1>
    </header>
      <section> 
        <PlacesEntry
        place = {"Oxford Street"}
        picture = {"https://upload.wikimedia.org/wikipedia/commons/4/48/Oxford_Street_%28geograph_4949395%29.jpg"}
        country = {"London, England "}
        map ={"https://www.google.com/maps/place/Oxford+St,+London/@51.5152543,-0.1442282,17z/data=!3m1!4b1!4m5!3m4!1s0x48761ad554c335c1:0xda2164b934c67c1a!8m2!3d51.5152543!4d-0.1420395"
      }
       desc = {" There are lots of shops, and I like shopping"}
       />
       </section>
       <section> 
       <PlacesEntry
        place = {"Bondi Beach "}
        picture = {"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Bondi_from_above.jpg/1280px-Bondi_from_above.jpg"}
        country = {" Sydney, New South Wales, Australia"}
        map ={"https://www.google.com/maps/place/Bondi+Beach/@-33.8923671,151.2737011,16z/data=!3m1!4b1!4m5!3m4!1s0x6b12ad9c447281c7:0x20c31809c62de978!8m2!3d-33.8914755!4d151.2766845?hl=en"}
       desc = {"I love the beach and the Aussie accent !"}
       />
       </section>
       <section>
       <PlacesEntry
        place = {"Mykonos "}
        picture = {"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Little_Venice%2C_Mykonos.JPG/300px-Little_Venice%2C_Mykonos.JPG"}
        country = {"Greece"}
        map ={"https://www.google.com/maps/place/Mykonos,+Mikonos,+Greece/@37.4335963,25.1082281,10z/data=!3m1!4b1!4m5!3m4!1s0x14a2b8d058302c45:0x400bd2ce2b9c780!8m2!3d37.4467354!4d25.3288845n"}
       desc = {"I love the warm weather and greek food is so tasty!"}
       />
       </section>
       <section>
       <PlacesEntry
        place = {"San Francisco "}
        picture = {"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg/1280px-San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg"}
        country = {"California, USA"}
        map ={"https://www.google.com/maps/place/San+Francisco,+CA,+USA/@37.7576171,-122.5776844,11z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155"}
       desc = {"I have never actually been! But really want to go"}
       />
       </section>
      </main>
  );
}
export default App
