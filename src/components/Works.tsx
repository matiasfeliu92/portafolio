import IWorks from '@/interfaces/Works'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Works.module.css'

type Props = {
  data: IWorks[]
}

export const Works = ({ data }: Props) => {
  return (
    <>
      {data.map((work: IWorks) => {
        return (
          <div className="trabajos__webs" key={work.name}>
            <h4 className="text-center">{work.name}</h4>
            <p className="text-center">{work.description}</p>
            <p className="text-center">{work.description_tech}</p>
            <img
              className="trabajos__img"
              src={work.image}
              alt={work.name}
            />
            <Link href={work.link_git}>
                Link al GitHub
            </Link>
            <Link href={work.link_web}>
              Link a la app
            </Link>
          </div>
        )
      })}
    </>
  )
}
