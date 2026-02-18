import React from 'react'
import SectionTitle from '../components/molecules/SectionTitle.jsx'
import CoursesFilter from '../components/organisms/CoursesFilter.jsx'
import CoursesGrid from '../components/organisms/CoursesGrid.jsx'
import courses from '../data/courses.js'
import { useLocation } from 'react-router'
import SearchBar from '../components/molecules/SearchBar.jsx'
import Sorter from '../components/molecules/Sorter.jsx'

function Kategori() {
  const location = useLocation();

  return (
    <main className='py-16'>
      <div className='max-w-[75rem] flex mx-auto px-5 flex-col gap-9'>
        <SectionTitle
          heading="3"
          type="contents"
          fontSize="text-3xl"
          title="Koleksi Video Pembelajaran Unggulan"
          descFontWeight="normal"
          desc="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
        />
        <div className='flex flex-col md:flex-row gap-6 md:gap-10'>
          <CoursesFilter />
          <div className='flex flex-col gap-6 md:gap-8'>
            <div className='flex gap-4 justify-end'>
              <Sorter />
              <SearchBar />
            </div>
            <CoursesGrid courses={courses} location={location.pathname} />
          </div>
        </div>
      </div>
    </main>

  )
}

export default Kategori