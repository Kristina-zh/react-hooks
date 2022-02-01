import {useState, useEffect} from 'react';
import MeetupList from "../components/meetups/MeetupList";

function AllMeetUpsPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-basic-798dc-default-rtdb.firebaseio.com/meetups.json')
    .then(responce => {
    return responce.json()
    })
    .then(data => {

      const meetups=[];

      for(const key in data) {
        const meetup = {
          id: key,
          ... data[key]
        };

        meetups.push(meetup)
      };

      setIsLoading(false);
      setLoadedMeetups(meetups)
    });
  }, []);
  
  if(isLoading) {
    return <section>
      <p>Loading</p>
    </section>
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList data={loadedMeetups}/>
    </section>
  );
}

export default AllMeetUpsPage;
