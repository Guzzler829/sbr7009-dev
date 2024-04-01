/*

Add:
- Contact page with mailjet API
- link to all music downloads
- blog section with 

*/

import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className='container'>
        <nav>
          <h1>SBR7009</h1>
        </nav>
        <h2 id="newest">Newest Release</h2>
        <div className='music-section'>
          <iframe title='ThisWasntSupposed' style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/album/1P7iGJYpuQQBwMpVZMwbFy?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <h2>Cat Dog Bear</h2>
        <div className='music-section'>
          <iframe title='CatvsDogvsBear' style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/album/7HPqhJ0y1Kqrkyxi7KtAmi?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe title='BackToBasics' style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/album/4CtxgSj6UehGUpy0HK2ATR?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe title='PS' style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/album/3BGb4o5C6e6ujmhSkdrSPE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          {/* <iframe title="ICanOnlyFakeMusic" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/album/4oEtPyNswTj5doGwJblDJn?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
        </div>
        <h2>SoundCloud links</h2>
        <div className='soundcloud'>
          <a className='soundcloud-links' href='https://soundcloud.com/user-851904588?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'>Cat Dog Bear SoundCloud page</a>
          <a className='soundcloud-links' href='https://soundcloud.com/user-851904588?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'>Sued By Ramen SoundCloud page</a>
        </div>
      </div>
      <footer>
        <div id='footer-text'>Site made by <a href='https://github.com/Guzzler829'>Guzzler829</a>, 2023-2024</div>
      </footer>
      {/* Add later: apple music and amazon links */}
    </div>
  );
}

export default App;
