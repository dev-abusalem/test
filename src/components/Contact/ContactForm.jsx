'use client'

import { useState } from 'react'
import { Button } from '../Button'
import { sendMailContactForm } from '@/app/service/mails'
import { useRouter } from 'next/navigation'

function ContactFormBody() {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const res = await sendMailContactForm(formData)
      if (res) {
        const data = await res.json()
        console.log(data)
        alert(data.message)
        router.refresh()
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    // <FadeIn className="lg:order-last">
    <form onSubmit={handleSubmit}>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Ihre Anfrage
      </h2>
      <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
        <div className="group relative z-0 transition-all focus-within:z-10">
          <input
            name="name"
            autoComplete="name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            defaultValue={formData.name}
            className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
          />
          <label
            htmlFor="name"
            className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
          >
            Name
          </label>
        </div>
        <div className="group relative z-0 transition-all focus-within:z-10">
          <input
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="email"
            name="email"
            autoComplete="email"
            defaultValue={formData.email}
            className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
          />
          <label
            htmlFor="email"
            className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
          >
            Email
          </label>
        </div>
        <div className="group relative z-0 transition-all focus-within:z-10">
          <input
            name="company"
            id="company"
            autoComplete="organization"
            defaultValue={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
          />
          <label
            htmlFor="company"
            className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
          >
            Firma
          </label>
        </div>
        <div className="group relative z-0 transition-all focus-within:z-10">
          <input
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            label="Telefon"
            type="tel"
            name="phone"
            autoComplete="tel"
            defaultValue={formData.phone}
            className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
          />
          <label
            htmlFor="phone"
            className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
          >
            Telefon
          </label>
        </div>
        <div className="group relative z-0 transition-all focus-within:z-10">
          <input
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            id="message"
            type="text"
            name="message"
            autoComplete="message"
            defaultValue={formData.message}
            className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
          />
          <label
            htmlFor="message"
            className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
          >
            Nachricht
          </label>
        </div>

        <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
          <fieldset>
            <legend className="text-base/6 text-neutral-500">
              Grobes Budget
            </legend>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <input
                label="500 - 5k €"
                name="budget"
                onChange={(e) =>
                  setFormData({ ...formData, budget1: e.target.value })
                }
                defaultValue="500-5k"
              />
              <input
                label="5k - 10k €"
                name="budget"
                defaultValue="5-10k"
                onChange={(e) =>
                  setFormData({ ...formData, budget2: e.target.value })
                }
              />
              <input
                label="10 - 25k €"
                name="budget"
                defaultValue="10-25k"
                onChange={(e) =>
                  setFormData({ ...formData, budget3: e.target.value })
                }
              />
              <input
                label="25 - 75k €"
                name="budget"
                defaultValue="25-75k"
                onChange={(e) =>
                  setFormData({ ...formData, budget4: e.target.value })
                }
              />
              <input
                label="> 75k €"
                name="budget"
                defaultValue=">75k"
                onChange={(e) =>
                  setFormData({ ...formData, budget5: e.target.value })
                }
              />
            </div>
          </fieldset>
        </div>
      </div>
      <Button disabled={loading ? true : false} type="submit" className="mt-10">
        {loading ? 'Sending....' : 'Los geht&apos;s'}
      </Button>
    </form>
    // </FadeIn>
  )
}
export default ContactFormBody
