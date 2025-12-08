import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";

// In-memory user storage
const users = new Map<string, { id: string; email: string; password: string; firstName: string; lastName: string; institution: string }>();

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication only if REPL_ID is provided (for Replit deployment)
  if (process.env.REPL_ID) {
    await setupAuth(app);
  }

  // Auth route to get current user (only if auth is enabled)
  if (process.env.REPL_ID) {
    app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
      try {
        const userId = req.user.claims.sub;
        const user = await storage.getUser(userId);
        res.json(user);
      } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Failed to fetch user" });
      }
    });
  }

  // Signup route
  app.post('/api/auth/signup', async (req, res) => {
    try {
      const { email, password, firstName, lastName, institution } = req.body;
      
      if (users.has(email)) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        password,
        firstName,
        lastName,
        institution,
      };
      
      users.set(email, newUser);

      res.json({ message: "Account created successfully", user: { id: newUser.id, email: newUser.email } });
    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({ message: "Failed to create account" });
    }
  });

  // Login route
  app.post('/api/auth/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      
      const user = users.get(email);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      res.json({ message: "Login successful", user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName } });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Failed to login" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
