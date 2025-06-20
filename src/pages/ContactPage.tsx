import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Users, Shield } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    language: 'telugu'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Integrate with backend API for form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  const handleWhatsApp = () => {
    const message = `నమస్కారం, నాకు GramaDigiID గురించి సహాయం కావాలి.\n\nHello, I need help regarding GramaDigiID.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'ఫోన్ సపోర్ట్',
      titleEn: 'Phone Support',
      details: '+91 9876 543 210',
      description: 'సోమవారం - శుక్రవారం, 9:00 AM - 6:00 PM',
      descriptionEn: 'Monday - Friday, 9:00 AM - 6:00 PM',
      action: () => window.open('tel:+919876543210'),
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MessageCircle,
      title: 'వాట్సాప్ సపోర్ట్',
      titleEn: 'WhatsApp Support',
      details: '+91 9876 543 210',
      description: '24/7 అందుబాటులో',
      descriptionEn: '24/7 Available',
      action: handleWhatsApp,
      color: 'from-green-600 to-green-700'
    },
    {
      icon: Mail,
      title: 'ఇమెయిల్ సపోర్ట్',
      titleEn: 'Email Support',
      details: 'support@gramadigid.com',
      description: '24 గంటల్లో సమాధానం',
      descriptionEn: 'Response within 24 hours',
      action: () => window.open('mailto:support@gramadigid.com'),
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MapPin,
      title: 'కార్యాలయ చిరునామా',
      titleEn: 'Office Address',
      details: 'హైదరాబాద్, తెలంగాణ',
      description: 'Hyderabad, Telangana, India',
      descriptionEn: 'Visit by appointment only',
      action: () => {},
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'త్వరిత సమాధానం',
      titleEn: 'Quick Response',
      description: 'మీ ప్రశ్నలకు త్వరిత సమాధానం'
    },
    {
      icon: Users,
      title: 'నిపుణుల టీమ్',
      titleEn: 'Expert Team',
      description: 'అనుభవజ్ఞుల సహాయం'
    },
    {
      icon: Shield,
      title: 'గోప్యత భద్రత',
      titleEn: 'Privacy Security',
      description: 'మీ వివరాలు పూర్తి భద్రతలో'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-8 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="text-green-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              మీ సందేశం పంపబడింది!
            </h2>
            <p className="text-lg text-green-600 mb-2">Message Sent Successfully!</p>
            <p className="text-gray-600 mb-4">
              మేము త్వరలోనే మీతో సంప్రదిస్తాము. ధన్యవాదాలు!
            </p>
            <p className="text-gray-500 text-sm mb-6">
              We will contact you soon. Thank you!
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  subject: '',
                  message: '',
                  language: 'telugu'
                });
              }}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              కొత్త సందేశం పంపండి
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            మాతో సంప్రదించండి / Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            మీకు ఏదైనా సహాయం కావాలా? మా టీమ్ మీకు సహాయం చేయడానికి సిద్ధంగా ఉంది. ఈ క్రింది మార్గాలలో మాతో సంప్రదించండి.
          </p>
          <p className="text-base text-gray-500">
            Need any help? Our team is ready to assist you. Contact us through the following methods.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    onClick={method.action}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 mb-3">
                      {method.titleEn}
                    </p>
                    <p className="text-lg font-semibold text-blue-600 mb-2">
                      {method.details}
                    </p>
                    <p className="text-sm text-gray-600">
                      {method.description}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {method.descriptionEn}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                మా సేవ విశేషతలు / Our Service Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Icon className="text-blue-600" size={24} />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{feature.titleEn}</p>
                      <p className="text-xs text-gray-500">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center space-x-2 mb-6">
              <Send className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">సందేశం పంపండి</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  పేరు / Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="మీ పూర్తి పేరు"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ఇమెయిల్ / Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ఫోన్ నంబర్ / Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+91 9876543210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  విషయం / Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">విషయం ఎంచుకోండి</option>
                  <option value="technical">సాంకేతిక సమస్య</option>
                  <option value="guidance">డాక్యుమెంట్ గైడెన్స్</option>
                  <option value="forms">ఫారమ్‌ల సమస్య</option>
                  <option value="tracking">ట్రాకింగ్ సమస్య</option>
                  <option value="other">ఇతరం</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  సందేశం / Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="మీ సందేశం వివరంగా రాయండి..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ప్రాధాన్య భాష / Preferred Language
                </label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="telugu">తెలుగు / Telugu</option>
                  <option value="english">English / ఇంగ్లీష్</option>
                  <option value="hindi">हिन्दी / హిందీ</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>పంపుతోంది...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>సందేశం పంపండి</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            తరచుగా అడిగే ప్రశ్నలు / Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-bold text-gray-800 mb-2">
                ట్రాకింగ్ ID ఎక్కడ దొరుకుతుంది?
              </h4>
              <p className="text-gray-600 text-sm">
                మీ అప్లికేషన్ సమర్పించిన తర్వాత SMS మరియు ఇమెయిల్ ద్వారా ట్రాకింగ్ ID వస్తుంది.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-bold text-gray-800 mb-2">
                సపోర్ట్ సమయం ఎంత?
              </h4>
              <p className="text-gray-600 text-sm">
                ఫోన్ సపోర్ట్: సోమ-శుక్ర 9AM-6PM, వాట్సాప్: 24/7 అందుబాటులో.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;