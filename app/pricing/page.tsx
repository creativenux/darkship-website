import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Mic, Headphones, Video } from "lucide-react"
import Header from "@/components/layout/Header"
import Faq from "@/components/layout/Faq"
import Why from "@/components/layout/Why"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for beginners and short recordings",
      price: "₦3,000",
      duration: "per hour",
      features: [
        "1 hour studio time",
        "Basic equipment setup",
        "1 host + 1 guest capacity",
        "Basic post-production",
        "24/7 studio access",
      ],
      icon: Mic,
    },
    {
      name: "Professional",
      description: "Ideal for established podcasters",
      price: "₦12,000",
      duration: "per 5 hours",
      features: [
        "5 hours studio time",
        "Professional equipment setup",
        "Up to 4 participants",
        "Advanced post-production",
        "24/7 studio access",
        "Video recording",
        "Distribution assistance",
      ],
      icon: Headphones,
    },
    {
      name: "Premium",
      description: "For high-end productions and series",
      price: "₦100,000",
      duration: "per month",
      features: [
        "20 hours studio time per month",
        "Top-tier equipment setup",
        "Unlimited participants",
        "Premium post-production",
        "24/7 studio access",
        "4K video recording",
        "Marketing and distribution support",
        "Dedicated producer assistance",
      ],
      icon: Video,
    },
  ]

  return (
    <div className="bg-gray-900 min-h-screen">
       <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Choose Your Perfect Plan
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Select the plan that suits your podcasting needs and take your show to the next level with our
                  state-of-the-art studio and expert support.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {plans.map((plan) => (
                <Card key={plan.name} className="flex flex-col bg-gray-800 text-gray-100 border-gray-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                      <plan.icon className="h-6 w-6 text-purple-500" />
                    </div>
                    <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mt-2 flex items-baseline text-gray-100">
                      <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                      <span className="ml-1 text-xl font-semibold">{plan.duration}</span>
                    </div>
                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex">
                          <Check className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="ml-3 text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button size='lg' className="w-full bg-purple-600 hover:bg-purple-700 text-white">Book Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <Why />
        
        <Faq />
      </main>
    </div>
  )
}