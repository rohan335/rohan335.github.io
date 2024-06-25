import React from 'react';

const App = () => {
  document.body.style = 'background: #F7F6F2;';
  return (
    <div style={{backgroundColor: '#F7F6F2', height: '100vh', width: '100vw'}}>
      <img style={window.innerWidth <= 768 ? {display: 'flex', width: '100%', height: 50} : {display: 'flex', width: '100%'}} src={require('./take3.png')}></img>

      <div style={{display: 'flex', width: '100%', flexDirection: window.innerWidth <= 768 ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center'}}>

      <div style={{width: window.innerWidth <= 768 ? '90%' : '60%', marginLeft: '3%'}}>
        <p style={{fontFamily: 'inter', fontWeight: '500', fontSize: 30}}>hey there, 👋</p>
        <p style={{fontFamily: 'inter', fontWeight: '400', fontSize: 18}}>
          I'm Rohan Desai, and I'm currently studying CS + Math @ Harvey Mudd College.
          <br/>
          <br/>
          I'm also Managing Partner @ Crescent Fund, a student-led venture capital syndicate where we're working to back SoCal's biggest dreamers at the earliest stages of their journeys. Whether you're raising or not, I'd love to chat about what you're working on!
          <br/>
          <br/>
          I've been a fintech founder too, introducing equity into the creative space— for creatives and fans, alike. I'm taking time to try something new right now, and I've been exploring all things fintech, creative tech, SaaS, and AI. I'm also a contributor at Unicorner and a Platforms Intern at Cair Health (YC W24).
          <br/>
          <br/>
          When I'm not at my desk, I'm probably bouldering, doing stand up comedy, or traveling!
          <br/>
          <br/>
          Check out my links below, or shoot me an email at rohandesai335@gmail.com to chat— I'd love to learn about what you're building or just grab coffee :)
        </p>

        <div style={styles.links}>
          <a href="https://www.linkedin.com/in/rohan335" target="_blank" rel="noopener noreferrer" style={styles.link}>LINKEDIN</a>
          <a href="https://x.com/imrohan335" target="_blank" rel="noopener noreferrer" style={styles.link}>TWITTER</a>
          <a href="https://www.instagram.com/imrohan335/" target="_blank" rel="noopener noreferrer" style={styles.link}>INSTAGRAM</a>
          <a href="mailto:rohandesai335@mgail.com" target="_blank" rel="noopener noreferrer" style={styles.link}>EMAIL</a>
          <a href="https://rohan335.medium.com/" target="_blank" rel="noopener noreferrer" style={styles.link}>MEDIUM</a>
          <a href="https://github.com/rohan335" target="_blank" rel="noopener noreferrer" style={styles.link}>GITHUB</a>
          <a href="https://www.unicorner.news" target="_blank" rel="noopener noreferrer" style={styles.link}>UNICORNER</a>
          <a href="https://www.crescentfund.vc" target="_blank" rel="noopener noreferrer" style={styles.link}>CRESCENT</a>
        </div>

      </div>

      {
        window.innerWidth <= 768
        ?
        <div style={{marginTop: 30}}></div>
        :
        <div/>
      }

      <div style={{backgroundColor: '#fff', alignSelf: 'center', width: 280, marginTop: 30, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <img
          src={require('./nycpfp.jpeg')}
          alt="Rohan Desai"
          style={{width: 250, marginTop: 15}}
        />
        <p style={{fontFamily: 'rock salt'}}>Brooklyn, NY {'\u00A0'} 3/14/24</p>
      </div>

      {
        window.innerWidth <= 768
        ?
        <div style={{marginTop: 100}}></div>
        :
        <div/>
      }
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    width: '100%',
    height: '200px',
  },
  introduction: {
    padding: '20px',
    textAlign: 'left',
  },
  greeting: {
    fontSize: '24px',
  },
  introText: {
    fontSize: '16px',
    margin: '10px 0',
  },
  profileImageContainer: {
    textAlign: 'center',
    margin: '20px',
  },
  profileCaption: {
    fontSize: '14px',
    marginTop: '10px',
  },
  links: {
    textAlign: 'center',
    display: 'grid',
    width: '100%',
    gridGap: '20px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    width: '100%',
    marginTop: 60,
    marginLeft: '-3%'
  },
  link: {
    margin: '0 10px',
    color: '#0073e6',
    textDecoration: 'none',
    fontFamily: 'Courier Prime, monospace',
    fontSize: 18
  },
};

export default App;
