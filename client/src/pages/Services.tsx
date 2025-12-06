
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wrench, Shield, Users, Lightbulb, CheckCircle, Star } from "lucide-react";
import { useLocation } from "wouter";

export default function Services() {
  const [, setLocation] = useLocation();

  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-background py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
                🔧 Professional Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Comprehensive solutions to support your educational technology needs from installation to ongoing maintenance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 hover:scale-105 transition-all duration-300"
                onClick={() => setLocation('/explore-services')}
              >
                Explore Services
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="hover:scale-105 transition-all duration-300"
                onClick={() => setLocation('/get-quote')}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Service Categories</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive technology services for educational institutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mb-20">
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="p-4 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                    <Wrench className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Installation</h3>
                  <p className="text-sm text-muted-foreground">Professional setup & deployment</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Maintenance</h3>
                  <p className="text-sm text-muted-foreground">24/7 support & monitoring</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Consulting</h3>
                  <p className="text-sm text-muted-foreground">Expert technology advice</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Training</h3>
                  <p className="text-sm text-muted-foreground">Staff & student education</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Detailed Services */}
        <div className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Service Offerings</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                End-to-end support for your educational technology infrastructure
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-orange-100 rounded-lg">
                        <Wrench className="h-8 w-8 text-orange-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Installation Services</CardTitle>
                        <Badge variant="secondary" className="w-fit mt-1">Professional Setup</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Professional installation and setup of educational technology with minimal disruption to your operations</p>
                    <ul className="space-y-2 text-sm mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        On-site installation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Network configuration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Staff training included
                      </li>
                    </ul>
                    <Button 
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      onClick={() => setLocation('/schedule-installation')}
                    >
                      Schedule Installation
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Shield className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Maintenance Support</CardTitle>
                        <Badge variant="outline" className="w-fit mt-1">24/7 Available</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Ongoing maintenance and technical support to keep your equipment running smoothly</p>
                    <ul className="space-y-2 text-sm mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Preventive maintenance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Remote diagnostics
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Priority support
                      </li>
                    </ul>
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-muted-foreground">99.9% uptime guarantee</span>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
                      onClick={() => setLocation('/maintenance-support')}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <Lightbulb className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Consultation</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Expert advice on technology solutions tailored to your institution's specific needs</p>
                    <ul className="space-y-2 text-sm mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Needs assessment
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Technology roadmap
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Budget planning
                      </li>
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full border-green-200 text-green-600 hover:bg-green-50"
                      onClick={() => setLocation('/book-consultation')}
                    >
                      Book Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <Users className="h-8 w-8 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Custom Solutions</CardTitle>
                        <Badge variant="secondary" className="w-fit mt-1">Tailored Packages</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Tailored technology packages designed specifically for your educational requirements</p>
                    <ul className="space-y-2 text-sm mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Custom integrations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Scalable solutions
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Ongoing support
                      </li>
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                      onClick={() => setLocation('/get-quote')}
                    >
                      Request Quote
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Service Packages */}
        <div className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Service Packages</h2>
              <p className="text-xl text-muted-foreground">Choose the right service level for your institution</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <Badge className="w-fit mx-auto mb-4 bg-green-100 text-green-700">Basic</Badge>
                  <CardTitle className="text-2xl">Essential Support</CardTitle>
                  <div className="text-3xl font-bold text-green-600 mt-2">₹15,000/month</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Basic installation support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Email support (48hr response)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Monthly maintenance checks
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Basic training materials
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-orange-200 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-600 text-white">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pb-4">
                  <Badge className="w-fit mx-auto mb-4 bg-orange-100 text-orange-700">Professional</Badge>
                  <CardTitle className="text-2xl">Complete Care</CardTitle>
                  <div className="text-3xl font-bold text-orange-600 mt-2">₹35,000/month</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Full installation & setup
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      24/7 phone & email support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Weekly maintenance & monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      On-site staff training
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Priority repair service
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    onClick={() => setLocation('/get-quote')}
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <Badge className="w-fit mx-auto mb-4 bg-purple-100 text-purple-700">Enterprise</Badge>
                  <CardTitle className="text-2xl">Premium Support</CardTitle>
                  <div className="text-3xl font-bold text-purple-600 mt-2">₹75,000/month</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      White-glove installation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Dedicated account manager
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Daily monitoring & alerts
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Comprehensive training program
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Custom integrations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      SLA guarantee
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-gradient-to-r from-slate-50 to-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Service Excellence</h2>
              <p className="text-muted-foreground">Proven track record of successful implementations</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-orange-600 mb-2">1200+</div>
                  <p className="text-muted-foreground font-medium">Successful Installations</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                  <p className="text-muted-foreground font-medium">Support Available</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-green-600 mb-2">98.5%</div>
                  <p className="text-muted-foreground font-medium">Customer Satisfaction</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
                  <p className="text-muted-foreground font-medium">Educational Partners</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Service Process</h2>
              <p className="text-xl text-muted-foreground">Simple, transparent, and efficient service delivery</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Assessment</h3>
                <p className="text-sm text-muted-foreground">We analyze your current setup and requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Planning</h3>
                <p className="text-sm text-muted-foreground">Custom solution design and timeline creation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Implementation</h3>
                <p className="text-sm text-muted-foreground">Professional installation and configuration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-sm text-muted-foreground">Ongoing maintenance and technical assistance</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Institution?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with our comprehensive technology services today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-orange-600 hover:bg-gray-100"
                onClick={() => setLocation('/schedule-installation')}
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-orange-600"
                onClick={() => setLocation('/explore-services')}
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}