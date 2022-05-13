import { getProducts, Product } from '@stripe/firestore-stripe-payments'
import { GetStaticProps } from 'next'
import React from 'react'
import Account from '../components/template/account/Account'
import payments from '../lib/stripe'

interface Props {
  products: Product[]
}

function account({ products }: Props) {
  return (
    <div>
      <Account products={products} />
    </div>
  )
}

export default account

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true
  })
    .then(res => res)
    .catch(error => console.log(error.message))

  return {
    props: {
      products
    }
  }
}
