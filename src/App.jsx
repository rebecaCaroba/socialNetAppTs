import { Header } from "./Components/Header";
import './global.css';
import styles from "./App.module.css"
import { Sidebar } from "./Components/Sidebar";
import { Post } from "./Components/Post";

const posts = [
  {
    Id: 1,
    author : {
      avatarUrl: "https://github.com/rebecacaroba.png", 
      name: "Rebeca Caroba",
      role: "CTO @Netflix",
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋',},
      { type: 'paragraph', content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate inventore explicabo incidunt! Temporibus fugit maxime deleniti facere quidem.'},
      { type: 'link', content:'jane.design/doctorcare'},
    ], 
    publishedAt: new Date('2023-08-08 08:40:30'),
  },
  {
    Id: 2,
    author : {
      avatarUrl: "https://github.com/pedrosouz6.png", 
      name: "Pedro Souza",
      role: "CTO @Google",
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋',},
      { type: 'paragraph', content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate inventore explicabo incidunt! Temporibus fugit maxime deleniti facere quidem.'},
      { type: 'link', content:'jane.design/doctorcare'},
    ], 
    publishedAt: new Date('2023-08-06 08:40:30'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.Id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}


