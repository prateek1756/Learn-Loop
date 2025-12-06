import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Users, Lightbulb, CheckCircle, Clock } from "lucide-react";

export default function BookConsultation() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  return (
    <>
      <main className="flex-1">
        <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-background py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-6">
              <Lightbulb className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Book Consultation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get expert advice on technology solutions tailored to your institution's needs
            </p>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-green-600" />
                    Schedule Your Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="institutionName">Institution Name *</Label>
                      <Input id="institutionName" placeholder="Your institution name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPerson">Contact Person *</Label>
                      <Input id="contactPerson" placeholder="Your full name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="contact@institution.edu" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Institution Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select institution type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="school">School (K-12)</SelectItem>
                        <SelectItem value="college">College</SelectItem>
                        <SelectItem value="university">University</SelectItem>
                        <SelectItem value="training">Training Center</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Consultation Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="What do you need help with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology-assessment">Technology Assessment</SelectItem>
                        <SelectItem value="budget-planning">Budget Planning</SelectItem>
                        <SelectItem value="system-design">System Design</SelectItem>
                        <SelectItem value="implementation-strategy">Implementation Strategy</SelectItem>
                        <SelectItem value="general-consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Preferred Date *</Label>
                      <Input 
                        type="date" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Time *</Label>
                      <Select onValueChange={setSelectedTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Current Challenges</Label>
                    <Textarea 
                      placeholder="Describe your current technology challenges or goals..."
                      rows={4}
                    />
                  </div>

                  <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      What You'll Get
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Comprehensive needs assessment
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Technology roadmap planning
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Budget optimization strategies
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Implementation timeline
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Vendor recommendations
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Follow-up support plan
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-blue-600" />
                      Our Experts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Technology Consultants</h4>
                          <p className="text-sm text-muted-foreground">15+ years in educational technology</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <Lightbulb className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Solution Architects</h4>
                          <p className="text-sm text-muted-foreground">Custom system design specialists</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-purple-600" />
                      Consultation Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-purple-600">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Discovery Call (30 min)</h4>
                          <p className="text-sm text-muted-foreground">Understanding your needs and challenges</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-purple-600">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Analysis & Planning (45 min)</h4>
                          <p className="text-sm text-muted-foreground">Detailed assessment and solution design</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-purple-600">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Recommendations (15 min)</h4>
                          <p className="text-sm text-muted-foreground">Actionable next steps and timeline</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Free Consultation Available</h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert advice at no cost - our commitment to educational excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Call Now: +91 98765 43210
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Email: consult@edutechstore.com
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}