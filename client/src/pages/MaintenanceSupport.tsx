
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Wrench, Phone, CheckCircle, Star, AlertTriangle } from "lucide-react";

export default function MaintenanceSupport() {
  return (
    <>
      <main className="flex-1">
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-background py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-6">
              <Shield className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Maintenance Support
            </h1>
            <Badge className="mb-6 bg-blue-100 text-blue-700">24/7 Available</Badge>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ongoing maintenance and technical support to keep your equipment running smoothly
            </p>
          </div>
        </div>

        {/* Core Features */}
        <div className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <Wrench className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Preventive Maintenance</h3>
                  <p className="text-sm text-muted-foreground">Regular scheduled maintenance to prevent issues before they occur</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Remote Diagnostics</h3>
                  <p className="text-sm text-muted-foreground">Advanced remote monitoring and troubleshooting capabilities</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Priority Support</h3>
                  <p className="text-sm text-muted-foreground">Fast-track support for critical issues and emergencies</p>
                </CardContent>
              </Card>
            </div>

            <Card className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <Star className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <p className="text-lg font-medium text-blue-800">Uptime Guarantee</p>
                <p className="text-sm text-muted-foreground mt-2">We ensure your systems stay operational when you need them most</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Plans */}
        <div className="py-20 bg-gradient-to-b from-slate-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Maintenance Plans</h2>
              <p className="text-xl text-muted-foreground">Choose the right level of support for your institution</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <Badge className="w-fit mx-auto mb-4 bg-green-100 text-green-700">Basic</Badge>
                  <CardTitle className="text-2xl">Essential Care</CardTitle>
                  <div className="text-3xl font-bold text-green-600 mt-2">₹8,000/month</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Monthly maintenance visits
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Email support (24hr response)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Basic remote monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Standard repair service
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-blue-200 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                </div>
                <CardHeader className="text-center">
                  <Badge className="w-fit mx-auto mb-4 bg-blue-100 text-blue-700">Professional</Badge>
                  <CardTitle className="text-2xl">Complete Support</CardTitle>
                  <div className="text-3xl font-bold text-blue-600 mt-2">₹18,000/month</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Weekly maintenance checks
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      24/7 phone & email support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Advanced remote diagnostics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Priority repair service
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Preventive maintenance program
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <Badge className="w-fit mx-auto mb-4 bg-purple-100 text-purple-700">Enterprise</Badge>
                  <CardTitle className="text-2xl">Premium Care</CardTitle>
                  <div className="text-3xl font-bold text-purple-600 mt-2">₹35,000/month</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Daily system monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Dedicated support manager
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Predictive maintenance AI
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Emergency on-site service
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      99.9% uptime SLA
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

        {/* Support Process */}
        <div className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">How We Support You</h2>
              <p className="text-xl text-muted-foreground">Our proven maintenance process ensures maximum uptime</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Monitor</h3>
                <p className="text-sm text-muted-foreground">Continuous monitoring of your systems 24/7</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Detect</h3>
                <p className="text-sm text-muted-foreground">Early detection of potential issues</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Respond</h3>
                <p className="text-sm text-muted-foreground">Immediate response and troubleshooting</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="font-semibold mb-2">Resolve</h3>
                <p className="text-sm text-muted-foreground">Quick resolution and system optimization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Support */}
        <div className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <Clock className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Emergency Support Available</h2>
            <p className="text-xl mb-8 opacity-90">
              Critical system down? Our emergency team is ready to help 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                Emergency Hotline: +91 98765 43210
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                Request Emergency Support
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}