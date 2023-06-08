import ISkills from '@/interfaces/Skills'
import React from 'react'

type Props = {
  data: ISkills[]
}

export const Skills = ({data}: Props) => {
  return (
    <>
      {data.map((skill: ISkills) => (
        <div
          className="compet__habText col-md-2 text-center flex-column justify-content-between"
          key={skill.name}
        >
          <img
            width={"85vw"}
            height={"auto"}
            src={skill.imageUrl}
            alt={skill.name}
          />
          <h4 style={{fontSize: '20px'}} className="text-center">{skill.name}</h4>
        </div>
      ))}
    </>
  );
}

// export async function getStaticProps() {
//   try {
//     const res = await fetch("http://localhost:3000/api/skills")
//     const data = await res.json()
//     return {
//       props: { data }
//     }
//   } catch (error) {
//     console.log(error)
//     return {
//       props: { data: null }
//     }
//   }
// }