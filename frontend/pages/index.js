import Head from 'next/head'
import Image from 'next/image'
import Format from '../layout/format';

// compoenents
import Hero from '../components/hero';
import Posts from '../components/posts';
import MostPopular from '../components/mostPopular';


export default function Home() {
  return (
   <Format>
      <Hero></Hero>
      <Posts></Posts>
      <MostPopular></MostPopular>
   </Format>
  )
}
