import styles from './section-two.module.css';
import revealSections from '@helpers/reveal-sections';
import Image from 'next/image';
import sectionImage from '../../public/images/aboutimg5.jpg';

function SectionEight() {
  revealSections();
  return (
    <div
      className="grid text-center section
    xxxs:grid-cols-1
    md:grid-cols-2
    2xl:w-[75%] 2xl:mx-auto"
    >
      <div
        className="
      xxxs:pt-4
      md:pt-3 md:px-0
      lg:pt-8 lg:px-10
      xl:pt-10
      2xl:pt-16"
      >
        <h2 className="font-poppins font-extrabold mt-4 tracking-tight">
          <span className="text-blue-600">BUILDING</span> STRONG COMMUNITIES
        </h2>
        <p
          className="text-lg mx-auto
        xxxs:w-[90%]
        md:w-[70%]
        lg:w-[90%]
        xl:w-[70%]
        2xl:w-[90%]"
        >
          We pride ourselves in partnering with local schools to boost STEM
          education in communities across Bali through our Code World after
          school coding program.
        </p>
        <p
          className="text-lg mx-auto
        xxxs:w-[90%] xxxs:-mb-2
        md:w-[70%]
        lg:w-[90%]
        xl:w-[70%] md:-mb-0
        2xl:w-[90%]"
        >
          For our students, Code World Bali offers the invaluable opportunity of
          a meaningful career path that positively impacts their lives and
          communities.
        </p>
      </div>
      <div className={styles.wrapper}>
        <div>
          <figure>
            <Image
              className="rounded-lg"
              src={sectionImage}
              alt="Code world students"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SectionEight;
