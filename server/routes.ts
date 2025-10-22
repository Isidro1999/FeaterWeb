import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSubscriberSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertNewsletterSubscriberSchema.parse(req.body);

      // Check if email already exists
      const existingSubscriber = await storage.getNewsletterSubscriberByEmail(validatedData.email);
      if (existingSubscriber) {
        return res.status(400).json({ 
          message: "This email is already subscribed to our newsletter" 
        });
      }

      // Create new subscriber
      const subscriber = await storage.createNewsletterSubscriber(validatedData);

      res.status(201).json({ 
        message: "Successfully subscribed to newsletter",
        subscriber: { email: subscriber.email }
      });
    } catch (error: any) {
      if (error.errors) {
        // Zod validation error
        return res.status(400).json({ 
          message: error.errors[0].message 
        });
      }
      
      console.error("Newsletter subscription error:", error);
      res.status(500).json({ 
        message: "Failed to subscribe to newsletter" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
