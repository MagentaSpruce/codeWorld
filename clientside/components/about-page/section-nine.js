import styles from './section-nine.module.css';
import revealSections from '@helpers/reveal-sections';
import Link from 'next/link';
function SectionNine() {
  revealSections();
  return (
    <div
      className="relative overflow-hidden section md:w-[120%]
    lg:w-[100%]"
    >
      <div className={`${styles.img_div} flex flex-col`}>
        <h2
          className="  text-white relative font-extrabold tracking-tight
        xxxs:text-center
        xs:w-[95%]
        small:w-[95%]
        md:w-[90%] md:text-5xl
        2xl:mb-8"
        >
          JOIN CODE WORLD BALI'S AFTER SCHOOL CODING PROGRAM TODAY!
        </h2>
        <p
          className="relative text-slate-100 text-xl
        xxxs:text-center
        xs:w-[90%]
        md:w-[100%]
        2xl:mb-8"
        >
          Unlock your childs path to a brighter future!
        </p>
        <Link href="/courses">
          <button className="px-4 py-4 cursor-pointer bg-emerald-400 rounded-lg font-bold  text-white text-xl relative transition-all .3 linear hover:bg-emerald-500 hover:scale-105 active:bg-emerald-600 active:scale-100">
            ENROLL NOW
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SectionNine;
