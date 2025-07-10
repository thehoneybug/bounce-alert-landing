
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
              Monitor Your Email Bounce Rates<br />
              with <span className="text-blue-600">Daily Intelligence Reports</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get comprehensive daily reports on your email bounce rates to identify trends, 
              troubleshoot issues, and maintain sender reputation before problems become critical.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                onClick={() => scrollToSection('demo')}
              >
                Start Daily Monitoring
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
              <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <div className="text-sm font-medium text-blue-800">DAILY BOUNCE REPORT</div>
                    <div className="text-xs text-blue-600">Campaign: ClientCorp-Q4 | Trend: +0.8% over 3 days</div>
                  </div>
                </div>
                <div className="text-blue-600 font-bold text-lg">TRENDING</div>
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Blind Spot Monitoring</h3>
                <p className="text-gray-600">
                  Checking 50+ campaigns manually is impossible. Trends develop slowly and are easy to miss.
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
              Daily Intelligence in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              Set it once, monitor forever
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Set Monitoring Preferences</h3>
              <p className="text-gray-600">
                Configure your reporting schedule and warning thresholds. Custom settings per campaign.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Receive Daily Reports</h3>
              <p className="text-gray-600">
                Comprehensive email reports with trends, insights, and actionable recommendations delivered daily.
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
            "Our daily Bounce Alert reports helped us identify a gradual bounce rate increase over 5 days. 
            We caught the domain reputation issue before it became critical, saving us thousands in 
            deliverability recovery costs."
          </blockquote>
          <div className="text-white">
            <div className="font-semibold text-lg">Marketing Director</div>
            <div className="text-blue-200">Growth Agency</div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400">5 Days</div>
              <div className="text-blue-200">Early Detection Window</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400">Daily</div>
              <div className="text-blue-200">Intelligence Reports</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400">$8,000</div>
              <div className="text-blue-200">Recovery Costs Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Intelligent Monitoring
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "SmartLead Integration", desc: "Direct API connection with comprehensive data sync" },
              { icon: TrendingUp, title: "Daily Intelligence Reports", desc: "Detailed email reports with trends and insights" },
              { icon: Zap, title: "Trend Analysis", desc: "7-day rolling averages and pattern recognition" },
              { icon: Target, title: "Custom Thresholds", desc: "Set different monitoring levels per campaign or client" },
              { icon: Clock, title: "24/7 Data Collection", desc: "Continuous monitoring with daily summary delivery" },
              { icon: Users, title: "Team Collaboration", desc: "Multiple users, role-based permissions and shared reports" }
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
              Choose Your Monitoring Level
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
                    "Daily bounce rate reports",
                    "Email delivery",
                    "Standard thresholds",
                    "7-day trend analysis",
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
                    "Comprehensive daily dashboards",
                    "Advanced trend analysis",
                    "Custom reporting schedules",
                    "Multi-channel delivery",
                    "30-day historical data",
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
                    "White-label reports",
                    "Custom integrations",
                    "Dedicated support",
                    "Advanced analytics suite",
                    "90-day historical data",
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
              See exactly how Buztler provides intelligent bounce rate monitoring
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
                q: "How detailed are the daily bounce rate reports?",
                a: "Our comprehensive daily reports include bounce rate trends, campaign comparisons, domain health scores, and actionable recommendations. Each report covers the previous 24-hour period with 7-day trend analysis."
              },
              {
                q: "What's the ROI if this prevents just one domain disaster?",
                a: "Average domain rebuild costs $5,000-$10,000 plus 3-6 months of lost reputation. Our Professional plan costs $2,364/year, delivering 200-400% ROI on just one prevention."
              },
              {
                q: "Do you integrate with other email platforms besides SmartLead?",
                a: "Currently we specialize in SmartLead integration. Our deep SmartLead expertise allows us to provide the most comprehensive monitoring and detailed reporting."
              },
              {
                q: "What happens during the free trial?",
                a: "Full access to all features for 14 days. You'll receive daily reports for your existing campaigns and we'll provide training on interpreting the data and trends."
              },
              {
                q: "Can I monitor campaigns for multiple clients?",
                a: "Yes! Professional and Enterprise plans support unlimited client campaigns with separate reporting and trend analysis for each client."
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
            Start receiving daily intelligence reports today.
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
              Start Daily Monitoring
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
