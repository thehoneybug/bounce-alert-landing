import { useState } from 'react';
import { Check, Shield, AlertTriangle, Clock, Target, Zap, Users, TrendingUp, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    campaigns: '',
    challenges: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo booking:', formData);
    alert('Demo booking submitted! We\'ll contact you within 2 hours.');
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Buztler</span>
            </div>
            <Button onClick={() => scrollToSection('demo')} className="bg-blue-600 hover:bg-blue-700">
              Book Free Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Domain Death Alert: Agencies Losing $10K+ Monthly
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Losing <span className="text-red-600">$10,000 Domains</span><br />
              to High Bounce Rates
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get instant alerts when your SmartLead campaigns hit dangerous bounce rate thresholds. 
              Protect your clients' domains before it's too late.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                onClick={() => scrollToSection('demo')}
              >
                Book Free 15-Minute Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4"
                onClick={() => scrollToSection('how-it-works')}
              >
                See How It Works
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-between bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                  <div>
                    <div className="text-sm font-medium text-red-800">BOUNCE RATE ALERT</div>
                    <div className="text-xs text-red-600">Campaign: ClientCorp-Q4 | Rate: 6.2%</div>
                  </div>
                </div>
                <div className="text-red-600 font-bold text-lg">DANGER</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Every Agency Owner's Nightmare
            </h2>
            <p className="text-xl text-gray-600">
              Managing multiple SmartLead campaigns without proper monitoring is playing with fire
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-200">
              <CardContent className="p-8 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Domain Death</h3>
                <p className="text-gray-600">
                  High bounce rates kill domains overnight. Rebuilding costs $3K-$10K plus months of lost reputation.
                </p>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardContent className="p-8 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Client Churn</h3>
                <p className="text-gray-600">
                  Losing a client's domain means losing the client. Recovery rates are less than 20%.
                </p>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardContent className="p-8 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Manual Monitoring Chaos</h3>
                <p className="text-gray-600">
                  Checking 50+ campaigns manually is impossible. By the time you notice, it's too late.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              24/7 Protection in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              Set it once, protect forever
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect SmartLead</h3>
              <p className="text-gray-600">
                One-click integration with your SmartLead account. We sync all your campaigns automatically.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Set Thresholds</h3>
              <p className="text-gray-600">
                Configure bounce rate alerts (default: 5% warning, 7% danger). Custom settings per campaign.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Instant Alerts</h3>
              <p className="text-gray-600">
                Email, Slack, or SMS alerts the moment danger hits. Includes actionable recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl text-white mb-8 leading-relaxed">
            "Buztler caught a 6.2% bounce rate spike on our biggest client's campaign at 2 AM. 
            Without this alert, we would have woken up to a dead domain and a $8,000 rebuild cost. 
            This system has already paid for itself 20x over."
          </blockquote>
          <div className="text-white">
            <div className="font-semibold text-lg">Marketing Director</div>
            <div className="text-blue-200">Growth Agency</div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400">$8,000</div>
              <div className="text-blue-200">Domain Disaster Prevented</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400">2:00 AM</div>
              <div className="text-blue-200">Alert Received</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400">15 min</div>
              <div className="text-blue-200">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Protect Your Domains
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "SmartLead Integration", desc: "Direct API connection with real-time sync" },
              { icon: Zap, title: "Instant Alerts", desc: "Email, Slack, SMS notifications in under 60 seconds" },
              { icon: TrendingUp, title: "7-Day Rolling Averages", desc: "Smart analytics prevent false alarms" },
              { icon: Target, title: "Custom Thresholds", desc: "Set different limits per campaign or client" },
              { icon: Clock, title: "24/7 Monitoring", desc: "Never miss a spike, even at 3 AM" },
              { icon: Users, title: "Team Collaboration", desc: "Multiple users, role-based permissions" }
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <feature.icon className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Protection Level
            </h2>
            <p className="text-xl text-gray-600">
              30-day money-back guarantee • ROI: 4,060% average return
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">$97</div>
                <div className="text-gray-600 mb-6">per SmartLead account/month</div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Basic bounce rate monitoring",
                    "Email alerts",
                    "Standard thresholds",
                    "7-day history",
                    "Email support"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">$197</div>
                <div className="text-gray-600 mb-2">per month + $497 setup</div>
                <div className="text-sm text-green-600 font-medium mb-6">Saves $8,000+ on first prevention</div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Everything in Starter",
                    "Slack & SMS alerts",
                    "Real-time dashboard",
                    "Trend analysis",
                    "Custom thresholds",
                    "30-day history",
                    "Priority support"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">$297</div>
                <div className="text-gray-600 mb-6">per month + $997 setup</div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Everything in Professional",
                    "White-label solution",
                    "Custom integrations",
                    "Dedicated support",
                    "Advanced analytics",
                    "90-day history",
                    "Custom SLAs"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <section id="demo" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Book Your Free 15-Minute Demo
            </h2>
            <p className="text-xl text-gray-600">
              See exactly how Buztler prevents domain disasters
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@company.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <Input
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Your agency name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Active SmartLead Campaigns *
                    </label>
                    <Input
                      required
                      value={formData.campaigns}
                      onChange={(e) => setFormData({...formData, campaigns: e.target.value})}
                      placeholder="e.g., 15-20 campaigns"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Biggest Challenge with Campaign Monitoring
                  </label>
                  <Textarea
                    value={formData.challenges}
                    onChange={(e) => setFormData({...formData, challenges: e.target.value})}
                    placeholder="What keeps you up at night about your campaigns?"
                    rows={3}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Book My Free Demo
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  We'll contact you within 2 hours to schedule your personalized demo
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "How quickly do I get alerted when bounce rates spike?",
                a: "Alerts are sent within 60 seconds of detecting threshold breaches. Our system checks bounce rates every 15 minutes during active campaign hours."
              },
              {
                q: "What's the ROI if this prevents just one domain disaster?",
                a: "Average domain rebuild costs $5,000-$10,000 plus 3-6 months of lost reputation. Our Professional plan costs $2,364/year, delivering 200-400% ROI on just one prevention."
              },
              {
                q: "Do you integrate with other email platforms besides SmartLead?",
                a: "Currently we specialize in SmartLead integration. Our deep SmartLead expertise allows us to provide the most accurate monitoring and fastest alerts."
              },
              {
                q: "What happens during the free trial?",
                a: "Full access to all features for 14 days. We'll help you set up monitoring for your existing campaigns and provide training on interpreting alerts."
              },
              {
                q: "Can I monitor campaigns for multiple clients?",
                a: "Yes! Professional and Enterprise plans support unlimited client campaigns with separate alerting and reporting for each client."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex justify-between items-center"
                  >
                    <span className="font-medium text-gray-900">{faq.q}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Don't Wait for the Next Domain Disaster
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Every day without monitoring is another day risking $10,000 domain losses. 
            Get protected in under 10 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4"
              onClick={() => scrollToSection('demo')}
            >
              Book Free Demo Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-4"
            >
              Start Free Trial
            </Button>
          </div>
          <p className="text-red-100 mt-4 text-sm">
            30-day money-back guarantee • Setup in under 10 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Buztler</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>24/7 Support: support@buztler.com</p>
              <p className="text-sm mt-1">© 2024 Buztler. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
