import React from 'react'
import categories from 'data/categories'
import favoriteCategories from 'data/favorite-categories'
import Title from 'components/Title'
import ScrollContainer from 'react-indiana-drag-scroll'


function Category({category}) {
  return (
    <>
    <div className='rounded-md before:pt-[100%] before:block relative' style={{ 'background':category.color}}>

      <div className='absolute inset-0 overflow-hidden'>

      <h3 className='p-4 text-2xl tracking-tighter font-semibold'>
             {category.title}
      </h3>
      <img src={category.cover} className="shadow-spotify w-[6rem] rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0" alt="" />
      </div>
    </div>
    </>
  )
}

function WideCategory({category}) {
  return (
    <>
    <div className='rounded-lg relative w-[27rem] h-[13rem] flex-shrink-0 ' style={{ 'background':category.color}}>
      <div className='absolute inset-0 overflow-hidden'>
      <h3 className='p-4 text-[2.5rem] tracking-tighter font-semibold'>
             {category.title}
      </h3>
      <img src={category.cover} className="shadow-spotify w-32 h-32 rotate-[25deg] 
      translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0" alt="" />
      </div>
    </div>
    </>
  )
}






export default function Search() {
  return (
    <>

    <section className='mb-4'>
      <Title title="En çok dinlediğin türler " />
      <ScrollContainer className='flex overflow-x gap-x-6'>
        {favoriteCategories.map(category => <WideCategory category={category} />)}
    </ScrollContainer>

    </section>

    <section>
      <Title title="Hepsine göz at" />
        <div className='grid grid-cols-5 gap-6'>
        {categories.map(category => <Category category={category} />)}
      </div>
    </section>


    </>
  )
}
