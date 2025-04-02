import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Escape - Travel Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="header" style={{ backgroundImage: "url('/hero-forest.png')" }}>
        <div className="overlay">
          <nav>
            <div className="logo">Escape.</div>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/categories">Categories</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className="hero-text">
            <h1>Let's do it together.</h1>
            <p className="subheading">We travel the world in search of stories. Come along for the ride.</p>
            <Link href="/latest-posts" className="cta-button">View Latest Posts</Link>
          </div>
        </div>
      </header>

      <div className="categories">
        <Link href="/category/nature" className="category">Nature</Link>
        <Link href="/category/photography" className="category">Photography</Link>
        <Link href="/category/relaxation" className="category">Relaxation</Link>
        <Link href="/category/vacation" className="category">Vacation</Link>
        <Link href="/category/travel" className="category">Travel</Link>
        <Link href="/category/adventure" className="category">Adventure</Link>
      </div>

      <h2 className="section-title">Featured Posts</h2>

      <div className="featured-posts">
        <div className="featured-post">
          <div className="post-image" style={{ backgroundImage: "url('https://source.unsplash.com/random/600x400/?photography')" }}>
            <div className="post-category photography">Photography</div>
          </div>
          <div className="post-content">
            <h3 className="post-title">The Road Ahead</h3>
            <p className="post-excerpt">The road ahead might be painful - it might not be.</p>
            <div className="post-meta">
              <div className="author-image" style={{ backgroundImage: "url('https://i.pravatar.cc/50')" }}></div>
              <span className="author-name">Matt Vogels</span>
              <span className="post-date">September 25, 2023</span>
            </div>
          </div>
        </div>

        <div className="featured-post">
          <div className="post-image" style={{ backgroundImage: "url('https://source.unsplash.com/random/600x400/?adventure')" }}>
            <div className="post-category adventure">Adventure</div>
          </div>
          <div className="post-content">
            <h3 className="post-title">From Top Down</h3>
            <p className="post-excerpt">Once a year, go someplace you've never been before.</p>
            <div className="post-meta">
              <div className="author-image" style={{ backgroundImage: "url('https://i.pravatar.cc/50')" }}></div>
              <span className="author-name">William Wong</span>
              <span className="post-date">September 25, 2023</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="section-title">Most Recent</h2>

      <div className="recent-posts">
        {[
          {
            category: 'vacation',
            title: 'Still Standing Tall',
            excerpt: 'Life begins at the end of your comfort zone.',
            author: 'William Wong',
            date: '9-25-2023'
          },
          {
            category: 'photography',
            title: 'Sunny Side Up',
            excerpt: "No place is ever as bad as they tell you it's going to be.",
            author: 'Matt Vogels',
            date: '9-25-2023'
          },
          {
            category: 'relaxation',
            title: 'Water Falls',
            excerpt: 'We travel not to escape life, but for life not to escape us.',
            author: 'Matt Vogels',
            date: '9-25-2023'
          },
          {
            category: 'vacation',
            title: 'Through the Mist',
            excerpt: 'Travel makes you see what a tiny place you occupy in the world.',
            author: 'William Wong',
            date: '9-25-2023'
          },
          {
            category: 'photography',
            title: 'Awaken Early',
            excerpt: 'Not all those who wander are lost.',
            author: 'Matt Vogels',
            date: '9-25-2023'
          },
          {
            category: 'travel',
            title: 'Try It Always',
            excerpt: 'The world is a book, and those who do not travel read only one page.',
            author: 'Matt Vogels',
            date: '9-25-2023'
          }
        ].map((post, index) => (
          <div key={index} className="recent-post">
            <div className="recent-image" style={{ backgroundImage: "url('https://source.unsplash.com/random/400x300/?" + post.category + "')" }}>
              <div className={`post-category ${post.category}`}>{post.category}</div>
            </div>
            <div className="post-content">
              <h3 className="recent-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-meta">
                <div className="author-image" style={{ backgroundImage: "url('https://i.pravatar.cc/50')" }}></div>
                <span className="author-name">{post.author}</span>
                <span className="post-date">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}