import React, {useState, useEffect} from 'react';
import Pages from './pages'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/mutebironald'
    )
      .then(res => 
        res.json()
      )
      .then( user  => {
        console.log(user, "+++")
        return setUser(user)
      })
  }, []);

  if(!user){
    return <div />
  }
  return <Pages user={user} />
}

export default App;

