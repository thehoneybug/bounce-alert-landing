import { useState } from 'react';
import { Check, Shield, AlertTriangle, Clock, Target, Zap, Users, TrendingUp, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    campaigns: '',
    challenges: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-form', {
        body: formData
      });

      if (error) {
        throw error;
      }

      if (data.success) {
        toast({
          title: "Service inquiry submitted successfully!",
          description: "Our team will contact you within 2 hours to discuss your monitoring needs. Please check your email for confirmation.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          campaigns: '',
          challenges: ''
        });
      } else {
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your inquiry. Please try again or contact us directly at support@buztler.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <Button onClick={() => scrollToSection('inquiry')} className="bg-blue-600 hover:bg-blue-700">
              Get Professional Monitoring
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
              Professional Email Bounce Rate<br />
              <span className="text-blue-600">Monitoring Service</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our team delivers comprehensive daily bounce rate reports directly to your inbox. No setup required - we handle everything for you. 
              Save thousands in deliverability issues with enterprise-grade monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                onClick={() => scrollToSection('inquiry')}
              >
                Get Professional Monitoring
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4"
                onClick={() => scrollToSection('how-it-works')}
              >
                How Our Service Works
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <div className="text-sm font-medium text-blue-800">DAILY PROFESSIONAL REPORT</div>
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
              Managing multiple email campaigns without professional monitoring is playing with fire
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">No Professional Oversight</h3>
                <p className="text-gray-600">
                  Setting up monitoring systems requires expertise you don't have. Trends develop slowly and are easy to miss.
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
              How Our Professional Service Works
            </h2>
            <p className="text-xl text-gray-600">
              Completely hands-off solution - our team handles everything
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">You Provide Access</h3>
              <p className="text-gray-600">
                Simply provide access to your email platform. Our team handles all the technical setup and configuration.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Team Configures Your System</h3>
              <p className="text-gray-600">
                Our dedicated specialists create your custom monitoring system with enterprise-grade tracking and analysis.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Receive Automated Daily Reports</h3>
              <p className="text-gray-600">
                Get comprehensive daily reports with professional insights and recommendations delivered automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You Get with Our Professional Service
            </h2>
            <p className="text-xl text-gray-600">
              Complete enterprise-grade monitoring solution managed by our expert team
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Daily Detailed Reports", desc: "Comprehensive bounce rate analysis delivered to your inbox every morning by our team" },
              { icon: Target, title: "Professional Trend Analysis", desc: "Our expertise in identifying patterns and early warning signs that others miss" },
              { icon: AlertTriangle, title: "Alert Notifications", desc: "Immediate alerts when bounce rates exceed safe thresholds, managed by our specialists" },
              { icon: Shield, title: "Expert Insights", desc: "Professional recommendations and actionable next steps from our dedicated team" },
              { icon: Users, title: "Dedicated Support Team", desc: "Direct access to our email deliverability specialists whenever you need help" },
              { icon: Zap, title: "Fully Managed Solution", desc: "No technical knowledge needed - our team handles everything so you can focus on your business" }
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

      {/* Service Pricing */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Professional Monitoring Service
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade monitoring with dedicated team support
            </p>
          </div>
          <Card className="border-blue-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Complete Enterprise Solution
              </span>
            </div>
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Professional Monitoring Service</h3>
              <div className="text-5xl font-bold text-gray-900 mb-2">$497</div>
              <div className="text-gray-600 mb-2">one-time setup</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">+ $97/month</div>
              <div className="text-sm text-green-600 font-medium mb-8">Saves $8,000+ on first prevention</div>
              <ul className="text-left space-y-4 mb-8 max-w-md mx-auto">
                {[
                  "Complete system setup by our team",
                  "Daily detailed bounce rate reports",
                  "Professional trend analysis",
                  "Immediate alert notifications",
                  "Expert insights and recommendations",
                  "Dedicated support team access",
                  "30-day historical data analysis",
                  "Guaranteed response within 2 hours"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 w-full">
                Start Service Today
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                30-day money-back guarantee • Setup completed within 24 hours by our team
              </p>
            </CardContent>
          </Card>
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
            "The team at Buztler caught issues we never would have spotted ourselves. Their professional monitoring 
            gave us complete peace of mind, and the daily reports helped us prevent what could have been a $15K disaster."
          </blockquote>
          <div className="text-white">
            <div className="font-semibold text-lg">Sarah M.</div>
            <div className="text-blue-200">Marketing Agency Owner</div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400">5 Days</div>
              <div className="text-blue-200">Early Problem Detection</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400">24/7</div>
              <div className="text-blue-200">Professional Team Monitoring</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400">$15,000</div>
              <div className="text-blue-200">Disaster Costs Prevented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Inquiry Form */}
      <section id="inquiry" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Professional Monitoring Service
            </h2>
            <p className="text-xl text-gray-600">
              Our team will contact you within 2 hours to discuss your monitoring needs
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Your agency name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Email Volume *
                    </label>
                    <Input
                      required
                      disabled={isSubmitting}
                      value={formData.campaigns}
                      onChange={(e) => setFormData({...formData, campaigns: e.target.value})}
                      placeholder="e.g., 50,000 emails/month"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Biggest Email Deliverability Challenge
                  </label>
                  <Textarea
                    disabled={isSubmitting}
                    value={formData.challenges}
                    onChange={(e) => setFormData({...formData, challenges: e.target.value})}
                    placeholder="What keeps you up at night about your email campaigns?"
                    rows={3}
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Get Professional Monitoring'}
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Our team will contact you within 2 hours to discuss your monitoring needs
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
                q: "What makes your team's monitoring service different?",
                a: "Our team provides enterprise-grade monitoring with human expertise. Unlike automated tools, you get professional analysis, insights, and recommendations from our dedicated email deliverability specialists who understand the nuances of bounce rate patterns."
              },
              {
                q: "How quickly will our team deliver results?",
                a: "You'll receive your first comprehensive report within 24 hours of our team completing the setup. Most clients see improved confidence and early problem detection within the first week of our professional monitoring service."
              },
              {
                q: "Do I need any technical knowledge?",
                a: "Absolutely not. This is a completely hands-off solution. Our team handles all technical aspects while you focus on your business. You simply receive professional reports and insights from our specialists."
              },
              {
                q: "What if I'm not satisfied with your team's service?",
                a: "We offer a 30-day money-back guarantee. If you're not completely satisfied with our professional monitoring service and team support, we'll refund your investment in full."
              },
              {
                q: "Can your team monitor multiple email platforms?",
                a: "Yes, our team can set up monitoring for most major email platforms and provide consolidated reporting across all your campaigns and clients through our enterprise solution."
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
            Don't Risk Another Domain Disaster
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Every day without professional monitoring is another day risking $10,000 domain losses. 
            Get our expert team monitoring and complete peace of mind today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4"
              onClick={() => scrollToSection('inquiry')}
            >
              Get Professional Monitoring
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-4"
              onClick={() => scrollToSection('inquiry')}
            >
              Start Service Today
            </Button>
          </div>
          <p className="text-red-100 mt-4 text-sm">
            30-day money-back guarantee • Setup completed within 24 hours by our team
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
              <p>Professional Team Support: support@buztler.com</p>
              <p className="text-sm mt-1">© 2024 Buztler. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
