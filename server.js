const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Event Booking Platform Backend Running");
});

// Events API
app.get("/api/events", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Music Concert",
      date: "15 June 2026",
      location: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
    },
    {
      id: 2,
      title: "Tech Conference",
      date: "20 July 2026",
      location: "Bangalore",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865"
    },
    {
      id: 3,
      title: "Food Festival",
      date: "10 August 2026",
      location: "Chennai",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
    },
    {
      id: 4,
      title: "Sports Tournament",
      date: "5 September 2026",
      location: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
    }
  ]);
});

// Booking API
app.post("/api/bookings", (req, res) => {
  const booking = req.body;

  res.status(201).json({
    success: true,
    message: "Event booked successfully",
    booking
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});