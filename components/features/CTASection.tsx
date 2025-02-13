'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PhoneIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function CTASection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              هل تحتاج إلى خدمة نقل عفش احترافية؟
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              نحن هنا لمساعدتك في نقل أثاثك بكل احترافية وأمان. اتصل بنا الآن للحصول على عرض سعر مجاني.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition flex items-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                اتصل بنا الآن
              </Link>
              
              <Link
                href="/services"
                className="bg-primary-dark text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-darker transition flex items-center gap-2"
              >
                تصفح خدماتنا
                <ArrowLeftIcon className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 