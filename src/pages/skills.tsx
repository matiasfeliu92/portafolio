import Navbar1 from "@/components/NavBar1";
import ISkills from "@/interfaces/Skills";
import styles from "../styles/Skills.module.css";
import React from "react";

type Props = {
  data: ISkills[];
};

const page = ({ data }: Props) => {
  return (
    <div>
      <Navbar1 />
      <section className={`${styles.compet}`}>
        <div className={`${styles.compet__hab}`}>
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
              <h4 style={{ fontSize: "20px" }} className="text-center">
                {skill.name}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.REACT_APP_URL}/api/skills`);
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { data: null },
    };
  }
}

export default page;
