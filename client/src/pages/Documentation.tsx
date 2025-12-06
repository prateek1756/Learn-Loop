
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, Video, Download, Search, Users } from "lucide-react";

export default function Documentation() {
  return (
    <>
      <main className="flex-1">
        <div className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Documentation</h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about using EduTech Store effectively
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle>User Guide</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">Complete step-by-step guide for navigating and using our platform</p>
                  <Button variant="outline" className="w-full">Read Guide</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Code className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle>API Documentation</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">Technical documentation for developers and system integrators</p>
                  <Button variant="outline" className="w-full">View API Docs</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Video className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle>Video Tutorials</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">Watch detailed video tutorials for common tasks and features</p>
                  <Button variant="outline" className="w-full">Watch Videos</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Download className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle>Downloads</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">Download product catalogs, installation guides, and resources</p>
                  <Button variant="outline" className="w-full">Download Center</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Search className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle>FAQ</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">Find answers to frequently asked questions</p>
                  <Button variant="outline" className="w-full">Browse FAQ</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">Join our community forum for discussions and tips</p>
                  <Button variant="outline" className="w-full">Join Community</Button>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-primary/5">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
                <p className="text-muted-foreground mb-6">Can't find what you're looking for? Our support team is ready to assist you.</p>
                <Button size="lg">Contact Support</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}