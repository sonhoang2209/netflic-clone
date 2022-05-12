import { CheckIcon } from '@heroicons/react/outline'
import { Product } from '@stripe/firestore-stripe-payments'
import Head from 'next/head'
import { useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { loadCheckout } from '../../../lib/stripe'
import Loader from '../../atoms/loader'
import Header from '../header/Header'
import Table from '../table/Table'

interface props {
  products: Product[]
}

function Plans({ products }: props) {
  const { user } = useAuth()
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[0])
  const [isBillingLoading, setBillingLoading] = useState(false)
  const subscribeToPlan = () => {
    if (!user) return

    loadCheckout(selectedPlan?.prices[0].id!)
    setBillingLoading(true)
  }
  return (
    <div>
      <Head>
        <title>Plans - Netfilx</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menuHiden />
      <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">Choose the plan that`s right for you</h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want. Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel your plan anytime.
          </li>
        </ul>
        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-end self-end md:w-3/5">
            {products.map(product => (
              <div
                className={`planBox ${
                  selectedPlan?.id === product.id ? 'opacity-100' : 'opacity-60'
                }`}
                key={product.id}
                onClick={() => setSelectedPlan(product)}
              >
                {product.name}
              </div>
            ))}
          </div>
          <Table products={products} selectedPlan={selectedPlan} />
          <button
            disabled={!selectedPlan || isBillingLoading}
            className={`mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] ${
              isBillingLoading && 'opacity-60'
            }`}
            onClick={subscribeToPlan}
          >
            {isBillingLoading ? <Loader color="dark:fill-gray-300" /> : 'Subscribe'}
          </button>
        </div>
      </main>
    </div>
  )
}

export default Plans
