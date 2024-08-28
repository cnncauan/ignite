import { Header } from './components/Headers';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

import { Sidebar } from './components/Siderbar';


import ImgName from "./assets/nino.jpeg";

const posts = [ 
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/cnncauan.png',
      name: 'Marcos Cauan',
      role: 'Desenvolvedor Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-08-20 14:09:00'),
  },
  {
    id: 2,
    author: {
      // avatarUrl: 'https://github.com/maykbrito.png',
      avatarUrl: ImgName,
      name: 'Francisco Nino',
      role: 'Youtube'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-08-20 14:09:00'),
  },
];


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

                key={post.id}
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

