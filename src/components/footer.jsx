import { BiEnvelope } from 'react-icons/bi';

function Footer() {
  return (
    <div className='flex flex-col items-center gap-20 sm:gap-10 px-5 py-20 sm:p-5 sm:pb-12 sm:mx-48'>
      <p className='text-center text-sm'>
        By staying true to its core values through the years, Constructive
        Solutions has evolved into one of the strongest and most respected
        construction companies in the Bay Area building some of the most iconic
        stuctures in Western California through great partnerships and lasting
        relationships.
      </p>

      <button className='flex justify-center items-center gap-5 bg-yellow-500 w-48 hover:bg-yellow-600 text-black p-4 font-bold'>
        <BiEnvelope size={18} />
        CONTACT US
      </button>
    </div>
  );
}

export default Footer;
