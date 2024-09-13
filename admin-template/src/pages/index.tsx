import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/template/Layout'

export default function Home() {
  return (
    <Layout titulo="Página Inicial" subtitulo="Estamos construindo um template admin!">
      <h3>Conteúdo!!!!</h3>
    </Layout>
  )
}
