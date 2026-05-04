import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEntrySchema, insertDemoRequestSchema } from "@shared/schema";
import axios from "axios";
import { sendDemoRequestNotification } from "./email";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistEntrySchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(validatedData);
      res.status(201).json(entry);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Failed to create waitlist entry" });
      }
    }
  });

  app.post("/api/demo-request", async (req, res) => {
    try {
      const validatedData = insertDemoRequestSchema.parse(req.body);
      
      const entry = await storage.createDemoRequest(validatedData);

      // Send email notification to Steve
      await sendDemoRequestNotification(validatedData);

      if (process.env.ATTIO_TOKEN) {
        try {
          await axios.post(
            "https://api.attio.com/v2/objects/people/records/assert",
            {
              data: {
                values: {
                  email_addresses: [{ email_address: validatedData.email }],
                  name: [{ first_name: validatedData.firstName, last_name: validatedData.lastName }]
                }
              }
            },
            {
              headers: {
                Authorization: `Bearer ${process.env.ATTIO_TOKEN}`,
                "Content-Type": "application/json"
              }
            }
          );
        } catch (attioError) {
          console.error("Attio sync failed:", attioError);
        }
      }

      res.status(201).json({ message: "Demo request submitted!", id: entry.id });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Failed to submit demo request" });
      }
    }
  });

  return httpServer;
}
