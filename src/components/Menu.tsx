import React from 'react'

interface MenuItem {
  name: string
  description: string
  price: number
}

interface MenuSection {
  title: string
  items: MenuItem[]
}

const menuData: MenuSection[] = [
  {
    title: "Appetizers",
    items: [
      { name: "Charcuterie Board", description: "cured meats, artisanal cheese, seasonal accoutrements", price: 26 },
      { name: "Chicken and Doughnuts", description: "guajillo, miso caramel, jalapeno crema, cumin essence", price: 17 },
      { name: "Tombo Tuna Cigar", description: "japanese 7-spice, macadamia nut, yuzu kosho", price: 19 },
    ]
  },
  {
    title: "Salads",
    items: [
      { name: "Farmers Green", description: "organic spring mix, shaved crudité, herb citronette", price: 11 },
      { name: "TOR Caesar Salad", description: "noble bread, parmesan crisp, craisins", price: 15 },
      { name: "Heirloom Tomato Salad", description: "pistachio, sheep milk cheese, figs-mosto cotto", price: 16 },
    ]
  },
  {
    title: "Entrees",
    items: [
      { name: "Miso Glazed Sea Bass", description: "asparagus, potato puree, citrus beurre blanc", price: 45 },
      { name: "Roasted Airline Chicken", description: "hayden mills polenta, braised greens, pan sauce", price: 34 },
      { name: "Bone-In Pork Chops", description: "panko encrusted risotto, broccolini, stone fruit mostarda", price: 40 },
    ]
  }
]

export default function Menu() {
  return (
    <div className="bg-white p-8 font-serif max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Menu</h2>
      {menuData.map((section, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">{section.title}</h3>
          {section.items.map((item, itemIndex) => (
            <div key={itemIndex} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h4 className="text-xl font-medium">{item.name}</h4>
                <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
