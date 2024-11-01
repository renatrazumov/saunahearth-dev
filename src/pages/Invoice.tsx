import React from 'react';
import { Download, Send } from 'lucide-react';

const Invoice = () => {
  const invoiceData = {
    number: "INV-2024-001",
    date: "2024-03-20",
    dueDate: "2024-04-19",
    company: {
      name: "SaunaHearth",
      address: "Cranston, RI 02910",
      phone: "(401) 487-2783"
    },
    customer: {
      name: "John Doe",
      email: "john@example.com",
      address: "123 Main St, Providence, RI 02903"
    },
    items: [
      {
        description: "Custom 4-Person Outdoor Sauna",
        details: "Western Red Cedar, Wood-Burning Heater",
        quantity: 1,
        price: 14999
      },
      {
        description: "LED Lighting System",
        details: "Premium outdoor-rated LED package",
        quantity: 1,
        price: 299
      },
      {
        description: "Installation Service",
        details: "Professional installation and setup",
        quantity: 1,
        price: 1500
      }
    ]
  };

  const calculateSubtotal = () => {
    return invoiceData.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.085; // 8.5% tax rate
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-2xl font-bold text-amber-600">{invoiceData.company.name}</h1>
              <p className="text-gray-600">{invoiceData.company.address}</p>
              <p className="text-gray-600">{invoiceData.company.phone}</p>
            </div>
            <div className="text-right">
              <h2 className="text-xl font-semibold">INVOICE</h2>
              <p className="text-gray-600">#{invoiceData.number}</p>
              <p className="text-gray-600">Date: {invoiceData.date}</p>
              <p className="text-gray-600">Due Date: {invoiceData.dueDate}</p>
            </div>
          </div>

          {/* Customer Info */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Bill To:</h3>
            <p className="text-gray-800">{invoiceData.customer.name}</p>
            <p className="text-gray-600">{invoiceData.customer.email}</p>
            <p className="text-gray-600">{invoiceData.customer.address}</p>
          </div>

          {/* Items */}
          <table className="w-full mb-8">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2">Description</th>
                <th className="text-left py-2">Quantity</th>
                <th className="text-right py-2">Price</th>
                <th className="text-right py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-4">
                    <div className="font-medium">{item.description}</div>
                    <div className="text-sm text-gray-600">{item.details}</div>
                  </td>
                  <td className="py-4">{item.quantity}</td>
                  <td className="text-right py-4">${item.price.toLocaleString()}</td>
                  <td className="text-right py-4">${(item.quantity * item.price).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-end">
              <div className="w-64">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span>${calculateSubtotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Tax (8.5%):</span>
                  <span>${calculateTax().toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>${calculateTotal().toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 mt-8">
            <button className="flex items-center gap-2 px-4 py-2 border border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50">
              <Download className="w-4 h-4" /> Download PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700">
              <Send className="w-4 h-4" /> Send Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;