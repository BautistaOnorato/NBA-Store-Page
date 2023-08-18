import Gallery from '@/components/Gallery'
import ProductInfo from '@/components/ProductInfo'
import ProductList from '@/components/ProductList'
import { getProduct, getProducts } from '@/service/products'
import React from 'react'

interface ProductPageProps {
  params: {
    productId: string
  }
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId)

  const suggestedByCategory = await getProducts({
    categoryId: product?.category?.id
  })

  const formattedByCategory = suggestedByCategory?.filter(item => item.id !== params.productId);
  
  const suggestedByTeam = await getProducts({
    teamId: product?.team?.id
  })

  const formattedByTeam = suggestedByTeam?.filter(item => item.id !== params.productId);

  return (
    <div className='flex flex-col items-center p-4'>
      <div className='px-4 py-10 sm:px-6 lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
          <section>
            <Gallery images={product?.images} />
          </section>
          <section>
            <ProductInfo product={product} />
          </section>
        </div>
      </div>
      <hr />
      {
        formattedByCategory.length !== 0 && (
          <section className='mt-10 w-[90%] hidden sm:w-full sm:block'>
            <ProductList title={`More ${product.category.name}`} items={formattedByCategory} />
          </section>
        )
      }
      {
        formattedByTeam.length !== 0 && (
          <section className='mt-5 w-[90%] hidden sm:w-full sm:block'>
            <ProductList title={`More from ${product.team.name}`} items={formattedByTeam} />
          </section>
        )
      }
    </div>
  )
}

export default ProductPage