import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";

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

  const httpServer = createServer(app);

  return httpServer;
}
