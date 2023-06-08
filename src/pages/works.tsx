import Navbar1 from '@/components/NavBar1'
import { Works } from '@/components/Works'
import IWorks from '@/interfaces/Works'
import React from 'react'
import styles from '../styles/Works.module.css'

type Props = {
  data: IWorks[]
}

const works = ({data}: Props) => {
  console.log(data)
  return (
    <div>
      <Navbar1/>
      <div className="trabajos">
        <div className="trabajos__work">
          <Works data={data}/>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.REACT_APP_URL}/api/works`)
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

export default works