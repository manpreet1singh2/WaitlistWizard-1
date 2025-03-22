import express, { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  const apiRouter = express.Router();
  app.use("/api", apiRouter);

  // Waitlist subscription endpoint
  apiRouter.post("/waitlist", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = insertWaitlistSchema.parse(req.body);
      
      // Check if email already exists
      const existingEntry = await storage.getWaitlistEntryByEmail(validatedData.email);
      if (existingEntry) {
        return res.status(409).json({ 
          message: "This email is already registered on our waitlist." 
        });
      }
      
      // Save to storage
      const entry = await storage.createWaitlistEntry(validatedData);
      
      // Return success
      return res.status(201).json({ 
        success: true,
        message: "Successfully added to waitlist",
        entry: {
          id: entry.id,
          email: entry.email,
          tradingExperience: entry.tradingExperience,
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: validationError.message || "Invalid data provided"
        });
      }
      
      return res.status(500).json({ 
        message: "An unexpected error occurred"
      });
    }
  });

  // Get waitlist count (for display purposes)
  apiRouter.get("/waitlist/count", async (_req: Request, res: Response) => {
    try {
      const entries = await storage.getWaitlistEntries();
      // Add random number for demo purposes
      const baseCount = 1243; // Starting count as displayed in design
      const actualCount = entries.length;
      const totalCount = baseCount + actualCount;
      
      return res.status(200).json({ count: totalCount });
    } catch (error) {
      return res.status(500).json({ 
        message: "An unexpected error occurred" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
