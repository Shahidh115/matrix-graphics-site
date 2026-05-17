import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const faqs = [
  { q: 'What are your turnaround times?', a: 'Most simple jobs are completed within 1-3 days. Express options depend on material, quantity and finishing.' },
  { q: 'Do you offer design services?', a: 'Yes. We can help with basic layouts, print-ready setup, banners, posters, menus and business card designs.' },
  { q: 'Can I get a sample before a full run?', a: 'Yes. Sample prints and proofs are available for selected jobs before final production.' },
  { q: 'What should I send for a quote?', a: 'Send the print size, quantity, material preference, deadline and artwork if you already have it.' }
]

export default function FAQ() {
  useEffect(() => {
    document.title = 'FAQ - Matrix Graphics'
  }, [])

  return (
    <div className="container py-8 sm:py-10 md:py-12">
      <div className="max-w-3xl">
        <h1 className="section-title text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h1>
        <p className="mt-2 font-medium text-mgnavy/85">A few details that make ordering faster.</p>
      </div>

      <div className="mt-6 space-y-3">
        {faqs.map((faq, index) => (
          <ScrollReveal key={faq.q} delay={`delay-${Math.min((index + 1) * 100, 300)}`}>
            <details className="dark-panel group overflow-hidden p-4 sm:p-5 transition duration-300">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-bold text-mgnavy transition duration-300 hover:text-mgyellow sm:text-base">
                <span>{faq.q}</span>
                <svg className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="mt-3 border-t border-mgyellow/15 pt-4 text-sm font-semibold leading-6 text-mgnavy/90 animate-in fade-in slide-in-from-top-2 duration-300">{faq.a}</div>
            </details>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
