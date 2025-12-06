import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Wrench, CheckCircle } from "lucide-react";

export default function ScheduleInstallation() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  return (
    <>
      <main className="flex-1">
        <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-background py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="p-4 bg-orange-100 rounded-full w-fit mx-auto mb-6">
              <Wrench className="h-12 w-12 text-orange-600" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Schedule Installation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a convenient time for our professional installation team to visit your institution
            </p>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-orange-600" />
                    Installation Booking
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
                    <Label htmlFor="address">Installation Address *</Label>
                    <Textarea 
                      id="address" 
                      placeholder="Complete address where installation will take place"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Service Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select installation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hardware">Hardware Installation</SelectItem>
                        <SelectItem value="software">Software Setup</SelectItem>
                        <SelectItem value="network">Network Configuration</SelectItem>
                        <SelectItem value="complete">Complete System Setup</SelectItem>
                        <SelectItem value="maintenance">Maintenance Visit</SelectItem>
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
                    <Label>Equipment/Products</Label>
                    <Textarea 
                      placeholder="List the equipment or products that need installation..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Special Requirements</Label>
                    <Textarea 
                      placeholder="Any special access requirements, preparation needed, or specific instructions..."
                      rows={3}
                    />
                  </div>

                  <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                    Schedule Installation
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      What's Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Professional on-site installation
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Complete system configuration
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Network setup and testing
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Staff training session
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Documentation and manuals
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        30-day support warranty
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-blue-600" />
                      Installation Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-600">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Site Assessment</h4>
                          <p className="text-sm text-muted-foreground">30-60 minutes initial evaluation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-600">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Equipment Setup</h4>
                          <p className="text-sm text-muted-foreground">2-4 hours depending on complexity</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-600">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Testing & Training</h4>
                          <p className="text-sm text-muted-foreground">1-2 hours system testing and staff training</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-purple-600" />
                      Service Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      We provide installation services across major cities in India:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>• Delhi NCR</div>
                      <div>• Mumbai</div>
                      <div>• Bangalore</div>
                      <div>• Chennai</div>
                      <div>• Hyderabad</div>
                      <div>• Pune</div>
                      <div>• Kolkata</div>
                      <div>• Ahmedabad</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      For other locations, please contact us for availability.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Urgent Installation?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our emergency installation team for same-day or next-day service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                Call Emergency Line: +91 98765 43210
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                WhatsApp Support
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}