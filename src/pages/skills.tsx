import Navbar1 from '@/components/NavBar1'
import { Skills } from '@/components/Skills'
import ISkills from '@/interfaces/Skills'
import styles from '../styles/Skills.module.css'
import React from 'react'

type Props = {
  data: ISkills[]
}

const page = ({ data }:Props) => {
  return (
    <div>
      <Navbar1/>
      <section className={`${styles.compet}`}>
        <div className={`${styles.compet__hab}`}>
          <Skills data={data} />
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:3000/api/skills")
    const data = await res.json()
    return {
      props: { data }
    }
  } catch (error) {
    console.log(error)
    return {
      props: { data: null }
    }
  }
}

export default page