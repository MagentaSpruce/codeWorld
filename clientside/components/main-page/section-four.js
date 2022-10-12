import styles from './section-four.module.css';
import revealSections from '@helpers/reveal-sections';
import Link from 'next/link';
import Image from 'next/image';
import sectionPic from '../../public/images/main-img-1.webp';
import sectionPic2 from '../../public/images/cw1.png';

function SectionFour() {
  revealSections();
  return (
    <div
      className="grid text-center section
    xxxs:grid-cols-1 
    md:grid-cols-2"
    >
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <figure>
            <Image
              src={sectionPic}
              alt="A Code World student coding on her laptop"
            />
          </figure>
        </div>
      </div>
      <div
        className=" px-10 font-poppins
      md:pt-20"
      >
        <span
          className="bg-blue-200 rounded-xl px-2 py-1 opacity-70 text-sky-600 text-sm 
        md:mr-[18.5rem] "
        >
          AGES 9 TO 15
        </span>
        <h2
          className="font-poppins font-extrabold mt-4 tracking-tight
        xxxs:text-2xl
        md:text-4xl"
        >
          FROM BEGINNER TO <span className="text-blue-600">EXPERT</span>
        </h2>
        <p
          className=" mx-auto text-lg
        md:w-[80%]"
        >
          Our curriculum is guaranteed to take your child from novice to wizard
          utilizing the latest technologies and methods. Your child will learn
          all of the skills required to create their own online based
          businesses, find high-paying professional opportunities right out of
          high school, or else secure easy recruitment into highly favorable
          university computer science programs and research opportunities.
        </p>
        <Link href="/about">
          <button className="px-4 py-2 text-2xl bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 hover:scale-105 transition-all .3 linear active:bg-blue-600 active:scale-100">
            Learn More &rarr;
          </button>
        </Link>

        <figure className="xxxs:mt-10 md:hidden">
          <Image
            src={sectionPic2}
            alt="Code World student holding open laptop"
          />
        </figure>
      </div>
    </div>
  );
}

export default SectionFour;
