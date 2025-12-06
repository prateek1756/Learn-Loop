
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, Shield, Users, Lightbulb, Server, Wifi, 
  Monitor, Headphones, Clock, Star, ArrowRight, CheckCircle 
} from "lucide-react";

export default function ExploreServices() {
  const serviceCategories = [
    {
      icon: Wrench,
      title: "Installation & Setup",
      description: "Professional installation of educational technology",
      services: ["Hardware Installation", "Software Deployment", "Network Configuration", "System Integration"],
      color: "orange"
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Ongoing support to keep your systems running",
      services: ["24/7 Monitoring", "Preventive Maintenance", "Emergency Repairs", "Remote Diagnostics"],
      color: "blue"
    },
    {
      icon: Users,
      title: "Training & Education",
      description: "Comprehensive training for staff and students",
      services: ["Staff Training", "Student Workshops", "Administrator Courses", "Certification Programs"],
      color: "green"
    },
    {
      icon: Lightbulb,
      title: "Consulting & Planning",
      description: "Expert guidance for technology decisions",
      services: ["Technology Assessment", "Strategic Planning", "Budget Optimization", "Compliance Review"],
      color: "purple"
    }
  ];

  const specializedServices = [
    {
      icon: Server,
      title: "Data Center Solutions",
      description: "Complete data center setup and management for educational institutions",
      features: ["Server Installation", "Storage Solutions", "Backup Systems", "Security Implementation"],
      price: "₹2,50,000+"
    },
    {
      icon: Wifi,
      title: "Campus-Wide Networking",
      description: "Comprehensive network infrastructure for entire campus connectivity",
      features: ["WiFi Coverage", "Fiber Optic Installation", "Network Security", "Bandwidth Management"],
      price: "₹1,50,000+"
    },
    {
      icon: Monitor,
      title: "Smart Classroom Setup",
      description: "Transform traditional classrooms into interactive learning environments",
      features: ["Interactive Whiteboards", "Projector Systems", "Audio Solutions", "Control Systems"],
      price: "₹75,000+"
    },
    {
      icon: Headphones,
      title: "Audio-Visual Solutions",
      description: "Professional AV systems for auditoriums and conference rooms",
      features: ["Sound Systems", "Video Conferencing", "Recording Equipment", "Live Streaming"],
      price: "₹1,00,000+"
    }
  ];

  return (
    <>
      <main className="flex-1">
        <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-background py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
                🔍 Explore Our Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Complete Service Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Discover our comprehensive range of educational technology services designed to transform your institution
            </p>
          </div>
        </div>

        {/* Service Categories */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Service Categories</h2>
              <p className="text-xl text-muted-foreground">Four core areas of expertise to support your technology needs</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <Card key={category.title} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{animationDelay: `${0.1 * index}s`}}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 bg-${category.color}-100 rounded-lg`}>
                        <category.icon className={`h-8 w-8 text-${category.color}-600`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <p className="text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {category.services.map((service) => (
                        <div key={service} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" variant="outline">
                      Learn More <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Specialized Services */}
        <div className="py-20 bg-gradient-to-b from-slate-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Specialized Solutions</h2>
              <p className="text-xl text-muted-foreground">Advanced technology solutions for modern educational institutions</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {specializedServices.map((service, index) => (
                <Card key={service.title} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg">
                          <service.icon className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1">{service.price}</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                        Get Quote
                      </Button>
                      <Button variant="outline" className="flex-1">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Service Levels */}
        <div className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Service Levels</h2>
              <p className="text-xl text-muted-foreground">Choose the right level of support for your institution</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Badge className="w-fit mx-auto mb-4 bg-green-100 text-green-700">Basic</Badge>
                  <CardTitle className="text-2xl">Essential Support</CardTitle>
                  <div className="text-3xl font-bold text-green-600 mt-2">₹15,000/month</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
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
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Standard installation support
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 border-orange-200 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-600 text-white">Most Popular</Badge>
                </div>
                <CardHeader>
                  <Badge className="w-fit mx-auto mb-4 bg-orange-100 text-orange-700">Professional</Badge>
                  <CardTitle className="text-2xl">Complete Care</CardTitle>
                  <div className="text-3xl font-bold text-orange-600 mt-2">₹35,000/month</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
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
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Full installation & setup
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Badge className="w-fit mx-auto mb-4 bg-purple-100 text-purple-700">Enterprise</Badge>
                  <CardTitle className="text-2xl">Premium Support</CardTitle>
                  <div className="text-3xl font-bold text-purple-600 mt-2">₹75,000/month</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-20 bg-gradient-to-r from-slate-50 to-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Services?</h2>
              <p className="text-xl text-muted-foreground">Trusted by 150+ educational institutions across India</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <p className="text-muted-foreground font-medium">Support Available</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-blue-600 mb-2">98.5%</div>
                  <p className="text-muted-foreground font-medium">Customer Satisfaction</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-green-600 mb-2">1200+</div>
                  <p className="text-muted-foreground font-medium">Successful Installations</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
                  <p className="text-muted-foreground font-medium">Educational Partners</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Choose the service that best fits your institution's needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}