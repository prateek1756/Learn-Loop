
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Award, Globe, Target, Heart, Zap } from "lucide-react";

export default function About() {
  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Badge variant="outline" className="mb-4">Established 2020</Badge>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              About LearnLoop Store
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming education through innovative technology solutions that empower institutions to create exceptional learning experiences
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  To democratize access to cutting-edge educational technology, making it simple for institutions to discover, procure, and implement solutions that enhance learning outcomes and operational efficiency.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Simplifying technology procurement for education</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Bridging the gap between innovation and implementation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Empowering educators with the right tools</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 text-center">
                  <GraduationCap className="h-20 w-20 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Education First</h3>
                  <p className="text-muted-foreground">Every decision we make is guided by our commitment to improving educational outcomes</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl p-8 text-center">
                  <Heart className="h-20 w-20 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
                  <p className="text-muted-foreground">Integrity, innovation, and impact drive everything we do</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-8 w-8 text-blue-500" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  To become the most trusted partner for educational institutions worldwide, creating a future where technology seamlessly enhances every aspect of the learning journey.
                </p>
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                  Join Our Journey
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-muted-foreground">Numbers that reflect our commitment to educational excellence</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground font-medium">Institutions Served</p>
                  <p className="text-xs text-muted-foreground mt-1">Across 25+ states</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
                  <p className="text-muted-foreground font-medium">Industry Awards</p>
                  <p className="text-xs text-muted-foreground mt-1">Excellence in EdTech</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <Globe className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-green-500 mb-2">1M+</div>
                  <p className="text-muted-foreground font-medium">Students Impacted</p>
                  <p className="text-xs text-muted-foreground mt-1">Through our solutions</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <GraduationCap className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-purple-500 mb-2">98%</div>
                  <p className="text-muted-foreground font-medium">Satisfaction Rate</p>
                  <p className="text-xs text-muted-foreground mt-1">Customer feedback</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-primary to-primary/80">
          <div className="max-w-4xl mx-auto px-6 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Institution?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of educational institutions that trust LearnLoop Store for their technology needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Explore Solutions
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}