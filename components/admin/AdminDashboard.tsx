'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import {
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  TagIcon,
  UserGroupIcon,
  BellIcon,
  CurrencyDollarIcon,
  MapIcon
} from '@heroicons/react/24/outline'
import AdsList from './AdsList'
import PlanManager from './PlanManager'
import PlanStats from './PlanStats'
import SupportCenter from './SupportCenter'
import ReportsManager from './ReportsManager'
import Settings from './Settings'
import PaymentsManager from './PaymentsManager'
import CitiesManager from './CitiesManager'

export default function AdminDashboard() {
  const tabs = [
    {
      name: 'الإعلانات',
      icon: DocumentTextIcon,
      component: <AdsList />
    },
    {
      name: 'الباقات',
      icon: TagIcon,
      component: <PlanManager />
    },
    {
      name: 'المدفوعات',
      icon: CurrencyDollarIcon,
      component: <PaymentsManager />
    },
    {
      name: 'المدن',
      icon: MapIcon,
      component: <CitiesManager />
    },
    {
      name: 'الإحصائيات',
      icon: ChartBarIcon,
      component: <PlanStats />
    },
    {
      name: 'الدعم الفني',
      icon: BellIcon,
      component: <SupportCenter />
    },
    {
      name: 'التقارير',
      icon: UserGroupIcon,
      component: <ReportsManager />
    },
    {
      name: 'الإعدادات',
      icon: CogIcon,
      component: <Settings />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">لوحة التحكم</h1>
          <p className="mt-2 text-sm text-gray-600">إدارة الإعلانات والباقات والإعدادات</p>
        </div>

        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-white rounded-xl shadow mb-8 rtl:space-x-reverse overflow-x-auto">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) => `
                  w-full py-3 px-4 text-sm leading-5 font-medium rounded-lg whitespace-nowrap
                  focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary ring-white ring-opacity-60
                  ${selected
                    ? 'bg-primary text-white shadow'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }
                `}
              >
                <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                </div>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {tabs.map((tab, idx) => (
              <Tab.Panel
                key={idx}
                className={`bg-white rounded-xl p-6 shadow
                  focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary ring-white ring-opacity-60
                `}
              >
                {tab.component}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
} 