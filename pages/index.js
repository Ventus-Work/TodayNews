import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styled from 'styled-components';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Header = styled.header`
  background: url('https://media.istockphoto.com/id/813018646/ko/%EC%82%AC%EC%A7%84/%EC%83%88%EB%B2%BD%EC%97%90-%ED%95%B4%EB%B0%94%EB%9D%BC%EA%B8%B0.jpg?s=2048x2048&w=is&k=20&c=tyjIe5BoORxN5jHtCAQZEe4sDuSKqX3SVnnZPMYZr2U=') no-repeat center center;
  background-size: cover;
  color: white;
  padding: 60px 20px;
`;

const FeaturedPosts = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const PostCard = styled.div`
  width: 300px;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const PostImage = styled.img`
  width: 100%;
`;

const PostContent = styled.div`
  padding: 10px;
`;

const RecentPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const RecentPostCard = styled(PostCard)`
  width: 200px;
  margin: 10px;
`;

export default function Home() {
  return (
    <Container>
      <Header>
        <h1>Let's do it together.</h1>
        <p>We travel the world in search of stories. Come along for the ride.</p>
        <button>View Latest Posts</button>
      </Header>
      <h2>Featured Posts</h2>
      <FeaturedPosts>
        <PostCard>
          <PostImage src="https://via.placeholder.com/300x200" alt="The Road Ahead" />
          <PostContent>
            <h3>The Road Ahead</h3>
            <p>By Matt Vogels</p>
            <p>September 26, 2019</p>
          </PostContent>
        </PostCard>
        <PostCard>
          <PostImage src="https://via.placeholder.com/300x200" alt="From Top Down" />
          <PostContent>
            <h3>From Top Down</h3>
            <p>By William Wong</p>
            <p>September 25, 2019</p>
          </PostContent>
        </PostCard>
      </FeaturedPosts>
      <h2>Most Recent</h2>
      <RecentPosts>
        <RecentPostCard>
          <PostImage src="https://via.placeholder.com/200x150" alt="Still Standing Tall" />
          <PostContent>
            <h4>Still Standing Tall</h4>
            <p>By William Wong</p>
            <p>September 25, 2019</p>
          </PostContent>
        </RecentPostCard>
        <RecentPostCard>
          <PostImage src="https://via.placeholder.com/200x150" alt="Sunny Side Up" />
          <PostContent>
            <h4>Sunny Side Up</h4>
            <p>By Matt Vogels</p>
            <p>September 25, 2019</p>
          </PostContent>
        </RecentPostCard>
        <RecentPostCard>
          <PostImage src="https://via.placeholder.com/200x150" alt="Water Falls" />
          <PostContent>
            <h4>Water Falls</h4>
            <p>By William Wong</p>
            <p>September 25, 2019</p>
          </PostContent>
        </RecentPostCard>
        <RecentPostCard>
          <PostImage src="https://via.placeholder.com/200x150" alt="Through the Mist" />
          <PostContent>
            <h4>Through the Mist</h4>
            <p>By William Wong</p>
            <p>September 25, 2019</p>
          </PostContent>
        </RecentPostCard>
        <RecentPostCard>
          <PostImage src="https://via.placeholder.com/200x150" alt="Awaken Early" />
          <PostContent>
            <h4>Awaken Early</h4>
            <p>By Matt Vogels</p>
            <p>September 25, 2019</p>
          </PostContent>
        </RecentPostCard>
        <RecentPostCard>
          <PostImage src="https://via.placeholder.com/200x150" alt="Try it Always" />
          <PostContent>
            <h4>Try it Always</h4>
            <p>By William Wong</p>
            <p>September 25, 2019</p>
          </PostContent>
        </RecentPostCard>
      </RecentPosts>
    </Container>
  );
}
