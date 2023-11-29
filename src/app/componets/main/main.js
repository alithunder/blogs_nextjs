'use client'
import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import { Container } from '../container/container';
import styles from './main.module.css';

const Main = () => {
  const [blogs, setBlogs] = useState([]);


  async function fetchBlogs() {
    try {
      const response = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts');
      const data = await response.json();
      setBlogs(data.blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);
  console.log(blogs)
  return (
    <div>
      <div className={styles.topimg}>
        <Container>
          <div className={styles.textali}>
            <h2 className={styles.font}>Simple Blog.</h2>
            <p className={styles.font1}>A blog created by Aon 2023</p>
          </div>
        </Container>
      </div>
      <Container>
      <div className={styles.cards}>
      {blogs && blogs.map((blog) => <Card className={styles.ww} key={blog.id} data={blog} /> )}
      </div>
      </Container>

    </div>
  );
};

export default Main;
