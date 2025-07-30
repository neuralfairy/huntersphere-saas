"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, TrendingUp } from "lucide-react"

export function ROICalculator() {
  const [leads, setLeads] = useState(1000)
  const [conversionRate, setConversionRate] = useState(2)
  const [avgDealSize, setAvgDealSize] = useState(5000)

  const currentRevenue = leads * (conversionRate / 100) * avgDealSize
  const improvedConversionRate = conversionRate * 2.4 // 140% improvement
  const improvedRevenue = leads * (improvedConversionRate / 100) * avgDealSize
  const additionalRevenue = improvedRevenue - currentRevenue
  const monthlyROI = additionalRevenue - 299 // Assuming $299/month plan

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Calculate Your ROI</h2>
          <p className="text-xl text-gray-600">See how much additional revenue iEMA can generate for your business</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Calculator className="w-6 h-6 text-red-600 mr-2" />
              <h3 className="text-xl font-semibold">ROI Calculator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="leads">Monthly Leads</Label>
                <Input
                  id="leads"
                  type="number"
                  value={leads}
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="conversion">Current Conversion Rate (%)</Label>
                <Input
                  id="conversion"
                  type="number"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="deal-size">Average Deal Size ($)</Label>
                <Input
                  id="deal-size"
                  type="number"
                  value={avgDealSize}
                  onChange={(e) => setAvgDealSize(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-6 h-6 text-red-600 mr-2" />
              <h3 className="text-xl font-semibold">Your Results</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Current Monthly Revenue</span>
                <span className="font-semibold">${currentRevenue.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">With iEMA (140% improvement)</span>
                <span className="font-semibold text-green-600">${improvedRevenue.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Additional Monthly Revenue</span>
                <span className="font-bold text-green-600">${additionalRevenue.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Monthly ROI</span>
                <span className="font-bold text-2xl text-green-600">${monthlyROI.toLocaleString()}</span>
              </div>
            </div>

            <Button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white">Start Your Free Trial</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
