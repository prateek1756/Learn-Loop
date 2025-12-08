import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Users, Monitor, Globe, CheckCircle, Star, Clock, Trophy, BookOpen, Calendar, Award, Video, FileText, Headphones, Zap, Shield, Target, X, Play } from "lucide-react";

export default function Training() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [previewCourse, setPreviewCourse] = useState<any>(null);
  const [trialForm, setTrialForm] = useState({ name: '', email: '', institution: '' });

  const handleStartTrial = () => {
    setIsTrialModalOpen(true);
  };

  const handleBrowseCatalog = () => {
    setIsCatalogModalOpen(true);
  };

  const handleViewPricing = () => {
    setIsPricingModalOpen(true);
  };

  const handlePreviewCourse = (course: any) => {
    setPreviewCourse(course);
  };

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Trial signup:', trialForm);
    alert('Free trial started! Check your email for access details.');
    setIsTrialModalOpen(false);
    setTrialForm({ name: '', email: '', institution: '' });
  };

  const courses = [
    { id: 1, title: 'Introduction to Educational Technology', duration: '2 hours', level: 'Beginner', category: 'EdTech Basics', description: 'Learn the fundamentals of integrating technology in educational settings.', modules: 4 },
    { id: 2, title: 'Google Classroom Mastery', duration: '3 hours', level: 'Intermediate', category: 'LMS', description: 'Master Google Classroom for effective online teaching and learning.', modules: 6 },
    { id: 3, title: 'Creating Interactive Presentations', duration: '1.5 hours', level: 'Beginner', category: 'Content Creation', description: 'Design engaging presentations using modern tools and techniques.', modules: 3 },
    { id: 4, title: 'Digital Assessment Strategies', duration: '2.5 hours', level: 'Advanced', category: 'Assessment', description: 'Implement effective digital assessment methods and tools.', modules: 5 },
    { id: 5, title: 'Virtual Reality in Education', duration: '4 hours', level: 'Advanced', category: 'Emerging Tech', description: 'Explore VR applications and implementation in educational environments.', modules: 8 },
    { id: 6, title: 'Online Safety for Educators', duration: '1 hour', level: 'Beginner', category: 'Digital Safety', description: 'Essential online safety practices for educators and students.', modules: 2 },
  ];

  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-background py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="animate-fade-in-up">
              <Badge variant="outline" className="mb-4 border-purple-500 text-purple-600">
                <Trophy className="h-3 w-3 mr-1" />
                Certified Training Programs
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Training Excellence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Empower your educators and staff with comprehensive technology training programs designed for the modern educational landscape
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300">
                Explore Programs
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 transition-all duration-300">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Training Programs */}
        <div className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Training Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive training solutions tailored for different roles and skill levels in your institution
              </p>
            </div>
            
            <Tabs defaultValue="teacher" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="teacher">Teacher Training</TabsTrigger>
                <TabsTrigger value="admin">Administrator</TabsTrigger>
                <TabsTrigger value="student">Student Workshops</TabsTrigger>
                <TabsTrigger value="online">Online Courses</TabsTrigger>
              </TabsList>
              
              <TabsContent value="teacher" className="space-y-8">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-t-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-green-100 rounded-lg">
                          <GraduationCap className="h-10 w-10 text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-green-800">Teacher Training Program</CardTitle>
                          <p className="text-green-600">Comprehensive Professional Development</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        Most Popular
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Program Overview</h3>
                        <p className="text-muted-foreground mb-6">
                          Transform your teaching with cutting-edge educational technology. Our comprehensive program equips educators with practical skills to enhance student engagement and learning outcomes.
                        </p>
                        
                        <div className="space-y-4 mb-6">
                          <div className="flex items-start gap-3">
                            <Video className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">Interactive Learning Management</p>
                              <p className="text-xs text-muted-foreground">Master LMS platforms, gradebooks, and student analytics</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Target className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">Digital Classroom Tools</p>
                              <p className="text-xs text-muted-foreground">Smart boards, tablets, educational apps integration</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Award className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">Assessment & Feedback</p>
                              <p className="text-xs text-muted-foreground">Digital assessment tools and real-time feedback systems</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">Digital Safety & Ethics</p>
                              <p className="text-xs text-muted-foreground">Online safety, privacy, and digital citizenship</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Training Modules</h3>
                        <div className="space-y-3 mb-6">
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-sm">Module 1: Technology Foundations</span>
                              <Badge variant="outline" className="text-xs">4 hours</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">Basic tech skills, hardware setup, troubleshooting</p>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-sm">Module 2: Digital Pedagogy</span>
                              <Badge variant="outline" className="text-xs">6 hours</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">Blended learning, flipped classroom, online engagement</p>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-sm">Module 3: Content Creation</span>
                              <Badge variant="outline" className="text-xs">4 hours</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">Interactive presentations, multimedia content, videos</p>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-sm">Module 4: Assessment Tools</span>
                              <Badge variant="outline" className="text-xs">2 hours</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">Online quizzes, rubrics, progress tracking</p>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg mb-6">
                          <div className="flex items-center gap-3 mb-3">
                            <Star className="h-5 w-5 text-yellow-500 fill-current" />
                            <div>
                              <p className="font-medium text-sm">4.9/5 rating</p>
                              <p className="text-xs text-muted-foreground">from 2,500+ teachers</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <p className="text-2xl font-bold text-green-600">₹12,999</p>
                              <p className="text-xs text-muted-foreground">per teacher</p>
                            </div>
                            <div>
                              <p className="text-2xl font-bold text-green-600">16</p>
                              <p className="text-xs text-muted-foreground">total hours</p>
                            </div>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-green-600 hover:bg-green-700 mb-3">
                          Enroll Teachers Now
                        </Button>
                        <Button variant="outline" className="w-full border-green-200 text-green-600">
                          Download Curriculum
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="admin" className="space-y-8">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-t-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <Users className="h-10 w-10 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-blue-800">Administrator Training</CardTitle>
                          <p className="text-blue-600">Advanced IT & System Management</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-blue-200 text-blue-600">
                        Advanced Level
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Program Overview</h3>
                        <p className="text-muted-foreground mb-6">
                          Master the technical infrastructure that powers modern educational institutions. From network management to security protocols, become the backbone of your institution's digital transformation.
                        </p>
                        
                        <div className="space-y-4 mb-6">
                          <div className="flex items-start gap-3">
                            <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">Network Security & Management</p>
                              <p className="text-xs text-muted-foreground">Firewall configuration, VPN setup, threat detection</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Users className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">User & Access Management</p>
                              <p className="text-xs text-muted-foreground">Active Directory, SSO, role-based permissions</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Monitor className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">System Monitoring & Analytics</p>
                              <p className="text-xs text-muted-foreground">Performance monitoring, usage analytics, reporting</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Zap className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">Automation & Scripting</p>
                              <p className="text-xs text-muted-foreground">PowerShell, batch operations, automated backups</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Certification Tracks</h3>
                        <div className="space-y-3 mb-6">
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-sm">Track 1: Network Administration</span>
                              <Badge variant="outline" className="text-xs">8 hours</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">Network setup, security, troubleshooting</p>
                          </div>
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-sm">Track 2: System Administration</span>
                              <Badge variant="outline" className="text-xs">8 hours</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">Server management, user accounts, policies</p>
                          </div>
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-sm">Track 3: Security Specialist</span>
                              <Badge variant="outline" className="text-xs">6 hours</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">Cybersecurity, compliance, incident response</p>
                          </div>
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-sm">Track 4: Data Management</span>
                              <Badge variant="outline" className="text-xs">2 hours</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">Backup strategies, data recovery, analytics</p>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg mb-6">
                          <div className="flex items-center gap-3 mb-3">
                            <Award className="h-5 w-5 text-blue-500" />
                            <div>
                              <p className="font-medium text-sm">Industry Certification</p>
                              <p className="text-xs text-muted-foreground">Recognized by leading tech companies</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <p className="text-2xl font-bold text-blue-600">₹18,999</p>
                              <p className="text-xs text-muted-foreground">per admin</p>
                            </div>
                            <div>
                              <p className="text-2xl font-bold text-blue-600">24</p>
                              <p className="text-xs text-muted-foreground">total hours</p>
                            </div>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-3">
                          Enroll Administrators
                        </Button>
                        <Button variant="outline" className="w-full border-blue-200 text-blue-600">
                          View Prerequisites
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="student" className="space-y-8">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-t-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-purple-100 rounded-lg">
                          <Monitor className="h-10 w-10 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-purple-800">Student Workshops</CardTitle>
                          <p className="text-purple-600">Digital Literacy & Skills Development</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-purple-200 text-purple-600">
                        Age-Appropriate
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Workshop Series</h3>
                        <p className="text-muted-foreground mb-6">
                          Empower students with essential digital skills through engaging, hands-on workshops tailored for different age groups and learning levels.
                        </p>
                        
                        <div className="space-y-4 mb-6">
                          <div className="flex items-start gap-3">
                            <BookOpen className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">Digital Literacy Fundamentals</p>
                              <p className="text-xs text-muted-foreground">Basic computer skills, internet navigation, file management</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Shield className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">Online Safety & Digital Citizenship</p>
                              <p className="text-xs text-muted-foreground">Cyberbullying prevention, privacy protection, ethical behavior</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Video className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">Creative Technology</p>
                              <p className="text-xs text-muted-foreground">Digital art, video editing, presentation skills</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Target className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">Research & Information Skills</p>
                              <p className="text-xs text-muted-foreground">Source evaluation, fact-checking, academic integrity</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Age-Based Programs</h3>
                        <div className="space-y-3 mb-6">
                          <div className="p-3 bg-purple-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-sm">Elementary (Ages 6-10)</span>
                              <Badge variant="outline" className="text-xs">2 hours</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">Basic computer skills, educational games, digital art</p>
                          </div>
                          <div className="p-3 bg-purple-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-sm">Middle School (Ages 11-13)</span>
                              <Badge variant="outline" className="text-xs">3 hours</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">Internet safety, research skills, basic coding</p>
                          </div>
                          <div className="p-3 bg-purple-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-sm">High School (Ages 14-18)</span>
                              <Badge variant="outline" className="text-xs">4 hours</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">Advanced digital skills, career preparation, ethics</p>
                          </div>
                          <div className="p-3 bg-purple-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-sm">Special Needs Adaptation</span>
                              <Badge variant="outline" className="text-xs">Custom</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">Accessible technology, assistive tools, inclusive design</p>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg mb-6">
                          <div className="flex items-center gap-3 mb-3">
                            <Calendar className="h-5 w-5 text-purple-500" />
                            <div>
                              <p className="font-medium text-sm">Flexible Scheduling</p>
                              <p className="text-xs text-muted-foreground">Workshops available during school hours</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <p className="text-2xl font-bold text-purple-600">₹299</p>
                              <p className="text-xs text-muted-foreground">per student</p>
                            </div>
                            <div>
                              <p className="text-2xl font-bold text-purple-600">25</p>
                              <p className="text-xs text-muted-foreground">max per session</p>
                            </div>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-purple-600 hover:bg-purple-700 mb-3">
                          Schedule Workshop
                        </Button>
                        <Button variant="outline" className="w-full border-purple-200 text-purple-600">
                          View Sample Activities
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="online" className="space-y-8">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="bg-gradient-to-br from-orange-50 to-red-50 rounded-t-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-orange-100 rounded-lg">
                          <Globe className="h-10 w-10 text-orange-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-orange-800">Online Learning Platform</CardTitle>
                          <p className="text-orange-600">Self-Paced Professional Development</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-orange-200 text-orange-600">
                        24/7 Access
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Learning Experience</h3>
                        <p className="text-muted-foreground mb-6">
                          Access our comprehensive library of educational technology courses anytime, anywhere. Perfect for busy educators who need flexible learning options.
                        </p>
                        
                        <div className="space-y-4 mb-6">
                          <div className="flex items-start gap-3">
                            <Video className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">HD Video Lessons</p>
                              <p className="text-xs text-muted-foreground">Professional quality videos with subtitles</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <FileText className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">Interactive Assignments</p>
                              <p className="text-xs text-muted-foreground">Hands-on projects and practical exercises</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Headphones className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">Expert Support</p>
                              <p className="text-xs text-muted-foreground">Live chat support and discussion forums</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Award className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">Digital Certificates</p>
                              <p className="text-xs text-muted-foreground">Shareable certificates for LinkedIn and resumes</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Course Categories</h3>
                        <div className="space-y-3 mb-6">
                          <div className="p-3 bg-orange-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-sm">Educational Technology Basics</span>
                              <Badge variant="outline" className="text-xs">12 courses</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">Fundamentals of EdTech integration</p>
                          </div>
                          <div className="p-3 bg-orange-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-sm">Learning Management Systems</span>
                              <Badge variant="outline" className="text-xs">8 courses</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">Canvas, Moodle, Google Classroom mastery</p>
                          </div>
                          <div className="p-3 bg-orange-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-sm">Digital Assessment Tools</span>
                              <Badge variant="outline" className="text-xs">15 courses</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">Online testing, rubrics, feedback systems</p>
                          </div>
                          <div className="p-3 bg-orange-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-sm">Advanced Integration</span>
                              <Badge variant="outline" className="text-xs">20 courses</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">AI tools, VR/AR, emerging technologies</p>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg mb-6">
                          <div className="flex items-center gap-3 mb-3">
                            <Globe className="h-5 w-5 text-orange-500" />
                            <div>
                              <p className="font-medium text-sm">Unlimited Access</p>
                              <p className="text-xs text-muted-foreground">All courses included in subscription</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <p className="text-2xl font-bold text-orange-600">₹4,999</p>
                              <p className="text-xs text-muted-foreground">per year</p>
                            </div>
                            <div>
                              <p className="text-2xl font-bold text-orange-600">55+</p>
                              <p className="text-xs text-muted-foreground">total courses</p>
                            </div>
                          </div>
                        </div>
                        
                        <Button 
                          className="w-full bg-orange-600 hover:bg-orange-700 mb-3"
                          onClick={handleStartTrial}
                        >
                          Start Free Trial
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full border-orange-200 text-orange-600"
                          onClick={handleBrowseCatalog}
                        >
                          Browse Course Catalog
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Training Programs?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Compare our comprehensive training solutions with traditional professional development approaches
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-2 border-green-200 bg-green-50/50">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    LearnLoop Store Training
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Hands-on practice with real technology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Industry-recognized certifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Ongoing support and resources</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Customized for educational institutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Multiple delivery formats available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Progress tracking and analytics</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-600">Traditional Training</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full bg-gray-300" />
                    <span className="text-sm text-muted-foreground">Generic, one-size-fits-all approach</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full bg-gray-300" />
                    <span className="text-sm text-muted-foreground">Limited hands-on experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full bg-gray-300" />
                    <span className="text-sm text-muted-foreground">No ongoing support after training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full bg-gray-300" />
                    <span className="text-sm text-muted-foreground">Theoretical focus without practical application</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full bg-gray-300" />
                    <span className="text-sm text-muted-foreground">Fixed schedule and location</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full bg-gray-300" />
                    <span className="text-sm text-muted-foreground">No progress measurement</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16 bg-gradient-to-r from-slate-50 to-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Educators Are Saying</h2>
              <p className="text-muted-foreground">Real feedback from teachers and administrators who've transformed their institutions</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "The teacher training program completely transformed how I integrate technology in my classroom. My students are more engaged than ever!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">PS</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Priya Sharma</p>
                      <p className="text-xs text-muted-foreground">Mathematics Teacher, Delhi Public School</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "The administrator training gave me the confidence to manage our school's technology infrastructure effectively. Excellent program!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">RK</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Rajesh Kumar</p>
                      <p className="text-xs text-muted-foreground">IT Administrator, St. Xavier's School</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "The student workshops were a hit! Our kids learned valuable digital skills while having fun. Highly recommend for all schools."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold text-sm">AM</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Anita Mehta</p>
                      <p className="text-xs text-muted-foreground">Principal, Modern Public School</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Training Impact</h2>
              <p className="text-muted-foreground">Real results from our comprehensive training programs</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                  <p className="text-muted-foreground font-medium text-sm">Educators Trained</p>
                  <p className="text-xs text-muted-foreground mt-1">Across 500+ institutions</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <p className="text-muted-foreground font-medium text-sm">Satisfaction Rate</p>
                  <p className="text-xs text-muted-foreground mt-1">Post-training surveys</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                  <p className="text-muted-foreground font-medium text-sm">Implementation Success</p>
                  <p className="text-xs text-muted-foreground mt-1">Technology adoption</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <p className="text-muted-foreground font-medium text-sm">Support Available</p>
                  <p className="text-xs text-muted-foreground mt-1">Ongoing assistance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 bg-gradient-to-r from-slate-50 to-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Get answers to common questions about our training programs</p>
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How long does each training program take?</h3>
                  <p className="text-muted-foreground text-sm">
                    Training duration varies by program: Teacher Training (16 hours), Administrator Training (24 hours), Student Workshops (2-4 hours), and Online Courses are self-paced with unlimited access.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Do you provide certificates upon completion?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, all participants receive industry-recognized digital certificates upon successful completion of their training program. These can be shared on LinkedIn and added to professional portfolios.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Can training be customized for our institution's specific needs?</h3>
                  <p className="text-muted-foreground text-sm">
                    Absolutely! We offer customized training programs tailored to your institution's technology stack, curriculum requirements, and specific learning objectives. Contact us for a personalized consultation.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What support is available after training completion?</h3>
                  <p className="text-muted-foreground text-sm">
                    We provide 6 months of ongoing support including access to our help desk, resource library, community forums, and quarterly follow-up sessions to ensure successful implementation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Institution?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of educators who have revolutionized their teaching with our comprehensive training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                Get Custom Training Plan
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                Schedule Free Consultation
              </Button>
            </div>
            <p className="text-sm opacity-75">
              ✓ Free needs assessment • ✓ Custom curriculum design • ✓ Flexible scheduling options
            </p>
          </div>
        </div>
      </main>
      
      {/* Free Trial Modal */}
      <Dialog open={isTrialModalOpen} onOpenChange={setIsTrialModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Play className="h-5 w-5 text-orange-600" />
              Start Your Free Trial
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleTrialSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={trialForm.name}
                onChange={(e) => setTrialForm({ ...trialForm, name: e.target.value })}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={trialForm.email}
                onChange={(e) => setTrialForm({ ...trialForm, email: e.target.value })}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <Label htmlFor="institution">Institution Name</Label>
              <Input
                id="institution"
                value={trialForm.institution}
                onChange={(e) => setTrialForm({ ...trialForm, institution: e.target.value })}
                placeholder="Enter your school/college name"
                required
              />
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-medium text-sm mb-2">Your 14-day free trial includes:</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Access to 10 premium courses</li>
                <li>• Progress tracking and certificates</li>
                <li>• Live chat support</li>
                <li>• Mobile app access</li>
              </ul>
            </div>
            <div className="flex gap-3">
              <Button type="submit" className="flex-1 bg-orange-600 hover:bg-orange-700">
                Start Free Trial
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsTrialModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Course Catalog Modal */}
      <Dialog open={isCatalogModalOpen} onOpenChange={setIsCatalogModalOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-orange-600" />
              Course Catalog - 55+ Courses Available
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid gap-4">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium mb-2">{course.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {course.duration}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {course.level}
                          </Badge>
                          <span className="text-xs">{course.category}</span>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="ml-4"
                        onClick={() => handlePreviewCourse(course)}
                      >
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Ready to Access All Courses?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get unlimited access to our complete library of 55+ courses
                </p>
                <div className="flex gap-3 justify-center">
                  <Button 
                    className="bg-orange-600 hover:bg-orange-700"
                    onClick={() => {
                      setIsCatalogModalOpen(false);
                      setIsTrialModalOpen(true);
                    }}
                  >
                    Start Free Trial
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleViewPricing}
                  >
                    View Pricing
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Pricing Modal */}
      <Dialog open={isPricingModalOpen} onOpenChange={setIsPricingModalOpen}>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Online Course Pricing Plans</DialogTitle>
          </DialogHeader>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-orange-200">
              <CardHeader className="text-center">
                <CardTitle className="text-orange-600">Free Trial</CardTitle>
                <div className="text-3xl font-bold">₹0</div>
                <p className="text-sm text-muted-foreground">14 days</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">10 premium courses</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Progress tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Basic support</span>
                </div>
                <Button className="w-full mt-4" onClick={() => { setIsPricingModalOpen(false); setIsTrialModalOpen(true); }}>
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-200 relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600">Most Popular</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-blue-600">Annual Plan</CardTitle>
                <div className="text-3xl font-bold">₹4,999</div>
                <p className="text-sm text-muted-foreground">per year</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">All 55+ courses</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Unlimited access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Certificates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Priority support</span>
                </div>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  Choose Annual
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Monthly Plan</CardTitle>
                <div className="text-3xl font-bold">₹599</div>
                <p className="text-sm text-muted-foreground">per month</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">All 55+ courses</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Monthly access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Certificates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Standard support</span>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Choose Monthly
                </Button>
              </CardContent>
            </Card>
          </div>
        </DialogContent>
      </Dialog>

      {/* Course Preview Modal */}
      <Dialog open={!!previewCourse} onOpenChange={() => setPreviewCourse(null)}>
        <DialogContent className="sm:max-w-2xl">
          {previewCourse && (
            <>
              <DialogHeader>
                <DialogTitle>{previewCourse.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {previewCourse.duration}
                  </span>
                  <Badge variant="outline">{previewCourse.level}</Badge>
                  <span>{previewCourse.category}</span>
                </div>
                
                <p className="text-muted-foreground">{previewCourse.description}</p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Course Overview</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Duration:</span> {previewCourse.duration}
                    </div>
                    <div>
                      <span className="font-medium">Modules:</span> {previewCourse.modules}
                    </div>
                    <div>
                      <span className="font-medium">Level:</span> {previewCourse.level}
                    </div>
                    <div>
                      <span className="font-medium">Category:</span> {previewCourse.category}
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">What You'll Learn</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Core concepts and practical applications</li>
                    <li>• Hands-on exercises and real-world examples</li>
                    <li>• Best practices and implementation strategies</li>
                    <li>• Assessment methods and evaluation techniques</li>
                  </ul>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    className="flex-1"
                    onClick={() => {
                      setPreviewCourse(null);
                      setIsTrialModalOpen(true);
                    }}
                  >
                    Start Free Trial
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setPreviewCourse(null);
                      setIsPricingModalOpen(true);
                    }}
                  >
                    View Pricing
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}