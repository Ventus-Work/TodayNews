import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbzDdwoNsdXoDbL7WwmNYnSWppRa1UxeEtcHLRLV-lhPOqz9DUqGSWA-mPtauS0Nri5hXA/exec')
      .then(response => response.json())
      .then(data => {
        setPosts(data.data);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const showNewsDetail = (post) => {
    Swal.fire({
      title: `<div class="news-popup-header">
                <span class="news-popup-category">${post.카테고리}</span>
                <span class="news-popup-date">${new Date(post.날짜).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                }).replace(/\./g, '').split(' ').join('.')}</span>
              </div>`,
      html: `
        <div class="news-popup-content">
          <div class="news-popup-emoji">${post.이모지}</div>
          <h2 class="news-popup-title">${post.제목}</h2>
          <p class="news-popup-text">${post.내용}</p>
          <a href="${post.출처}" target="_blank" class="news-popup-source">원문 보기</a>
        </div>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      width: '600px',
      customClass: {
        popup: 'news-popup',
        closeButton: 'news-popup-close'
      }
    });
  };

  return (
    <>
      <Head>
        <title>Today News</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <h2 className="section-title">주요 뉴스</h2>

      <div className="featured-posts">
        {posts.slice(0, 2).map((post, index) => (
          <div 
            key={index} 
            className="featured-post news-card"
            onClick={() => showNewsDetail(post)}
          >
            <div className="card-content">
              <span className="news-category">{post.카테고리}</span>
              <span className="news-date">
                {new Date(post.날짜).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                }).replace(/\./g, '').split(' ').join('.')}
              </span>
              <div className="news-emoji">{post.이모지}</div>
              <h3 className="news-title">{post.제목}</h3>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">최신 뉴스</h2>

      <div className="recent-posts">
        {posts.slice(2).map((post, index) => (
          <div 
            key={index} 
            className="recent-post news-card"
            onClick={() => showNewsDetail(post)}
          >
            <div className="card-content">
              <span className="news-category">{post.카테고리}</span>
              <span className="news-date">
                {new Date(post.날짜).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                }).replace(/\./g, '').split(' ').join('.')}
              </span>
              <div className="news-emoji">{post.이모지}</div>
              <h3 className="news-title">{post.제목}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}