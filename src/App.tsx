import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Brands from './components/Brands'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Modal from './components/Modal'

export interface ApplianceIssue {
  title: string
  description: string
}

export interface ApplianceData {
  id: string
  name: string
  description: string
  image: string
  issues: ApplianceIssue[]
}

function App() {
  const [selectedAppliance, setSelectedAppliance] = useState<ApplianceData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleApplianceClick = (appliance: ApplianceData) => {
    setSelectedAppliance(appliance)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedAppliance(null)
  }

  return (
    <>
      <Header />
      <Hero />
      <Services onApplianceClick={handleApplianceClick} />
      <Brands />
      <Process />
      <Testimonials />
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        appliance={selectedAppliance}
      />
    </>
  )
}

export default App