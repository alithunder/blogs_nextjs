import { Container } from "../componets/container/container";
import Header from "../componets/header/header";
import styles from "./page.module.css"
import { format } from 'date-fns';
import Image from "next/image";
import Footer from "../componets/footer/footer";
const { convert } = require('html-to-text');
export default async function Page({ params }) {
  const response = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts');
  const data = await response.json();

  const selectedBlog = data.blogs.find(blog => blog.id === parseInt(params.id));

  return (
    <div>
      <Header />
      <br />
      {selectedBlog ? (
        <>
        <Container>
        <h1>{selectedBlog.title}</h1>
        <div className={styles.cata}>
        <p className={styles.by}>{selectedBlog.category}</p>
        <p className={styles.by}>{format(new Date(selectedBlog.created_at), 'MMMM dd,yyyy')}</p>
        </div>
        <Image className={styles.img} src={selectedBlog.photo_url} alt="Blog Image" width={1000} height={220} />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: selectedBlog.content_html }}
        ></div>
        </Container>
        <Footer/>
        </>
      ) : (
        <p>Blog post not found</p>
      )}
    </div>
  );
}
