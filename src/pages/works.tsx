import Navbar1 from "@/components/NavBar1";
import IWorks from "@/interfaces/Works";
import React from "react";
import styles from "../styles/Works.module.css";
import Link from "next/link";

type Props = {
  data: IWorks[];
};

const works = ({ data }: Props) => {
  console.log(data);
  return (
    <div>
      <Navbar1 />
      <div className="trabajos">
        <div className="trabajos__work">
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
                <Link href={work.link_git}>Link al GitHub</Link>
                <Link href={work.link_web}>Link a la app</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.REACT_APP_URL}/api/works`);
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

export default works;
